import type { Projeto } from "@/lib/projetos";

type Props = {
  projeto: Projeto;
  index: number;
};

export function ProjectCard({ projeto, index }: Props) {
  const CardWrapper = projeto.url ? "a" : "div";
  const wrapperProps = projeto.url
    ? {
        href: projeto.url,
        target: "_blank" as const,
        rel: "noopener noreferrer" as const,
      }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className="card group animate-fade-in-up block overflow-hidden opacity-0"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Preview visual: gradiente placeholder (ou imagem se tiver) */}
      <div
        className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${projeto.gradiente}`}
      >
        {/* Simulação visual de um browser window */}
        <div className="absolute inset-0 flex flex-col">
          <div className="flex items-center gap-1.5 bg-black/20 px-3 py-2 backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-white/40" />
            <div className="h-2 w-2 rounded-full bg-white/40" />
            <div className="h-2 w-2 rounded-full bg-white/40" />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="text-center text-white/90 drop-shadow-md">
              <div className="text-xs uppercase tracking-widest opacity-80">
                {projeto.categoria}
              </div>
              <div className="mt-2 text-xl font-bold sm:text-2xl">
                {projeto.titulo}
              </div>
            </div>
          </div>
        </div>

        {/* Overlay de hover com ícone */}
        <div className="absolute inset-0 flex items-center justify-center bg-ink-950/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-300">
            <span>Ver projeto</span>
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
              className="transition-transform group-hover:translate-x-1"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="tag">{projeto.categoria}</span>
          <span className="text-xs text-ink-500">{projeto.ano}</span>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-brand-300 transition-colors">
          {projeto.titulo}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-ink-400">
          {projeto.descricao}
        </p>

        {projeto.tecnologias && projeto.tecnologias.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {projeto.tecnologias.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-ink-800/80 px-2 py-0.5 text-xs text-ink-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
