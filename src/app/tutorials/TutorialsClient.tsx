"use client";

import Image from "next/image";
import Link from "next/link";
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

type TutorialsPreset =
  | "playground"
  | "ibm"
  | "dwave"
  | "ionq"
  | "quantinuum"
  | "braket"
  | "azure";

type ByokProvider = {
  id: string;
  label: string;
  envVar: string;
  placeholder?: string;
};

type PresetConfig = {
  byokProviders: ByokProvider[];
  initialCodes: string[];
};

const PRESETS: Record<TutorialsPreset, PresetConfig> = {
  playground: {
    byokProviders: [
      { id: "ibm", label: "IBM Quantum", envVar: "IBM_QUANTUM_TOKEN" },
      { id: "dwave", label: "D-Wave Leap", envVar: "DWAVE_API_TOKEN" },
      { id: "ionq", label: "IonQ", envVar: "IONQ_API_KEY" },
      { id: "quantinuum", label: "Quantinuum", envVar: "QUANTINUUM_API_KEY" },
    ],
    initialCodes: [
      "import sys\nprint('python:', sys.version)\n",
      "x = 42\nprint('x set')\n",
      "print('x is', x)\n",
      "raise ValueError('demo error')\n",
    ],
  },
  ibm: {
    byokProviders: [{ id: "ibm", label: "IBM Quantum token", envVar: "IBM_QUANTUM_TOKEN" }],
    initialCodes: [
      "import os, sys\nprint('python:', sys.version)\nprint('IBM token present:', bool(os.getenv('IBM_QUANTUM_TOKEN')))\n",
      "try:\n  from qiskit_ibm_runtime import QiskitRuntimeService\n  print('qiskit-ibm-runtime available')\nexcept Exception as e:\n  print('qiskit-ibm-runtime not available:', e)\n",
      "print('Next: create a QiskitRuntimeService(...) and run a tiny circuit.')\n",
    ],
  },
  dwave: {
    byokProviders: [{ id: "dwave", label: "D-Wave Leap token", envVar: "DWAVE_API_TOKEN" }],
    initialCodes: [
      "import os, sys\nprint('python:', sys.version)\nprint('D-Wave token present:', bool(os.getenv('DWAVE_API_TOKEN')))\n",
      "try:\n  import dwave\n  print('dwave module available')\nexcept Exception as e:\n  print('dwave modules not available:', e)\n",
      "print('Next: use Ocean SDK (dwave-system) to sample a small BQM/QUBO.')\n",
    ],
  },
  ionq: {
    byokProviders: [{ id: "ionq", label: "IonQ API key", envVar: "IONQ_API_KEY" }],
    initialCodes: [
      "import os, sys\nprint('python:', sys.version)\nprint('IonQ key present:', bool(os.getenv('IONQ_API_KEY')))\n",
      "try:\n  import qiskit\n  print('qiskit available')\nexcept Exception as e:\n  print('qiskit not available:', e)\n",
      "print('Next: choose a client (qiskit-ionq or cirq-ionq) and run a 1–2 qubit circuit.')\n",
    ],
  },
  quantinuum: {
    byokProviders: [{ id: "quantinuum", label: "Quantinuum API key", envVar: "QUANTINUUM_API_KEY" }],
    initialCodes: [
      "import os, sys\nprint('python:', sys.version)\nprint('Quantinuum key present:', bool(os.getenv('QUANTINUUM_API_KEY')))\n",
      "try:\n  import pytket\n  print('pytket available')\nexcept Exception as e:\n  print('pytket not available:', e)\n",
      "print('Next: use pytket + quantinuum extension to run a small circuit.')\n",
    ],
  },
  braket: {
    byokProviders: [
      { id: "aws_access_key_id", label: "AWS Access Key ID", envVar: "AWS_ACCESS_KEY_ID" },
      { id: "aws_secret_access_key", label: "AWS Secret Access Key", envVar: "AWS_SECRET_ACCESS_KEY" },
      { id: "aws_session_token", label: "AWS Session Token (optional)", envVar: "AWS_SESSION_TOKEN" },
      { id: "aws_region", label: "AWS Region", envVar: "AWS_DEFAULT_REGION", placeholder: "us-east-1" },
    ],
    initialCodes: [
      "import os, sys\nprint('python:', sys.version)\nprint('AWS_ACCESS_KEY_ID set:', bool(os.getenv('AWS_ACCESS_KEY_ID')))\nprint('AWS_DEFAULT_REGION:', os.getenv('AWS_DEFAULT_REGION'))\n",
      "try:\n  import braket\n  print('braket sdk available')\nexcept Exception as e:\n  print('braket sdk not available:', e)\n",
      "print('Next: use braket.circuits and AwsDevice to run a small circuit or local simulator.')\n",
    ],
  },
  azure: {
    byokProviders: [
      { id: "azure_tenant_id", label: "Azure Tenant ID", envVar: "AZURE_TENANT_ID" },
      { id: "azure_client_id", label: "Azure Client ID", envVar: "AZURE_CLIENT_ID" },
      { id: "azure_client_secret", label: "Azure Client Secret", envVar: "AZURE_CLIENT_SECRET" },
      { id: "azure_subscription_id", label: "Azure Subscription ID", envVar: "AZURE_SUBSCRIPTION_ID" },
      { id: "azure_resource_group", label: "Azure Resource Group", envVar: "AZURE_RESOURCE_GROUP" },
      { id: "azure_workspace", label: "Azure Quantum Workspace", envVar: "AZURE_QUANTUM_WORKSPACE" },
      { id: "azure_location", label: "Azure Location", envVar: "AZURE_QUANTUM_LOCATION", placeholder: "westus" },
    ],
    initialCodes: [
      "import os, sys\nprint('python:', sys.version)\nprint('AZURE_TENANT_ID set:', bool(os.getenv('AZURE_TENANT_ID')))\nprint('AZURE_SUBSCRIPTION_ID set:', bool(os.getenv('AZURE_SUBSCRIPTION_ID')))\n",
      "try:\n  import azure.quantum\n  print('azure-quantum available')\nexcept Exception as e:\n  print('azure-quantum not available:', e)\n",
      "print('Next: create an AzureQuantumWorkspace and submit a small job (provider-dependent).')\n",
    ],
  },
};

