function Icon({ path, label }: { path: string; label: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-label={label}
    >
      <path d={path} />
    </svg>
  );
}

const X_PATH =
  "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";
const INSTAGRAM_PATH =
  "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-10.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z";
const WHATSAPP_PATH =
  "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.13c-.25.69-1.43 1.32-1.97 1.36-.5.04-.99.22-3.37-.7-2.83-1.12-4.65-3.99-4.79-4.18-.14-.18-1.15-1.53-1.15-2.92s.73-2.07 1-2.35c.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.25.6.84 2.07.91 2.22.07.14.12.31.02.5-.1.18-.15.3-.3.46-.14.18-.3.39-.43.53-.14.14-.29.3-.12.58.17.28.74 1.22 1.59 1.98 1.1.98 2.02 1.28 2.3 1.43.28.14.45.12.61-.07.18-.21.71-.83.9-1.11.18-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.12.07.66-.18 1.35z";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <a href="#" className="flex flex-col items-center gap-0.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logobase2.png"
              alt="Cardápio Nota 10"
              className="w-8 brightness-125"
            />
          </span>
          <span className="text-[12.6px] font-bold leading-none tracking-tight">
            Cardápio Nota 10
          </span>
        </a>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#precos" className="hover:text-foreground">
            Preços
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
          <a href="#" className="hover:text-foreground">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" className="hover:text-foreground">
            <Icon path={WHATSAPP_PATH} label="WhatsApp" />
          </a>
          <a href="#" className="hover:text-foreground">
            <Icon path={INSTAGRAM_PATH} label="Instagram" />
          </a>
          <a href="#" className="hover:text-foreground">
            <Icon path={X_PATH} label="X" />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Cardápio Nota 10. Todos os direitos reservados.
      </p>
    </footer>
  );
}
