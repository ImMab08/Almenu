"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import ProductsBoard from "@/components/Shared/Products-Board/ProductsBoard";

import { IconFood } from "@/icons";

export function Menu() {
  const [id, setIdCategoria] = useState(); // Estado para el ID de categoría
  const [selectedCategoria, setSelectedCategoria] = useState(); // Estado para la categoría seleccionada

  // Hook para hacer la petición con el ID seleccionado
  const { data: menu } = useFetch(
    id ? `/v01/menu/usuario/${id}/productos` : null
  );

  // Función que se pasa al componente ProductsBoard para capturar la categoría seleccionada
  const handleSelectCategoria = (id) => {
    console.log("id seleccionada", id);
    setIdCategoria(id); // Actualiza el ID para la petición
    setSelectedCategoria(id); // Actualiza la categoría seleccionada
  };

  return (
    <section className="w-full h-full items-center">
      {/* Componente para seleccionar categorías */}
      <ProductsBoard handleSelectCategoria={handleSelectCategoria} />
      <div className="p-5 space-y-5 w-full h-full">
        {!selectedCategoria ? ( // Si no hay categoría seleccionada
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-lg text-title font-medium">
              Selecciona una{" "}
              <span className="font-semibold pb-[2px] border-b-2">
                categoría
              </span>{" "}
              para ver tus productos.
            </p>
          </div>
        ) : menu && menu.length > 0 ? ( // Si hay categoría seleccionada y productos
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
                      <div className="flex space-x-2">
                        <div className="w-[140px] h-[140px] bg-primary rounded-lg flex justify-center items-center cursor-pointer relative">
                          <IconFood width={55} height={55} />
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
              No has añadido productos o creado subcategorias para esta
              categoría.
            </p>
            <Link rel="stylesheet" href="" />
          </div>
        )}
      </div>
    </section>
  );
}
