import { createClient } from "@supabase/supabase-js";

/**
 * Cliente Supabase compartilhado do projeto.
 * As variáveis de ambiente são configuradas no Vercel.
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Variáveis de ambiente do Supabase não encontradas. " +
      "Verifique NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY na Vercel."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos das tabelas do banco
export type Profile = {
  id: string;
  nome: string | null;
  empresa: string | null;
  telefone: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
};

export type Landpage = {
  id: string;
  cliente_id: string;
  nome: string;
  slug: string | null;
  dominio: string | null;
  descricao: string | null;
  categoria: string | null;
  thumbnail_url: string | null;
  ano: number | null;
  netlify_site_id: string | null;
  netlify_hook_url: string | null;
  publico: boolean;
  ordem: number;
  created_at: string;
  updated_at: string;
};

export type ConteudoLandpage = {
  id: string;
  landpage_id: string;
  chave: string;
  tipo: "texto" | "textarea" | "imagem" | "cor" | "link";
  label: string;
  ordem: number;
  grupo: string | null;
  placeholder: string | null;
  max_caracteres: number | null;
  valor_publicado: string | null;
  valor_rascunho: string | null;
  updated_at: string;
};

export type Publicacao = {
  id: string;
  landpage_id: string;
  cliente_id: string | null;
  snapshot: Record<string, string>;
  publicado_em: string;
};
