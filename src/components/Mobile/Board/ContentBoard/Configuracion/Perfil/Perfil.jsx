"use client";
import React, { useState } from "react";

import Usuario from "./config/Usuario";
import Restaurante from "./config/Restaurante";
import useLoading from "@/hooks/useLoading";

import { IconArrowDown } from "@/icons";

export function Perfil() {
  const loading = useLoading();
  const [ openConfig, setOpenConfig ] = useState();

  if (loading) return (
    <div className="w-full h-[72px] p-5 bg-primary rounded-lg space-y-5 animate-pulse">
    </div>
  )

  const handledSumit = () => {
    setOpenConfig(!openConfig)
  }

  return (
    <section className="w-full h-auto bg-primary p-4 space-y-5 rounded-lg">
      <div className="flex cursor-pointer" onClick={handledSumit}>
        <h1 className="flex-1 text-lg text-title font-semibold">Configuración del Perfil</h1>
        <div className={`cursor-pointer transform transition-transform duration-300 ${openConfig ? 'rotate-0' : '-rotate-180'}`} onClick={handledSumit}>
          <IconArrowDown width={28} height={28} />
        </div>
      </div>

      {openConfig && 
        <div className="flex flex-col w-full space-y-5">
          <Restaurante />
          <Usuario />
        </div>
      }
    </section>
  );
}