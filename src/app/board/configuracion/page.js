import React from "react";
import Image from "next/image";

import { Configuracion } from "@/components/Shared/ContentBoard/Configuracion/Configuracion";
import { Navboard } from "@/components/Shared/Navboard";

export default function page () {
  return (
    <section className="w-full h-screen flex flex-col">
      <div className="w-full h-[12%]">
        <Navboard />
      </div>
      <Configuracion />
    </section>
  );
};
