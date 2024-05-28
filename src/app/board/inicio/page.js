import React from "react";
import Image from "next/image";

import { Inicio } from "@/components/Shared/ContentBoard/Inicio/Inicio";
import { Navboard } from "@/components/Shared/Navboard";

export default function page () {
  return (
    <section className="w-full h-screen flex flex-col">
      <div className="w-full h-[12%]">
        <Navboard />
      </div>
      <Inicio />
    </section>
  );
};
