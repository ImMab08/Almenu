import React from "react";

import { Configuracion } from "@/components/Desktop/Board/ContentBoard/Configuracion";
import { ConfiguracionMobile } from "@/components/Mobile/Board/ContentBoard/Configuracion/ConfiguracionMobile";

export default function page () {
  return (
    <>
      <div className="hidden sm:w-full sm:h-full sm:block overflow-auto">
        <Configuracion />
      </div>
      <div className="block sm:hidden">
        <ConfiguracionMobile />
      </div>
    </>
  );
};