import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownContent({ markdown }: { markdown: string }) {
  return (
    <div className="space-y-6 text-[15px] leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold tracking-tight">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-surface-foreground/85">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 text-surface-foreground/85">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 text-surface-foreground/85">{children}</ol>
          ),
          li: ({ children }) => <li className="mt-1">{children}</li>,
          hr: () => <hr className="border-surface-border" />,
          strong: ({ children }) => (
            <strong className="text-surface-foreground">{children}</strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-surface-border pl-4 text-surface-foreground/80">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="rounded bg-surface px-1.5 py-0.5 text-[13px] border border-surface-border">
              {children}
            </code>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
