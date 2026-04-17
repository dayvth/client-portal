import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/60 bg-ink-950/70 backdrop-blur-xl">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 text-ink-950 shadow-lg shadow-brand-500/30">
            D
          </span>
          <span>
            Dayvth<span className="text-brand-400">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#portfolio"
            className="text-sm text-ink-300 transition-colors hover:text-white"
          >
            Portfólio
          </a>
          <a
            href="#servicos"
            className="text-sm text-ink-300 transition-colors hover:text-white"
          >
            Serviços
          </a>
          <a
            href="#contato"
            className="text-sm text-ink-300 transition-colors hover:text-white"
          >
            Contato
          </a>
        </nav>

        <Link href="/login" className="btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
          <span className="hidden sm:inline">Área do Cliente</span>
          <span className="sm:hidden">Entrar</span>
        </Link>
      </div>
    </header>
  );
}
