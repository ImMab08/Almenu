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
          <h1 className="flex-1 text-xl text-title font-semibold">Configuración de Categorías</h1>
          <div className={`cursor-pointer transform transition-transform duration-300 ${ openConfig ? "rotate-0" : "-rotate-180"}`}>
            <IconArrowDown />
          </div>
        </div>

        {openConfig && (
          <section className="flex w-full flex-col overflow-auto">
            <div className="grid grid-cols-2 flex-1 items-start gap-4 md:gap-8">
              <Categoria />
              <Subcategoria />
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
