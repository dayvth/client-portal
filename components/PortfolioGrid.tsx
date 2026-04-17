import { projetos } from "@/lib/projetos";
import { ProjectCard } from "./ProjectCard";

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="container-wide">
        {/* Header da seção */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="tag">Portfólio</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Projetos recentes
          </h2>
          <p className="mt-4 text-ink-400">
            Cada projeto é construído do zero, pensado para o público do cliente
            e entregue com velocidade de verdade.
          </p>
        </div>

        {/* Grid de cards — ajusta automaticamente conforme você adiciona projetos em lib/projetos.ts */}
        <div
          className={`mt-16 grid gap-6 ${
            projetos.length === 1
              ? "mx-auto max-w-lg grid-cols-1"
              : projetos.length === 2
                ? "mx-auto max-w-5xl grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projetos.map((projeto, index) => (
            <ProjectCard key={projeto.id} projeto={projeto} index={index} />
          ))}
        </div>

        {/* Nota sobre mais projetos */}
        <div className="mt-12 text-center">
          <p className="text-sm text-ink-500">
            Mais projetos em breve — atualizados direto do painel.
          </p>
        </div>
      </div>
    </section>
  );
}
