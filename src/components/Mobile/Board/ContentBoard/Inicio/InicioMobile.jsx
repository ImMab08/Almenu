"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IconRightButton, IconLeftButton } from "./icons";
import { expandedBoard } from "@/hooks/CustomHook";

export function InicioMobile() {
  const [isExpanded, toggleExpanded] = expandedBoard((state) => [
    state.isExpanded,
    state.toggleExpanded,
  ]);

  return (
    <section className="w-full h-screen flex">
      <section className="w-full h-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-base font-semibold">¡Aún no has añadido mesas!</p>
          <div className=" w-[150px] h-[150px] relative">
            <Image layout="fill" src="/img/Questions-amico.png" alt="" />
          </div>
          <p className="text-sm">
            Da{" "}
            <Link className="underline" href="/configuracion/mesas">
              click aquí
            </Link>{" "}
            para comenzar.
          </p>
        </div>
      </section>

      {isExpanded && (
        <section className="w-auto h-full p-5 bg-primary absolute bottom-0 right-0 z-[2] shadow-lg">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className=" w-[250px] h-[250px] relative">
              <Image layout="fill" src="/img/Receipt-rafiki.png" alt="" />
            </div>
            <div className="w-[200px]">
              <p className=" cursor-default text-sm font-semibold">
                Selecciona una mesa para los productos consumidos.
              </p>
            </div>
          </div>
        </section>
      )}

      <button
        className={`pl-[5px] w-[40px] h-[40px] absolute bottom-4 ${
          isExpanded ? "right-[290px]" : "right-0 hover:w-[50px] hover:pl-[15px]"
        } bg-primary w-[35px] h-[35px] shadow-lg rounded-l-xl transition-all duration-300`}
        onClick={toggleExpanded}
      >
        {isExpanded ? <IconRightButton /> : <IconLeftButton />}
      </button>
    </section>
  );
}
