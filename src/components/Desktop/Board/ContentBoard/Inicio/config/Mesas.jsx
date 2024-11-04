import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useFetch } from "@/hooks/useFetch";
import MenuProductos from "./MenuProductos";
import ProductsBoard from "@/components/Shared/Products-Board/ProductsBoard";

import { IconTableFour, IconTableHeight, IconTableSix, IconTableTwo } from "@/icons";

export default function Mesas({ selectedMesa, handleSelectMesa, selectedCategoria, handleSelectCategoria, handleProductoSelect, pedidos, productos }) {
  const { data: mesas } = useFetch("/v01/mesa/usuario");

  const renderIconMesa = (capacidad) => {
    switch (capacidad) {
      case 2:
        return <IconTableTwo />;
      case 4:
        return <IconTableFour />;
      case 6:
        return <IconTableSix />;
      case 8:
        return <IconTableHeight />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full">
      {selectedMesa && (
        <>
          <ProductsBoard handleSelectCategoria={handleSelectCategoria} />
          {selectedCategoria && (
            <MenuProductos 
              idCategoria={selectedCategoria} // Pasa el ID de la categoría
              handleProductoSelect={handleProductoSelect} 
            />
          )}
        </>
      )}
      {mesas.length > 0 ? (
        <div className="w-full h-full grid justify-items-center items-center grid-cols-8 grid-rows-5">
          {mesas.map((mesa) => (
            <button
              key={mesa.id}
              className={`w-[100px] h-[100px] p-2 flex flex-col items-center rounded-lg 
                ${selectedMesa?.id === mesa.id
                  ? "bg-green-500"
                  : pedidos[mesa.id] && pedidos[mesa.id].estado === "ocupada"
                  ? "bg-yellow-500 hover:bg-yellow-500/80" // Reflejar mesa ocupada
                  : "bg-slate-300 hover:bg-slate-300/80"
                }`}
              onClick={() => handleSelectMesa(mesa)}
            >
              <p>Mesa {mesa.numeroMesa}</p>
              {renderIconMesa(mesa.capacidad)}
            </button>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-5">
          <p className="text-base font-semibold text-title">¡Aún no has añadido mesas!</p>
          <div className="w-[250px] h-[250px] relative flex justify-center">
            <Image width={200} height={200} className="object-contain" src="/img/Questions-amico.png" alt=""/>
          </div>
          <p className="text-sm text-title">
            Da{" "}
            <Link className="underline text-title" href="/configuracion/#mesas">
              click aquí
            </Link>{" "}
            para comenzar.
          </p>
        </div>
      )}
    </div>
  );
}