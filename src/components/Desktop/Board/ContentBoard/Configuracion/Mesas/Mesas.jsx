"use client";
import React, { useState } from "react";
import { IconTableTwo, IconTableFour, IconTableSix, IconTableHeight, IconArrowDown } from "../../icons";
import useLoading from "@/hooks/useLoading";

export function Mesas() {
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
    <section className="w-full h-full p-5 bg-primary rounded-lg space-y-5" id="mesas">
      <div className="flex cursor-pointer" onClick={handledSumit}>
        <h1 className="flex-1 text-xl text-title font-semibold">Configuración de Mesas</h1>
        <div className={`cursor-pointer transform transition-transform duration-300 ${openConfig ? 'rotate-0' : '-rotate-180'}`} onClick={handledSumit}>
          <IconArrowDown />
        </div>
      </div>

      {openConfig && 
        <div className="flex">
          <div className="w-[86%] h-[500px]  rounded-lg p-4 relative border border-border bg-tertiary">
            <div className="w-[100px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer">
              <p>Mesa 1</p>
              <IconTableTwo />
            </div>
          </div>

          <div className="w-[14%] h-auto flex flex-col items-center border border-border bg-tertiary rounded-lg p-2 ml-3 overflow-auto"></div>
        </div>
      }
    </section>
  );
}
