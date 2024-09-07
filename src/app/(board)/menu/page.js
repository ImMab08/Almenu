import { Menu } from "@/components/Desktop/Board/ContentBoard/Menu";
import React from "react";

export default function page() {
  return (
    <>
      <div className="hidden sm:w-full sm:h-full sm:block sm:overflow-hidden">
        <Menu />
      </div>
      <div className="block sm:hidden">
      </div>
    </>
  );
}
