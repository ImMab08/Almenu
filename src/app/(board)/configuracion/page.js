import React from "react";
import { Configuracion } from "@/components/Desktop/Board/ContentBoard/Configuracion";

export default function page () {
  return (
    <div className="block w-screen md:w-full md:h-full md:block overflow-auto">
      <Configuracion />
    </div>
  );
};