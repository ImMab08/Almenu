import React from "react";
import { Inicio } from "@/components/Desktop/Board/ContentBoard/Inicio";

export default function page() {
  return (
    <div className="block w-screen md:w-full md:h-full md:block overflow-auto">
      <Inicio />
    </div>
  );
}
