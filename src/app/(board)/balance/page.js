import React from "react";

import { Balance } from "@/components/Desktop/Board/ContentBoard/Balance/Balance";
import { BalanceMobile } from "@/components/Mobile/Board/ContentBoard/Balance";

export default function page () {
  return (
    <>
      <div className="hidden sm:w-full sm:h-full sm:block sm:overflow-hidden">
        <Balance />
      </div>
      <div className="block md:hidden">
        <BalanceMobile />
      </div>
    </>
  );
};