"use client";
import React, { useState } from "react";

import Categoria from "./config/Categoria";
import Subcategoria from "./config/Subcategoria";

import useLoading from "@/hooks/useLoading";
import { IconArrowDown } from "@/icons";

export function SettingsCategoria() {
  const loading  = useLoading();
  const [ openConfig, setOpenConfig ] = useState(false);

  if (loading) return (
    <div className="w-full h-[72px] p-5 bg-primary rounded-lg space-y-5 animate-pulse">
    </div>
  )

  const handledSumit = () => {
    setOpenConfig(!openConfig);
  };

  return (
    <section className="w-full h-full flex flex-col text-title overflow-auto gap-5">
      <div className="w-full h-auto bg-primary rounded-lg p-5 space-y-5">
        <div className="flex cursor-pointer" onClick={handledSumit}>
          <h1 className="flex-1 text-base md:text-lg text-title font-semibold">Configuración de Categorías</h1>
          <div className={`cursor-pointer transform transition-transform duration-300 ${ openConfig ? "rotate-0" : "-rotate-180"}`}>
            <IconArrowDown width={28} height={28} />
          </div>
        </div>

        {openConfig && (
          <section className="flex flex-col overflow-auto space-y-5 md:grid md:grid-cols-2 md:flex-1 md:space-y-0 md:items-start md:gap-5">
            <Categoria />
            <Subcategoria />
          </section>
        )}
      </div>
    </section>
  );
}
