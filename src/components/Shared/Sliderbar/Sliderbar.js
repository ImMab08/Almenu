import React from "react";
import Image from "next/image";

const Sliderbar = () => {
  return (
    <main className="w-full h-screen flex">
      <section className="w-[15%] h-full pt-[10px] shadow-xl">

        <div className="w-full h-[10%] flex justify-center">
          <Image width={120} height={120} className="object-contain" src="/img/logo-almenu.png" alt="Logo Almenu" />
        </div>

        <div className="w-full h-[70%] p-5">
          <div className="flex items-center my-[10px]">
            <Image width={22} height={22} className="object-contain mr-[10px]" src="/img/coin.svg" alt="Menú" />
            <a className=" text-base decoration no-underline text-title" href="#" data-section="menu">Menú</a>
          </div>
          <div className="flex items-center my-[10px]">
            <Image width={22} height={22} className="object-contain mr-[10px]" src="/img/proveedores.svg" alt="Inventario" />
            <a className=" text-base decoration no-underline text-title" href="#" data-section="inventario">Inventario</a>
          </div>
          <div className="flex items-center my-[10px]">
            <Image width={22} height={22} className="object-contain mr-[10px]" src="/img/stats.svg" alt="Balance" />
            <a className=" text-base decoration no-underline text-title" href="#" data-section="balance">Balance</a>
          </div>
        </div>

        <div className="w-full h-[20%] p-5">
          <div className="flex items-center my-[10px]">
            <Image width={22} height={22} className="object-contain mr-[10px]" src="/img/settings.svg" alt="Configuración" />
            <a className=" text-base decoration no-underline text-title" href="#" data-section="configuracion">Configuración</a>
          </div>
          <div className="flex items-center my-[10px]">
            <Image width={22} height={22} className="object-contain mr-[10px]" src="/img/logout.svg" alt="Cerrar Sesión" />
            <a className=" text-base decoration no-underline text-title" href="/">Cerrar Sesión</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sliderbar;
