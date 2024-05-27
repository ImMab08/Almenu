import React from "react";
import Image from "next/image";

import { Inicio } from "@/components/Shared/ContentBoard/Inicio/Inicio";

export default function page () {
  return (
    <section className="w-full h-screen flex">
      <Inicio />
    </section>
  );
};
