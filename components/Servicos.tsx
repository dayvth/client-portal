const servicos = [
  {
    titulo: "Landpage sob medida",
    descricao:
      "Código limpo em HTML/CSS/JS, otimizado pra velocidade e conversão. Sem templates genéricos.",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    titulo: "Autonomia real",
    descricao:
      "Você tem acesso à sua área do cliente e edita textos, imagens e cores sem depender de ninguém.",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    titulo: "Hospedagem rápida",
    descricao:
      "Deploy em CDN global (Netlify), SSL gratuito e carregamento em menos de 2 segundos.",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="tag">Serviços</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            O que você leva pra casa
          </h2>
          <p className="mt-4 text-ink-400">
            Mais do que uma página bonita: um ativo que trabalha pelo seu
            negócio e cresce com ele.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {servicos.map((servico, index) => (
            <div
              key={servico.titulo}
              className="card animate-fade-in-up p-8 opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-brand-500/20">
                {servico.icone}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {servico.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
