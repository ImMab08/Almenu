import React from "react";
import Image from "next/image";

import { Inventario } from "@/components/Shared/ContentBoard/Inventario/Inventario";
import { Navboard } from "@/components/Shared/Navboard/Navboard";

export default function page () {
  return (
    <section className="w-auto h-screen flex flex-col">
      <div className=" w-full h-[12%]">
        <Navboard />
      </div>
      <Inventario />
    </section>
  );
};
