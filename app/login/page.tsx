"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro(null);
    setCarregando(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    setCarregando(false);

    if (error) {
      setErro("Email ou senha invalidos. Tente novamente.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

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
          <Link
            href="/"
            className="text-sm text-ink-400 transition-colors hover:text-white"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="card p-8 sm:p-10">
            <div className="text-center">
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
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h1 className="mt-6 text-2xl font-bold tracking-tight">
                Bem-vindo de volta
              </h1>
              <p className="mt-2 text-sm text-ink-400">
                Entre para gerenciar sua landpage
              </p>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ink-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={carregando}
                  className="mt-1.5 block w-full rounded-lg border border-ink-700 bg-ink-900/60 px-4 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="senha"
                  className="block text-sm font-medium text-ink-200"
                >
                  Senha
                </label>
                <input
                  id="senha"
                  type="password"
                  placeholder="senha"
                  required
                  autoComplete="current-password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  disabled={carregando}
                  className="mt-1.5 block w-full rounded-lg border border-ink-700 bg-ink-900/60 px-4 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {erro && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-200"
                >
                  {erro}
                </div>
              )}

              <button
                type="submit"
                disabled={carregando}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {carregando ? "Entrando..." : "Entrar"}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-ink-500">
              Problemas para entrar?{" "}
              <a
                href="https://wa.me/447748916229"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-300"
              >
                Fale com Dayvth no WhatsApp
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
