"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  IconArrowDown,
  IconClose,
  IconTableTwo,
  IconTableFour,
  IconTableSix,
  IconTableHeight,
} from "./icons";
import { mesas } from "./config";
import { expandedBoard } from "@/hooks/CustomHook";

const iconMap = {
  IconTableTwo: IconTableTwo,
  IconTableFour: IconTableFour,
  IconTableSix: IconTableSix,
  IconTableHeight: IconTableHeight,
};

export function Mesas() {
  const [isExpanded, toggleExpanded, closeExpanded] = expandedBoard((state) => [
    state.isExpanded,
    state.toggleExpanded,
    state.closeExpanded
  ]);

  return (
    <section className="w-full h-full p-5 bg-primary rounded-lg">
      <h1 className="text-title text-xl font-bold py-2">
        Configuración de Mesas
      </h1>

      <div className="flex pt-2">
        <div className="w-full h-[500px]  rounded-lg p-4 relative border border-gray-200 bg-gray-100">
          <div className="w-[100px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer">
            <p>Mesa 1</p>
            <IconTableTwo />
          </div>
          {isExpanded && (
            <div className="absolute top-0 right-0 z-10 w-1/2 h-full border-gray-200 bg-gray-200 shadow-lg flex flex-col items-center rounded-lg p-2 ml-3 overflow-auto">
              <button
                className="absolute top-3 right-3 cursor-pointer"
                onClick={closeExpanded}
              >
                <IconClose />
              </button>
            </div>
          )}

          <button
            className="absolute top-3 right-3 cursor-pointer"
            onClick={toggleExpanded}
          >
            <IconArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
}
