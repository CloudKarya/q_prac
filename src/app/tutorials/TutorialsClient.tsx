"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const DEFAULT_BASE_URL = "https://qprac-runner-1076575453845.us-central1.run.app";

type CreateSessionResponse = {
  session_id: string;
  ws_url: string;
  expires_in_seconds?: number;
};

type RunnerStreamMessage = {
  type: "stream";
  name: "stdout" | "stderr" | string;
  text?: string;
};

type RunnerDoneMessage = {
  type: "done";
  cell_id: string;
  ok: boolean;
};

type RunnerErrorMessage = {
  type: "error";
  cell_id: string;
  ename?: string;
  evalue?: string;
  traceback?: string[];
};

type RunnerOutputMessage = {
  type: "output";
  cell_id: string;
  mime?: string;
  data_base64?: string;
};

type RunnerMessage =
  | RunnerStreamMessage
  | RunnerDoneMessage
  | RunnerErrorMessage
  | RunnerOutputMessage
  | { type: string; [k: string]: unknown };

type CellResult = {
  stdout: string;
  stderr: string;
  images: Array<{ mime: string; dataBase64: string }>;
  ok: boolean;
  error: RunnerErrorMessage | null;
};

type NotebookCell = {
  id: string;
  code: string;
  result: CellResult | null;
};

function newCellId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `cell_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

async function createSession(baseUrl: string): Promise<CreateSessionResponse> {
  const res = await fetch(`/api/qprac/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ baseUrl }),
  });
  if (!res.ok) {
    let detail = "";
    try {
      detail = await res.text();
    } catch {
      // ignore
    }
    throw new Error(`Session create failed (${res.status}): ${detail || ""}`.trim());
  }

  const json = (await res.json()) as unknown;
  if (
    !json ||
    typeof json !== "object" ||
    typeof (json as CreateSessionResponse).session_id !== "string" ||
    typeof (json as CreateSessionResponse).ws_url !== "string"
  ) {
    throw new Error("Unexpected /session response shape");
  }

  return json as CreateSessionResponse;
}

function runCellOverWebSocket(
  wsUrl: string,
  code: string,
  { timeoutMs = 20000 }: { timeoutMs?: number } = {}
): Promise<CellResult> {
  return new Promise((resolve, reject) => {
    const cellId = String(Date.now());
    const ws = new WebSocket(wsUrl);

    const state: CellResult = {
      stdout: "",
      stderr: "",
      images: [],
      ok: false,
      error: null,
    };

    const timer = window.setTimeout(() => {
      try {
        ws.close();
      } catch {
        // ignore
      }
      reject(new Error(`Timed out waiting for execution result (${timeoutMs}ms)`));
    }, timeoutMs);

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "execute", cell_id: cellId, code }));
    };

    ws.onerror = () => {
      window.clearTimeout(timer);
      reject(new Error("WebSocket error"));
    };

    ws.onmessage = (evt) => {
      let msg: RunnerMessage;
      try {
        msg = JSON.parse(String(evt.data)) as RunnerMessage;
      } catch {
        state.stderr += String(evt.data);
        return;
      }

      if (msg.type === "stream") {
        const m = msg as RunnerStreamMessage;
        if (m.name === "stdout") state.stdout += m.text ?? "";
        else state.stderr += m.text ?? "";
        return;
      }

      if (msg.type === "output") {
        const m = msg as RunnerOutputMessage;
        if (m.cell_id === cellId && m.mime === "image/png" && m.data_base64) {
          state.images.push({ mime: "image/png", dataBase64: m.data_base64 });
        }
        return;
      }

      if (msg.type === "done") {
        const m = msg as RunnerDoneMessage;
        if (m.cell_id !== cellId) return;
        state.ok = Boolean(m.ok);
        window.clearTimeout(timer);
        try {
          ws.close();
        } catch {
          // ignore
        }
        resolve(state);
        return;
      }

      if (msg.type === "error") {
        const m = msg as RunnerErrorMessage;
        if (m.cell_id !== cellId) return;
        state.ok = false;
        state.error = m;
        window.clearTimeout(timer);
        try {
          ws.close();
        } catch {
          // ignore
        }
        resolve(state);
      }
    };
  });
}

function pngDataUrlFromBase64(dataBase64: string) {
  return `data:image/png;base64,${dataBase64}`;
}

