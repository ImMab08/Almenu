import React from "react";
import Image from "next/image";
import { IconFood } from "@/icons";
import useMenuApi from "@/api/Conections/MenuApi";

const MenuProductos = ({ idCategoria, handleProductoSelect }) => {
  const { menu } = useMenuApi(idCategoria);

  return (
    <div className="relative z-10 w-full h-full bg-secondary p-2 overflow-auto pb-5">
      {menu.length > 0 ? (
        menu.map((subcategoria) => (
          <div key={subcategoria.idSubcategoria}>
            <div className="pb-2">
              <h2 className="text-xl text-title font-semibold">
                {subcategoria.nombreSubcategoria}
              </h2>
            </div>
            <div className="grid grid-cols-3 mb-5 gap-2">
              {subcategoria.productosDTO.length > 0 ? (
                subcategoria.productosDTO.map((producto) => (
                  <div
                    key={producto.id_producto}
                    className="cursor-pointer hover:bg-primary/30 p-2 rounded-lg"
                    onClick={() => handleProductoSelect(producto)}
                  >
                    <div className="flex space-x-2">
                      <div className="w-[110px] h-[110px] bg-primary rounded-lg flex justify-center items-center cursor-pointer relative">
                        <IconFood width={55} height={55} />
                        <span className="absolute rounded-tl-lg p-1 bg-secondary bottom-0 right-0 text-title text-xs">
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
                        <p className="text-[10px] text-subtitle">
                          {producto.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <p className="text-subtitle font-normal">
                    No has añadido productos para esta Subcategoría.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-[250px] h-[250px] relative flex justify-center">
            <Image
              width={300}
              height={300}
              className="object-contain"
              src="/img/NotFoundProductos.png"
              alt=""
            />
          </div>
          <p className="text-subtitle font-normal">
            No has añadido subcategorías y productos para esta categoría.
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuProductos;
