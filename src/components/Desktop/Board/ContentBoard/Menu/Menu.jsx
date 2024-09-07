import ProductsBoard from "@/components/Shared/Products-Board/ProductsBoard";
import React from "react";
import { IconFood } from "../icons";

export function Menu() {
  return (
    <section className="">
      <ProductsBoard />
      <div className="p-5">
        <div className="pb-5">
          <h2 className="text-xl text-title font-semibold">Comidas rapidas</h2>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex space-x-2 ">
            <div className="w-[140px] h-[140px] bg-primary rounded-lg flex justify-center items-center cursor-pointer relative">
              <IconFood />
              <span className="absolute rounded-tl-lg p-2 bg-secondary bottom-0 right-0 text-title text-xs">$ 15.000</span>
            </div>
            <div className="max-w-[180px] space-y-2">
              <h3 className="text-lg text-title">Lorem ipsum dolor</h3>
              <p className="text-sm text-subtitle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                corrupti sed tempora! Animi quidem commodi ab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
