import React from "react";

import { Inicio } from "@/components/Desktop/Board/ContentBoard/Inicio";
import { InicioMobile } from "@/components/Mobile/Board/ContentBoard/Inicio";

export default function page () {
  return (
    <>
      <div className="hidden sm:w-full sm:h-full sm:block sm:overflow-hidden">
        <Inicio />
      </div>
      <div className="block sm:hidden">
        <InicioMobile />
      </div>
    </>
  );
};