import React from "react";
import Image from "next/image";

import { Inventario } from "@/components/Shared/ContentBoard/Inventario/Inventario";

export default function page () {
  return (
    <section className="w-full h-screen flex">
      <Inventario />
    </section>
  );
};
