import React from "react";
import Image from "next/image";

import { IconTable } from "./icons";

export function Inicio () {
  return (
    <section className="w-full h-full flex">
      <div className="w-[70%] h-full p-5 grid grid-cols-6 gap-5"> 

        <div className=" w-[100px] h-[100px] p-2 flex flex-col items-center bg-gray-300 rounded-lg cursor-pointer">
          <p>Mesa 1</p>
          <IconTable />
        </div>
    
      </div>

      <section className="w-[30%] flex-1 p-5 bg-primary">
        <div className="flex justify-between">
          <span className="text-lg font-normal">Factura</span>
          <span className="text-lg font-semibold">Mesa 1</span>
        </div>
        <div className="border-b-2 mt-3 "></div>
        <div className="flex justify-between mt-3">
          <span className="font-medium">Producto</span>
          <span className="font-medium">Precio</span>
          <span className="font-medium">Cantidad</span>
          <span className="font-medium">Total</span>
        </div>

        <div className="flex justify-between mt-5">
          <span className="text-sm">Coca - Cola</span>
          <span className="text-sm">$ 5.000</span>
          <span className="text-sm">2</span>
          <span className="text-sm">$ 10.000</span>
        </div>
      </section>
    </section>
  );
};
