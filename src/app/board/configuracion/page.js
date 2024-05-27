import React from "react";
import Image from "next/image";

import { Configuracion } from "@/components/Shared/ContentBoard/Configuracion/Configuracion";

export default function page () {
  return (
    <section className="w-full h-screen flex">
      <Configuracion />
    </section>
  );
};
