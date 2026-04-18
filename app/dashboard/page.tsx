"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Profile } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregar = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login");
        return;
      }

      setEmail(session.user.email ?? "");

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      setProfile(data);
      setCarregando(false);
    };

    carregar();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  };

  if (carregando) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-ink-400">Carregando...</p>
      </div>
    );
  }

  const nomeExibicao =
    (profile?.nome && profile.nome.trim()) ||
    email.split("@")[0] ||
    "cliente";

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-ink-800/60">
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
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-ink-400 sm:inline">
              {email}
            </span>
            <button
              onClick={handleLogout}
              className="text-sm text-ink-400 transition-colors hover:text-white"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="container-wide flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="animate-[fadeInUp_600ms_ease-out]">
            <p className="text-sm font-medium text-brand-400">
              Area do cliente
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Ola, {nomeExibicao}
            </h1>
            <p className="mt-3 max-w-xl text-ink-400">
              Bem-vindo a sua area de gerenciamento. Aqui voce vai poder
              editar sua landpage, trocar imagens, ajustar textos e publicar
              as mudancas sempre que quiser.
            </p>
          </div>

          <div className="mt-10 card p-8 text-center sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 ring-1 ring-brand-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-300"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h2 className="mt-5 text-lg font-semibold">Suas landpages</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-400">
              Em breve aqui vai aparecer a lista das suas landpages com um
              botao de edicao em cada uma.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-3 py-1 text-xs text-ink-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Em construcao
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-ink-800 bg-ink-900/40 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500/10 ring-1 ring-brand-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-300"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold">Precisa de ajuda?</h3>
                <p className="mt-1 text-sm text-ink-400">
                  Algum problema ou duvida? Fala direto comigo no WhatsApp.
                </p>
                
                  href="https://wa.me/447748916229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
