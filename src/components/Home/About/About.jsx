import React from "react";
import { info } from "./config";
import { IconMapa, IconMapaMobile } from "./Icons";

function About() {
  const Info = info.map(({ number, text }) => {
    return (
      <div
        key={text}
        className="container-img rounded-lg border py-3 sm:py-5 px-5 sm:px-10 shadow-lg"
      >
        <h3 className="text-sm sm:text-lg text-tertiary font-semibold">
          {number}
        </h3>
        <p className="">{text}</p>
      </div>
    );
  });

  return (
    <main className="md:px-20 w-full h-full">
      <section className="w-full h-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block text-secondary rounded-lg bg-bgFooter px-3 py-1 text-sm">
              About Us
            </div>
            <h2 className="text-3xl text-secondary font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Transformado Procesos Manuales en Soluciones Digitales
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed">
              En Almenú, somos un equipo de innovadores dedicados a ayudar a los
              restaurantes a prosperar en la era digital. Con nuestra avanzada
              tecnología y nuestra experiencia, desarrollamos soluciones a
              medida que optimizan la gestión operativa, mejoran la experiencia
              del cliente y abren nuevas oportunidades de crecimiento para
              nuestros clientes.
            </p>
          </div>
          <div className="grid gap-4">{Info}</div>
        </div>
      </section>

      <section className="w-full h-full">
        <section className="hidden w-full h-full sm:flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-bold w-3/5 text-center text-secondary">Con Clientes en los Principales Departamentos del País</h1>
          <IconMapa />
        </section>

        <section className="laptop:hidden w-full items-center justify-center px-[20px]">
          <h1 className="text-xl font-bold text-center text-secondary">Con Clientes en los Principales Departamentos del País</h1>
          <IconMapaMobile />
        </section>
      </section>
    </main>
  );
}

export { About };
