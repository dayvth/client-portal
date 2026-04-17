/**
 * Dados mockados dos projetos do portfólio.
 *
 * No futuro, esse arquivo será substituído por uma query no Supabase:
 *   supabase.from('landpages').select('*').eq('publico', true).order('created_at', { ascending: false }).limit(6)
 *
 * Por ora, troque os campos abaixo pelos seus projetos reais quando quiser.
 */

export type Projeto = {
  id: string;
  titulo: string;
  categoria: string;
  descricao: string;
  url?: string;
  imagem?: string;
  gradiente: string; // Fallback visual caso não tenha imagem ainda
  tecnologias?: string[];
  ano: number;
};

export const projetos: Projeto[] = [
  {
    id: "cleydi-aesthetic",
    titulo: "Cleydi Aesthetic",
    categoria: "Estética & Beleza",
    descricao:
      "Landpage para profissional da área de estética, com apresentação de serviços e contato direto via WhatsApp.",
    url: "https://cleydi-aesthetic.netlify.app/",
    gradiente: "from-rose-400 via-pink-500 to-fuchsia-600",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    ano: 2026,
  },
  {
    id: "nanda-silveira",
    titulo: "Nanda Silveira",
    categoria: "Personal Brand",
    descricao:
      "Site institucional com design limpo, destaque para serviços e call-to-action para contato.",
    url: "https://nandasilveira.netlify.app/",
    gradiente: "from-indigo-500 via-purple-500 to-pink-500",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    ano: 2026,
  },
];
