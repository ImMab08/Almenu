import React from "react";

import { Inventario } from "@/components/Desktop/Board/ContentBoard/Inventario";
import { InventarioMobile } from "@/components/Mobile/Board/ContentBoard/Inventario";

export default function page() {
  return (
    <>
      <div className="hidden sm:w-full sm:h-full sm:block sm:overflow-hidden">
        <Inventario />
      </div>
      <div className="block sm:hidden">
        <InventarioMobile />
      </div>
    </>
  );
}
