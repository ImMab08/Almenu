import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductsBoard from "@/components/Shared/Products-Board/ProductsBoard";

export function Inicio () {
  return (
    <section className="w-full h-full flex bg-secondary">
      <div className="w-[70%] h-auto"> 
        <ProductsBoard />

        <div className="w-full h-full flex flex-col items-center justify-center p-5">
          <p className="text-base font-semibold text-title">¡Aún no has añadido mesas!</p>
          <div className=" w-[250px] h-[250px] relative flex justify-center">
            <Image width={200} height={200} className=" object-contain"  src="/img/Questions-amico.png" alt="" />
          </div>
          <p className="text-sm text-title">Da <Link className="underline text-title" href="/configuracion/#mesas">click aquí</Link> para comenzar.</p>
        </div>


      </div>

      <section className="w-[30%] flex-1 p-5 bg-secondary border-primary shadow-lg border-l-[.5px]">

        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className=" w-[250px] h-[250px] relative flex justify-center">
            <Image width={200} height={200} className=" object-contain" src="/img/Receipt-rafiki.png" alt="" />
          </div>
          <div className="w-[200px]">
            <p className=" cursor-default text-sm font-semibold text-title">Selecciona una mesa para los productos consumidos.</p>
          </div>
        </div>

        {/* <div className="flex justify-between">
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
        </div> */}
      </section>
    </section>
  );
};
