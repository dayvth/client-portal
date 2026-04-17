# Client Portal — Dayvth Costa

Portal pessoal que reúne:

1. **Portfólio público** — home com projetos recentes
2. **Área do cliente** (em breve) — login onde cada cliente edita textos, imagens, cores e links da landpage que comprou, com publicação automática no Netlify

> **Status atual:** Etapa 1 concluída (setup + home + portfólio + rota `/login` em placeholder). Próximas etapas: Supabase, auth, dashboard e editor.

---

## Rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo dev
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Estrutura do projeto

```
client-portal/
├── app/
│   ├── layout.tsx         # Layout raiz (fonte Inter, dark mode, metadata)
│   ├── globals.css        # Tailwind + estilos base + componentes reutilizáveis
│   ├── page.tsx           # Home pública (hero + portfolio + serviços)
│   └── login/
│       └── page.tsx       # Tela de login (placeholder por enquanto)
│
├── components/
│   ├── Header.tsx         # Header fixo com botão "Área do Cliente"
│   ├── Hero.tsx           # Seção hero com gradiente e animações
│   ├── PortfolioGrid.tsx  # Grid de projetos
│   ├── ProjectCard.tsx    # Card individual de projeto
│   ├── Servicos.tsx       # Seção de serviços
│   └── Footer.tsx         # Footer com CTA de contato (WhatsApp/email)
│
├── lib/
│   └── projetos.ts        # Dados mockados dos projetos do portfólio
│                          # (será substituído por query no Supabase)
│
├── tailwind.config.ts     # Config Tailwind com paleta brand + animações
├── next.config.js         # Config Next.js (libera domínios de imagens)
├── package.json
└── tsconfig.json
```

## Personalizar

### Trocar os projetos do portfólio
Edite `lib/projetos.ts`. Enquanto o Supabase não está conectado, os projetos
ficam aí como constantes. Você pode trocar:
- `titulo`, `categoria`, `descricao`, `url`, `ano`
- `gradiente` (classes Tailwind do fundo do card)
- `tecnologias` (array de chips)
- `imagem` (URL de uma screenshot — opcional)

### Trocar número do WhatsApp e email
Buscar por `5500000000000` nos arquivos `components/Footer.tsx` e
`app/login/page.tsx` e substituir pelo seu número com DDI+DDD.
O email `dayvtholiveira@gmail.com` está em `Footer.tsx`.

### Ajustar a paleta de cores
Em `tailwind.config.ts`, a cor `brand` é um ciano-azulado. Pode trocar por
qualquer paleta — sugestões: `emerald` (verde), `violet` (roxo), `amber`
(dourado). Troque os tons 300-700 mantendo a estrutura.

## Deploy no Vercel

1. Faça push do repositório no GitHub.
2. Entre em [vercel.com/new](https://vercel.com/new) e importe o repo.
3. Vercel detecta Next.js automaticamente. Clique em "Deploy".
4. Pronto — site no ar em ~2 minutos no domínio `client-portal.vercel.app`.

## Roadmap das próximas etapas

- [ ] **Etapa 2** — Criar conta no Supabase, configurar `.env.local` e criar
      o cliente em `lib/supabase.ts`
- [ ] **Etapa 3** — Rodar `supabase/schema.sql` pra criar as 3 tabelas
      (`profiles`, `landpages`, `conteudo_landpage`) e as de histórico/publicações
- [ ] **Etapa 4** — Ativar login real na página `/login` (email + senha)
- [ ] **Etapa 5** — Criar `/dashboard` protegido listando as landpages do cliente
- [ ] **Etapa 6** — Criar `/dashboard/editor/[id]` com formulário dinâmico
      (campos texto/imagem/cor/link)
- [ ] **Etapa 7** — Integrar upload de imagens com Supabase Storage
      (resize + crop + compressão para WebP)
- [ ] **Etapa 8** — Sistema rascunho vs. publicado (botões "Salvar" e "Publicar")
- [ ] **Etapa 9** — Histórico de publicações com opção de reverter
- [ ] **Etapa 10** — Rate limit de 3 publicações/dia
- [ ] **Etapa 11** — Webhook do Netlify disparado a cada publicação
- [ ] **Etapa 12** — `/admin` para cadastrar novas landpages e convidar clientes
- [ ] **Etapa 13** — Script `build.js` modelo pros sites dos clientes
      (substitui `{{placeholders}}` por valores do Supabase)

## Stack técnica

- **Next.js 14** com App Router
- **TypeScript** em modo strict
- **Tailwind CSS** com dark mode e paleta customizada
- **React 18** (Server Components por padrão)
- Futuramente: **Supabase** (Auth + Postgres + Storage)
- Hosting: **Vercel**
- Hosting dos sites dos clientes: **Netlify** (sem mudanças)