const INITIAL_CODES: string[] = [
  "import sys\nprint('python:', sys.version)\n",
  "x = 42\nprint('x set')\n",
  "print('x is', x)\n",
  "raise ValueError('demo error')\n",
];

export function TutorialsClient() {
  const defaultBaseUrl =
    process.env.NEXT_PUBLIC_QPRAC_RUNNER_BASE_URL ?? DEFAULT_BASE_URL;

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [wsUrl, setWsUrl] = useState<string | null>(null);
  const [baseUrl, setBaseUrl] = useState<string>(defaultBaseUrl);

  const [byokKeys, setByokKeys] = useState<{
    qupracs: string;
    nwip: string;
    ibm: string;
  }>(() => {
    if (typeof window === "undefined") {
      return { qupracs: "", nwip: "", ibm: "" };
    }

    return {
      qupracs: window.localStorage.getItem("byok.qupracs") ?? "",
      nwip: window.localStorage.getItem("byok.nwip") ?? "",
      ibm: window.localStorage.getItem("byok.ibm") ?? "",
    };
  });

  const [showKeys, setShowKeys] = useState<boolean>(false);

  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "creating" }
    | { state: "ready" }
    | { state: "error"; message: string }
  >({ state: "idle" });

  const [runningCellId, setRunningCellId] = useState<string | null>(null);
  const [cells, setCells] = useState<NotebookCell[]>(() =>
    INITIAL_CODES.map((code) => ({ id: newCellId(), code, result: null }))
  );

  const canRunCells = Boolean(wsUrl) && status.state === "ready";

  const sessionBadge = useMemo(() => {
    if (status.state === "creating") return "Creating session…";
    if (status.state === "error") return "Session error";
    if (status.state === "ready" && sessionId) return `Session: ${sessionId}`;
    return "No session";
  }, [sessionId, status.state]);

  async function onCreateSession() {
    setStatus({ state: "creating" });
    setSessionId(null);
    setWsUrl(null);

    try {
      const sess = await createSession(baseUrl);
      setSessionId(sess.session_id);
      setWsUrl(sess.ws_url);
      setStatus({ state: "ready" });
      setCells((prev) => prev.map((c) => ({ ...c, result: null })));
    } catch (e) {
      setStatus({
        state: "error",
        message: e instanceof Error ? e.message : "Failed to create session",
      });
    }
  }

  function onStopSession() {
    setSessionId(null);
    setWsUrl(null);
    setCells((prev) => prev.map((c) => ({ ...c, result: null })));
    setRunningCellId(null);
    setStatus({ state: "idle" });
  }

  function onResetOutputs() {
    setCells((prev) => prev.map((c) => ({ ...c, result: null })));
    setRunningCellId(null);
  }

  async function runCell(cellId: string) {
    if (!wsUrl) return;

    const code = cells.find((c) => c.id === cellId)?.code ?? "";
    setRunningCellId(cellId);
    setCells((prev) => prev.map((c) => (c.id === cellId ? { ...c, result: null } : c)));

    try {
      const out = await runCellOverWebSocket(wsUrl, code);
      setCells((prev) => prev.map((c) => (c.id === cellId ? { ...c, result: out } : c)));
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      setCells((prev) =>
        prev.map((c) =>
          c.id === cellId
            ? {
                ...c,
                result: {
          stdout: "",
          stderr: message,
          images: [],
          ok: false,
          error: null,
                },
              }
            : c
        )
      );
    } finally {
      setRunningCellId(null);
    }
  }

  function addCodeCell() {
    setCells((prev) => [...prev, { id: newCellId(), code: "", result: null }]);
  }

  function deleteCell(cellId: string) {
    setCells((prev) => prev.filter((c) => c.id !== cellId));
    setRunningCellId((cur) => (cur === cellId ? null : cur));
  }

  function moveCell(cellId: string, direction: "up" | "down") {
    setCells((prev) => {
      const idx = prev.findIndex((c) => c.id === cellId);
      if (idx === -1) return prev;
      const nextIdx = direction === "up" ? idx - 1 : idx + 1;
      if (nextIdx < 0 || nextIdx >= prev.length) return prev;
      const copy = [...prev];
      const tmp = copy[idx];
      copy[idx] = copy[nextIdx];
      copy[nextIdx] = tmp;
      return copy;
    });
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <header className="space-y-4">
          <p className="text-sm font-semibold tracking-wide text-foreground/70">
            Tutorials
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Hello Quantum
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">
            This is a minimal, notebook-like tutorial that talks to{" "}
            <span className="font-semibold">qprac-runner</span>: create a session,
            run a few “cells”, and observe that variables persist across them.
          </p>
        </header>

        <section className="mt-10 grid gap-6 lg:grid-cols-[360px_1fr]">
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-muted p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm font-semibold">Runner session</div>
                <div className="text-xs font-semibold text-foreground/70">
                  {sessionBadge}
                </div>
              </div>

              <div className="mt-4 space-y-3 text-sm text-foreground/80">
                <div>
                  <div className="text-xs font-semibold text-foreground/70">Base URL</div>
                  <input
                    value={baseUrl}
                    onChange={(e) => setBaseUrl(e.target.value)}
                    inputMode="url"
                    autoComplete="off"
                    spellCheck={false}
                    placeholder={DEFAULT_BASE_URL}
                    className="mt-1 w-full rounded-xl border border-surface-border bg-surface px-3 py-2 font-mono text-xs text-surface-foreground outline-none focus:border-background"
                    aria-label="qprac-runner base URL"
                  />
                </div>
              </div>

              {status.state === "error" ? (
                <div className="mt-4 rounded-xl border border-border bg-background/20 p-4 text-sm text-foreground">
                  <div className="font-semibold">Couldn’t create a session</div>
                  <div className="mt-1 text-foreground/80">{status.message}</div>
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={sessionId ? onStopSession : onCreateSession}
                  disabled={status.state === "creating"}
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 disabled:opacity-60"
                >
                  {sessionId ? "Stop session" : "Create session"}
                </button>

                <button
                  type="button"
                  onClick={onResetOutputs}
                  disabled={status.state === "creating"}
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90 disabled:opacity-60"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold tracking-tight">BYOK</h2>
                <label className="flex items-center gap-2 text-xs font-semibold text-foreground/70">
                  <input
                    type="checkbox"
                    checked={showKeys}
                    onChange={(e) => setShowKeys(e.target.checked)}
                    className="h-4 w-4"
                  />
                  Show
                </label>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                Bring your own keys for quantum platforms. Keys are stored locally in your browser and aren’t sent
                anywhere by this page.
              </p>

              <div className="mt-4 space-y-4">
                <label className="block">
                  <div className="text-xs font-semibold text-foreground/70">QuPracs (us)</div>
                  <input
                    type={showKeys ? "text" : "password"}
                    value={byokKeys.qupracs}
                    onChange={(e) => {
                      const v = e.target.value;
                      setByokKeys((prev) => ({ ...prev, qupracs: v }));
                      if (typeof window !== "undefined") window.localStorage.setItem("byok.qupracs", v);
                    }}
                    placeholder="Paste key…"
                    autoComplete="off"
                    spellCheck={false}
                    className="mt-1 w-full rounded-xl border border-surface-border bg-surface px-3 py-2 font-mono text-xs text-surface-foreground outline-none focus:border-background"
                  />
                </label>

                <label className="block">
                  <div className="text-xs font-semibold text-foreground/70">NWIP</div>
                  <input
                    type={showKeys ? "text" : "password"}
                    value={byokKeys.nwip}
                    onChange={(e) => {
                      const v = e.target.value;
                      setByokKeys((prev) => ({ ...prev, nwip: v }));
                      if (typeof window !== "undefined") window.localStorage.setItem("byok.nwip", v);
                    }}
                    placeholder="Paste key…"
                    autoComplete="off"
                    spellCheck={false}
                    className="mt-1 w-full rounded-xl border border-surface-border bg-surface px-3 py-2 font-mono text-xs text-surface-foreground outline-none focus:border-background"
                  />
                </label>

                <label className="block">
                  <div className="text-xs font-semibold text-foreground/70">IBM</div>
                  <input
                    type={showKeys ? "text" : "password"}
                    value={byokKeys.ibm}
                    onChange={(e) => {
                      const v = e.target.value;
                      setByokKeys((prev) => ({ ...prev, ibm: v }));
                      if (typeof window !== "undefined") window.localStorage.setItem("byok.ibm", v);
                    }}
                    placeholder="Paste key…"
                    autoComplete="off"
                    spellCheck={false}
                    className="mt-1 w-full rounded-xl border border-surface-border bg-surface px-3 py-2 font-mono text-xs text-surface-foreground outline-none focus:border-background"
                  />
                </label>
              </div>

              <div className="mt-4 text-xs text-foreground/70">
                Note: these keys aren’t used by the Hello Quantum cells yet.
              </div>
            </div>
          </aside>

          <div className="rounded-2xl border border-border bg-muted p-6">
            <div className="space-y-4">
              {cells.map((cell, idx) => {
                const isRunning = runningCellId === cell.id;
                const result = cell.result;

                return (
                  <div key={cell.id} className="rounded-2xl border border-border bg-background/10 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => runCell(cell.id)}
                          disabled={!canRunCells || runningCellId !== null}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-sm font-semibold text-surface-foreground hover:bg-surface/90 disabled:opacity-60"
                          aria-label={isRunning ? "Running cell" : "Run cell"}
                          title={isRunning ? "Running…" : "Run"}
                        >
                          {isRunning ? "…" : "▶"}
                        </button>
                        <div className="text-xs font-semibold text-foreground/70">{idx + 1}</div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => moveCell(cell.id, "up")}
                            disabled={idx === 0 || runningCellId !== null}
                            className="rounded-lg border border-border px-2 py-1 text-xs font-semibold hover:bg-white/10 disabled:opacity-50"
                            aria-label="Move cell up"
                            title="Move up"
                          >
                            ↑
                          </button>
                          <button
                            type="button"
                            onClick={() => moveCell(cell.id, "down")}
                            disabled={idx === cells.length - 1 || runningCellId !== null}
                            className="rounded-lg border border-border px-2 py-1 text-xs font-semibold hover:bg-white/10 disabled:opacity-50"
                            aria-label="Move cell down"
                            title="Move down"
                          >
                            ↓
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteCell(cell.id)}
                            disabled={runningCellId !== null}
                            className="rounded-lg border border-border px-2 py-1 text-xs font-semibold hover:bg-white/10 disabled:opacity-50"
                            aria-label="Delete cell"
                            title="Delete"
                          >
                            🗑
                          </button>
                        </div>

                        <textarea
                          value={cell.code}
                          onChange={(e) => {
                            const v = e.target.value;
                            setCells((prev) => prev.map((c) => (c.id === cell.id ? { ...c, code: v } : c)));
                          }}
                          placeholder="Start coding or generate with AI."
                          spellCheck={false}
                          className="mt-2 min-h-24 w-full resize-y rounded-xl border border-surface-border bg-surface p-4 font-mono text-xs text-surface-foreground outline-none focus:border-background"
                        />

                        {result ? (
                          <div className="mt-3 space-y-3">
                            {(result.stdout || result.stderr) && (
                              <pre className="overflow-x-auto rounded-xl border border-border bg-muted p-4 text-xs text-foreground">
                                {result.stdout}
                                {result.stderr ? (result.stdout ? "\n" : "") + result.stderr : ""}
                              </pre>
                            )}

                            {result.error ? (
                              <pre className="overflow-x-auto rounded-xl border border-border bg-muted p-4 text-xs text-foreground">
                                {JSON.stringify(result.error, null, 2)}
                              </pre>
                            ) : null}

                            {result.images.length ? (
                              <div className="grid gap-3 sm:grid-cols-2">
                                {result.images.map((img, imgIdx) => (
                                  <div
                                    key={`${cell.id}-img-${imgIdx}`}
                                    className="rounded-2xl border border-surface-border bg-surface p-3"
                                  >
                                    <Image
                                      src={pngDataUrlFromBase64(img.dataBase64)}
                                      alt={`cell output ${imgIdx + 1}`}
                                      width={1200}
                                      height={800}
                                      sizes="(min-width: 640px) 50vw, 100vw"
                                      className="h-auto w-full rounded-xl"
                                      unoptimized
                                    />
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={addCodeCell}
                  disabled={runningCellId !== null}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-muted px-6 py-2 text-sm font-semibold hover:bg-white/10 disabled:opacity-60"
                >
                  + Code
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
