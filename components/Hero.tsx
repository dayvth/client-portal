import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Grid pattern sutil no fundo */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(51 65 85) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-wide relative py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div
            className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-medium text-brand-300"
            style={{ animationDelay: "0s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Aberto para novos projetos
          </div>

          {/* Title */}
          <h1
            className="animate-fade-in-up mt-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            Criamos landpages{" "}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
              que convertem
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up mt-6 text-lg text-ink-300 sm:text-xl opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Design moderno, performance de verdade e autonomia pra você
            atualizar sua página a qualquer momento — sem depender de ninguém.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contato"
              className="btn-primary w-full sm:w-auto text-base px-6 py-3"
            >
              Quero uma landpage
            </a>
            <a
              href="#portfolio"
              className="btn-ghost w-full sm:w-auto text-base px-6 py-3"
            >
              Ver projetos
            </a>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-in-up mt-20 grid grid-cols-3 gap-8 border-t border-ink-800 pt-10 opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <div className="text-3xl font-bold text-white sm:text-4xl">
                15+
              </div>
              <div className="mt-1 text-sm text-ink-400">Clientes atendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white sm:text-4xl">
                98
              </div>
              <div className="mt-1 text-sm text-ink-400">Score Lighthouse</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white sm:text-4xl">
                &lt;2s
              </div>
              <div className="mt-1 text-sm text-ink-400">Tempo de carga</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
