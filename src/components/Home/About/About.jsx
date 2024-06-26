"use client";
import React from "react";
import { info } from "./config";
import { IconMapa, IconMapaMobile, IconArrowDown, IconArrowUp } from "./Icons";
import { expandedItemState } from "@/hooks/CustomHook";

function About() {
  const [expandedId, toggleExpanded] = expandedItemState((state) => [
    state.expandedId,
    state.toggleExpanded,
  ]);

  const Info = info.map(({ id, number, text, parrafo }) => {
    const isExpanded = expandedId === id;

    return (
      <div className="rounded-lg border shadow-lg" key={id}>
        <div className="container-img py-3 sm:py-5 px-5 sm:px-10 border-b">
          <div className="absolute p-1 top-2 right-2 bg-secondary rounded-lg cursor-pointer" onClick={() => toggleExpanded(id)}>
            {isExpanded ? <IconArrowUp /> : <IconArrowDown />}
          </div>
          <h3 className="text-sm sm:text-lg text-tertiary font-semibold">{number}</h3>
          <p className="text-sm md:text-base">{text}</p>
        </div>
        <div className="overflow-hidden transition-height duration-300 ease-out">
          {isExpanded && (
            <div className={`py-3 sm:py-5 px-5 sm:px-10`}>
              {parrafo}
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <main className="md:px-20 w-full h-full">
      <section className="w-full h-auto pt-20 md:py-24 lg:py-32">
        <div className="container sm:flex px-4 space-y-10 sm:space-y-0 md:px-6 2 lg:gap-16">
          <div className="w-full space-y-4">
            <h2 className="text-3xl text-secondary font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Transformado Procesos Manuales en Soluciones Digitales
            </h2>
            <p className="max-w-[700px] text-gray-700 text-sm md:text-xl/relaxed">
              En Almenú, somos un equipo de innovadores dedicados a ayudar a los
              restaurantes a prosperar en la era digital. Con nuestra avanzada
              tecnología y nuestra experiencia, desarrollamos soluciones a
              medida que optimizan la gestión operativa, mejoran la experiencia
              del cliente y abren nuevas oportunidades de crecimiento para
              nuestros clientes.
            </p>
          </div>
          <div className="w-full h-full space-y-5">
            {Info}
          </div>
        </div>
      </section>

      <section className="w-full h-screen flex flex-col items-center justify-center">
        <section className="hidden w-full h-full sm:flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-bold w-3/5 text-center text-secondary">
            Con Clientes en los Principales Departamentos del País
          </h1>
          <IconMapa />
        </section>

        <section className="laptop:hidden w-full items-center justify-center px-[20px]">
          <h1 className="text-xl font-bold text-center text-secondary">
            Con Clientes en los Principales Departamentos del País
          </h1>
          <IconMapaMobile />
        </section>
      </section>
    </main>
  );
}

export { About };
