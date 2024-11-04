"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import ProductsBoard from "@/components/Shared/Products-Board/ProductsBoard";

import { IconFood } from "@/icons";

export function Menu() {
  const [idCategoria, setIdCategoria] = useState();
  const [selectedCategoria, setSelectedCategoria] = useState();

  const { data: menu } = useFetch(`/v01/menu/usuario/${idCategoria}/productos`)

  // Función que se pasa al componente ProductsBoard para capturar la categoría seleccionada
  const handleSelectCategoria = (idCategoria) => {
    console.log("id seleccionada", idCategoria);
    setSelectedCategoria(idCategoria);
  };

  return (
    <section className="w-full h-full items-center">
      <ProductsBoard handleSelectCategoria={handleSelectCategoria} />
      <div className="p-5 space-y-5 w-full h-full">
        {!selectedCategoria ? ( // Mostrar mensaje si no hay categoría seleccionada
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-lg text-title font-medium">
              Selecciona una{" "}
              <span className="font-semibold pb-[2px] border-b-2">
                categoría
              </span>{" "}
              para ver tus productos.
            </p>
          </div>
        ) : menu.length > 0 ? ( // Si se selecciona una categoria, mostrar su contenido
          menu.map((subcategoria) => (
            <div key={subcategoria.idSubcategoria}>
              <div className="pb-2">
                <h2 className="text-xl text-title font-semibold">
                  {subcategoria.nombreSubcategoria}
                </h2>
              </div>
              <div className="grid grid-cols-4">
                {subcategoria.productosDTO.length > 0 ? (
                  subcategoria.productosDTO.map((producto) => (
                    <div key={producto.id_producto} className="">
                      <div className="flex space-x-2 ">
                        <div className="w-[140px] h-[140px] bg-primary rounded-lg flex justify-center items-center cursor-pointer relative">
                          <IconFood />
                          <span className="absolute rounded-tl-lg p-2 bg-secondary bottom-0 right-0 text-title text-xs">
                            $
                            {producto.precio.toLocaleString("es-CO", {
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="max-w-[180px] space-y-2">
                          <h3 className="text-lg text-title">
                            {producto.nombre}
                          </h3>
                          <p className="text-sm text-subtitle">
                            {producto.descripcion}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    <p className="text-subtitle font-normal">
                      No has añadido productos para esta Subcategoria.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex items-center text-center justify-center">
            <p className="text-title font-semibold w-[350px]">
              No has añadido productos o creado subcategorias para
              estacategoria.
            </p>
            <Link rel="stylesheet" href="" />
          </div>
        )}
      </div>
    </section>
  );
}
