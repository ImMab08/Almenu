import React from "react";
import Image from "next/image";

import { Balance } from "@/components/Shared/ContentBoard/Balance/Balance";
import { Navboard } from "@/components/Shared/Navboard";

export default function page () {
  return (
    <section className="w-full h-screen flex flex-col boardLayout">
      <div className="w-full h-[12%] isStats">
        <Navboard />
      </div>
      <Balance />
    </section>
  );
};