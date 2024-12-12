"use client";
import React, { useState } from "react";

import useLoading from "@/hooks/useLoading";
import useModalStore from "@/hooks/storeOpenModals";

import { IconArrowDown, IconDefaultProduct, IconPapelera, IconPencil, IconSearch } from "@/icons";

import { useFetch } from "@/hooks/useFetch";
import CreateProducto from "@/components/Modals/Producto/CreateProducto";
import UpdateProducto from "@/components/Modals/Producto/UpdateProducto";
import DeleteProducto from "@/components/Modals/Producto/DeleteProducto";

export function Productos() {
  const loading = useLoading();
  const { modals, openModal } = useModalStore();
  const { data: productos, setData } = useFetch("/v01/producto/usuario", "GET");

  const [ openConfig, setOpenConfig ] = useState(false);
  const [ selectProducto, setSelectProducto ] = useState(null);
  const [ search, setSearch ] = useState("");

  if (loading) {
    return (
      <div className="w-full h-[72px] p-5 bg-primary rounded-lg space-y-5 animate-pulse"></div>
    );
  } 

  // Función para editar un producto
  const handleOpenModalEdit = (producto) => {
    setSelectProducto(producto);
    openModal("EditarProducto");
  };

  // Función para eliminar un producto.
  const handleOpenModalDelete = (producto) => {
    setSelectProducto(producto);
    openModal("EliminarProducto");
  };

  const handledSumit = () => {
    setOpenConfig(!openConfig);
  };

  const filteredProductos = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full h-full flex flex-col text-secondary overflow-auto">
      <div className="w-full h-auto bg-primary rounded-lg p-5 space-y-5">
        <div className="flex cursor-pointer" onClick={handledSumit}>
          <h1 className="flex-1 text-xl font-semibold text-title">
            Configuración de Productos
          </h1>
          <div
            className={`cursor-pointer transform transition-transform duration-300 ${
              openConfig ? "rotate-0" : "-rotate-180"
            }`}
          >
            <IconArrowDown width={28} height={28} />
          </div>
        </div>

        {openConfig && (
          <div className="w-full h-auto bg-primary rounded-lg">
            <div className="rounded-lg border-border border">
              <div className="flex items-center p-6 ">
                <div className="flex flex-col space-y-1.5">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-title">Productos</h3>
                  <p className="text-sm text-muted-foreground text-title">Administra tus productos.</p>
                </div>

                <div className="relative ml-auto flex-1 md:grow-0 bg-secondary rounded-lg">
                  <div className="absolute left-2 top-2">
                    <IconSearch width={24} height={24} />
                  </div>
                  <input
                    className=" w-full outline-none focus:border-none rounded-4 flex bg-transparent text-title h-10 px-3 py-2 text-sm pl-10 md:w-[200px] lg:w-[336px]"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar"
                    value={search}
                    type="search"
                  />
                </div>

                <div className="flex items-center justify-center p-4 relative">
                  <button
                    className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-3 gap-1"
                    onClick={() => openModal("CreateProducto")}
                  >
                    Añadir Producto
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="relative w-full h-[400px] overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="">
                      <tr className="border-b border-border transition-colors hover:bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">
                          Imagen
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">
                          Nombre
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">
                          Descripción
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">
                          Precio
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">
                          Cantidad
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">
                          Categoría
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">
                          Subcategoria
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">
                          Opciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {filteredProductos.length > 0 ? (
                        filteredProductos.map((producto) => (
                          <tr
                            key={producto?.id_producto}
                            className="border-b border-border"
                          >
                            <td className="p-4 align-middle text-subtitle font-extralight">
                              <IconDefaultProduct width={24} height={24} />
                            </td>
                            <td className="p-4 align-middle text-subtitle font-extralight">
                              {producto?.nombre}
                            </td>
                            <td className="p-4 align-middle text-subtitle font-extralight">
                              {producto?.descripcion}
                            </td>
                            <td className="p-4 align-middle text-subtitle font-extralight">
                              $
                              {producto?.precio.toLocaleString("es-CO", {
                                maximumFractionDigits: 2,
                              })}
                            </td>
                            <td className="p-4 align-middle text-subtitle font-extralight">
                              {producto?.cantidad}
                            </td>
                            <td className="p-4 align-middle text-subtitle font-extralight">
                              {producto?.nombreCategoria}
                            </td>
                            <td className="p-4 align-middle text-subtitle font-extralight">
                              {producto?.nombreSubcategoria}
                            </td>

                            <td className="p-4 align-middle space-x-2">
                              <button
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 bg-bg hover:bg-bg/80 h-7 w-7"
                                onClick={() => handleOpenModalEdit(producto)}
                              >
                                <IconPencil width={22} height={22} />
                              </button>

                              <button
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 bg-red-500 hover:bg-red-500/80 h-7 w-7"
                                onClick={() => handleOpenModalDelete(producto)}
                              >
                                <IconPapelera width={22} height={22} />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr className="h-[200px]">
                          <td colSpan="8" className="text-center text-title font-semibold p-4">No hay productos agregados</td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {modals.CreateProducto && <CreateProducto productos={productos} setData={setData} />}
                  {modals.EditarProducto && <UpdateProducto producto={selectProducto} setData={setData} />}
                  {modals.EliminarProducto && <DeleteProducto producto={selectProducto} setData={setData} />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
