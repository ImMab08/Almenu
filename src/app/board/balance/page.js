import React from "react";
import Image from "next/image";

import { Balance } from "@/components/Shared/ContentBoard/Balance/Balance";

export default function page () {
  return (
    <section className="w-full h-screen flex">
      <Balance />
    </section>
  );
};