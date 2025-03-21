"use client";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function EmailForm() {
  const [email, setEmail] = useState<string>();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        toast.success("¡Gracias por apuntarte a la Escuela de Apicultura de Mendicoechea! 🚀");
      } else {
        setEmail("");
        toast.error("¡Oh! Ha habido un error. Inténtalo de nuevo o ponte en contacto con nosotros en mendicoechea@gmail.com");
      }
    } catch (err) {
      setEmail("");
      console.error(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="POST" className="mt-2 max-w-sm">
        <div className="flex flex-col gap-2 lg:flex-row">
          <label className="sr-only" htmlFor="email-address">
            Dirección de correo
          </label>
          <input
            autoComplete="email"
            className="text-accent-500 block h-10 w-full focus:invalid:border-red-400 focus:invalid:text-red-500 focus:invalid:ring-red-500 appearance-none rounded-lg border-2 border-slate-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            id="email-address"
            name="email"
            placeholder="tu@tucorreo.com"
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="flex h-10 shrink-0 items-center justify-center gap-1 rounded-lg bg-[#111c11] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-700"
            type="submit"
          >
            <span>¡Me apunto!</span>
          </button>
        </div>
      </form>

      <div className="flex items-start gap-2 text-gray-500">
        <InfoCircledIcon />
        <p className="text-xs -mt-[0.5] max-w-sm">
          ¡No te preocupes! Tu dirección de correo está en buenas manos y sólo la vamos a utilizar para mandarte información sobre la Escuela.
        </p>
      </div>
    </>
  );
}
