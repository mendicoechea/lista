import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-dvh grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:h-full h-80 bg-[#ecc637] relative overflow-hidden">
          <Image
            src="/mendicoechea.png"
            alt="Logotipo de la Escuela de Apicultura de Mendicoechea"
            fill
            className="object-contain mt-8 px-14 py-14"
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-[#111c11] text-3xl leading-tight md:text-4xl max-w-lg">
            ¡Bienvenid@ a la Escuela de Apicultura de Mendicoechea!
          </h1>
          <p className="text-gray-700 text-xl">
            ¿Te apuntas?<br/>Déjanos tu correo para que podamos ponernos en contacto contigo y hablar.
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
