"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import type { Profile, Landpage } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [email, setEmail] = useState("");
  const [landpages, setLandpages] = useState<Landpage[]>([]);
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

      const [profileRes, landpagesRes] = await Promise.all([
        supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single(),
        supabase
          .from("landpages")
          .select("*")
          .eq("cliente_id", session.user.id)
          .order("ordem", { ascending: true }),
      ]);

      setProfile(profileRes.data);
      setLandpages(landpagesRes.data ?? []);
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
              Escolha uma landpage abaixo para editar textos, imagens, cores
              e links. Voce pode salvar rascunho quantas vezes quiser.
            </p>
          </div>

          <div className="mt-10">
            <div className="mb-4 flex items-end justify-between">
              <h2 className="text-lg font-semibold">Suas landpages</h2>
              <span className="text-xs text-ink-500">
                {landpages.length}{" "}
                {landpages.length === 1 ? "site" : "sites"}
              </span>
            </div>

            {landpages.length === 0 ? (
              <div className="card p-8 text-center sm:p-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-800/60 ring-1 ring-ink-700">
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
                    className="text-ink-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3 className="mt-5 text-base font-semibold">
                  Nenhuma landpage cadastrada ainda
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-ink-400">
                  Fala comigo no WhatsApp que eu cadastro a sua landpage
                  aqui pra voce poder editar.
                </p>
                <a
                  href="https://wa.me/447748916229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
                >
                  Abrir WhatsApp
                </a>
              </div>
            ) : (
              <div className="space-y-3">
                {landpages.map((lp) => (
                  <div
                    key={lp.id}
                    className="card p-5 transition-colors hover:border-brand-500/40"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="truncate text-base font-semibold">
                            {lp.nome}
                          </h3>
                          {!lp.publico && (
                            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-300">
                              Rascunho
                            </span>
                          )}
                        </div>
                        {lp.descricao && (
                          <p className="mt-1 text-sm text-ink-400">
                            {lp.descricao}
                          </p>
                        )}
                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                          {lp.categoria && (
                            <span className="tag">{lp.categoria}</span>
                          )}
                          {lp.dominio && (
                            <a
                              href={`https://${lp.dominio}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-ink-400 transition-colors hover:text-brand-400"
                            >
                              {lp.dominio}
                            </a>
                          )}
                          {lp.ano && (
                            <span className="text-ink-500">{lp.ano}</span>
                          )}
                        </div>
                      </div>
                      <Link
                        href={`/editar/${lp.id}`}
                        className="btn-primary w-full justify-center px-4 py-2 text-sm sm:w-auto"
                      >
                        Editar
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
                <a
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