function toBase64Utf8(input: string) {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary);
}

export function TutorialsClient({ preset = "playground" }: { preset?: TutorialsPreset }) {
  const defaultBaseUrl =
    process.env.NEXT_PUBLIC_QPRAC_RUNNER_BASE_URL ?? DEFAULT_BASE_URL;

  const presetConfig = PRESETS[preset];

  const tutorialLinks: Array<{ label: string; href: string; preset: TutorialsPreset }> = [
    { label: "Playground", href: "/tutorials", preset: "playground" },
    { label: "IBM", href: "/tutorials/ibm", preset: "ibm" },
    { label: "D-Wave", href: "/tutorials/dwave", preset: "dwave" },
    { label: "IonQ", href: "/tutorials/ionq", preset: "ionq" },
    { label: "Quantinuum", href: "/tutorials/quantinuum", preset: "quantinuum" },
    { label: "Braket", href: "/tutorials/braket", preset: "braket" },
    { label: "Azure", href: "/tutorials/azure", preset: "azure" },
  ];

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [wsUrl, setWsUrl] = useState<string | null>(null);
  const [baseUrl, setBaseUrl] = useState<string>(defaultBaseUrl);

  const [byokValues, setByokValues] = useState<Record<string, string>>(() => {
    if (typeof window === "undefined") return {};

    const raw = window.localStorage.getItem("qprac.byok.v1");
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as unknown;
        if (parsed && typeof parsed === "object") {
          return parsed as Record<string, string>;
        }
      } catch {
        // ignore
      }
    }

    const legacyIbm = window.localStorage.getItem("byok.ibm") ?? "";
    const legacyNwip = window.localStorage.getItem("byok.nwip") ?? "";
    const legacyQupracs = window.localStorage.getItem("byok.qupracs") ?? "";

    const migrated: Record<string, string> = {};
    if (legacyIbm) migrated.ibm = legacyIbm;
    if (legacyNwip) migrated.nwip = legacyNwip;
    if (legacyQupracs) migrated.qupracs = legacyQupracs;
    return migrated;
  });

  const [showKeys, setShowKeys] = useState<boolean>(false);
  const [useKeysForExecution, setUseKeysForExecution] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("qprac.byok.use") === "true";
  });

  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "creating" }
    | { state: "ready" }
    | { state: "error"; message: string }
  >({ state: "idle" });

  const [runningCellId, setRunningCellId] = useState<string | null>(null);
  const [cells, setCells] = useState<NotebookCell[]>(() =>
    presetConfig.initialCodes.map((code) => ({ id: newCellId(), code, result: null }))
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

  function buildInjectedCode(userCode: string) {
    if (!useKeysForExecution) return userCode;

    const envMap: Record<string, string> = {};
    for (const provider of presetConfig.byokProviders) {
      const v = (byokValues[provider.id] ?? "").trim();
      if (v) envMap[provider.envVar] = v;
    }

    if (Object.keys(envMap).length === 0) return userCode;

    const payload = toBase64Utf8(JSON.stringify(envMap));
    const injected =
      "# --- qprac injected: BYOK env ---\n" +
      "import base64 as __b64, json as __json, os as __os\n" +
      `__byok = __json.loads(__b64.b64decode('${payload}').decode('utf-8'))\n` +
      "for __k, __v in __byok.items():\n" +
      "  if __v:\n" +
      "    __os.environ[__k] = __v\n" +
      "del __k, __v, __byok, __b64, __json, __os\n" +
      "# --- end injected ---\n\n";

    return injected + userCode;
  }

  async function runCell(cellId: string) {
    if (!wsUrl) return;

    const code = cells.find((c) => c.id === cellId)?.code ?? "";
    const finalCode = buildInjectedCode(code);
    setRunningCellId(cellId);
    setCells((prev) => prev.map((c) => (c.id === cellId ? { ...c, result: null } : c)));

    try {
      const out = await runCellOverWebSocket(wsUrl, finalCode);
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
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-wrap items-center gap-2 pb-4">
          <span className="text-xs font-semibold text-foreground/70">Tutorials:</span>
          {tutorialLinks.map((item) => {
            const isActive = item.preset === preset;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "rounded-full border border-border bg-yellow-300 px-3 py-1 text-xs font-semibold text-black"
                    : "rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-surface-foreground hover:bg-surface/90"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <section className="mt-2 grid gap-6 lg:grid-cols-[360px_1fr]">
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
                Bring your own keys for quantum platforms. Keys are stored locally in your browser.
              </p>

              <label className="mt-3 flex items-center gap-2 text-xs font-semibold text-foreground/70">
                <input
                  type="checkbox"
                  checked={useKeysForExecution}
                  onChange={(e) => {
                    const next = e.target.checked;
                    setUseKeysForExecution(next);
                    if (typeof window !== "undefined") {
                      window.localStorage.setItem("qprac.byok.use", String(next));
                    }
                  }}
                  className="h-4 w-4"
                />
                Use keys for execution (inject as env vars)
              </label>

              <div className="mt-4 space-y-4">
                {presetConfig.byokProviders.map((p) => (
                  <label key={p.id} className="block">
                    <div className="text-xs font-semibold text-foreground/70">{p.label}</div>
                    <input
                      type={showKeys ? "text" : "password"}
                      value={byokValues[p.id] ?? ""}
                      onChange={(e) => {
                        const v = e.target.value;
                        setByokValues((prev) => {
                          const next = { ...prev, [p.id]: v };
                          if (typeof window !== "undefined") {
                            window.localStorage.setItem("qprac.byok.v1", JSON.stringify(next));
                          }
                          return next;
                        });
                      }}
                      placeholder={p.placeholder ?? "Paste key…"}
                      autoComplete="off"
                      spellCheck={false}
                      className="mt-1 w-full rounded-xl border border-surface-border bg-surface px-3 py-2 font-mono text-xs text-surface-foreground outline-none focus:border-background"
                    />
                    <div className="mt-1 text-[11px] text-foreground/60">
                      Used as env var <span className="font-mono">{p.envVar}</span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-4 text-xs text-foreground/70">
                If enabled, keys are sent to your runner inside the code you execute.
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
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => runCell(cell.id)}
                          disabled={!canRunCells || runningCellId !== null}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-surface text-xs font-semibold text-surface-foreground hover:bg-surface/90 disabled:opacity-60"
                          aria-label={isRunning ? "Running cell" : "Run cell"}
                          title={isRunning ? "Running…" : "Run"}
                        >
                          {isRunning ? "…" : "▶"}
                        </button>
                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border bg-surface font-mono text-xs font-semibold text-surface-foreground">
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => moveCell(cell.id, "up")}
                          disabled={idx === 0 || runningCellId !== null}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border bg-surface text-xs font-semibold text-surface-foreground hover:bg-surface/90 disabled:opacity-50"
                          aria-label="Move cell up"
                          title="Move up"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          onClick={() => moveCell(cell.id, "down")}
                          disabled={idx === cells.length - 1 || runningCellId !== null}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border bg-surface text-xs font-semibold text-surface-foreground hover:bg-surface/90 disabled:opacity-50"
                          aria-label="Move cell down"
                          title="Move down"
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteCell(cell.id)}
                          disabled={runningCellId !== null}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border bg-surface text-xs font-semibold text-surface-foreground hover:bg-surface/90 disabled:opacity-50"
                          aria-label="Delete cell"
                          title="Delete"
                        >
                          🗑
                        </button>
                      </div>
                    </div>

                    <textarea
                      value={cell.code}
                      onChange={(e) => {
                        const v = e.target.value;
                        setCells((prev) => prev.map((c) => (c.id === cell.id ? { ...c, code: v } : c)));
                      }}
                      placeholder="Start coding or generate with AI."
                      spellCheck={false}
                      className="mt-3 min-h-24 w-full resize-y rounded-xl border border-surface-border bg-surface p-4 font-mono text-xs text-surface-foreground outline-none focus:border-background"
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
