"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  IconTableTwo,
  IconTableFour,
  IconTableSix,
  IconTableHeight,
} from "./icons";
import { mesas } from "./config";

const iconMap = {
  IconTableTwo: IconTableTwo,
  IconTableFour: IconTableFour,
  IconTableSix: IconTableSix,
  IconTableHeight: IconTableHeight,
};

export function Mesas() {
  return (
    <section className="w-full h-full p-5 bg-primary rounded-lg">
      <h1 className="text-title text-xl font-bold py-2">Configuración de Mesas</h1>

      <div className="flex pt-2">
        <div className="w-[86%] h-[500px]  rounded-lg p-4 relative border border-gray-200 bg-gray-100">
          <div className="w-[100px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer">
            <p>Mesa 1</p>
            <IconTableTwo />
          </div>
        </div>

        <div className="w-[14%] h-auto flex flex-col items-center border border-gray-200 bg-gray-100 rounded-lg p-2 ml-3 overflow-auto"></div>
      </div>
    </section>
  );
}
