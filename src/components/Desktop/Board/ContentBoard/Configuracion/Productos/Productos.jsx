"use client";
import React, { useEffect, useState } from "react";

import useLoading from "@/hooks/useLoading";
import useModalStore from "@/hooks/storeOpenModals";

import {
  IconAddButton,
  IconArrowDown,
  IconDefaultProduct,
  IconPapelera,
  IconPencil,
} from "../../icons";

import useProductoApi from "@/api/Conections/ProductoApi";

import CreateProducto from "@/components/Modals/Producto/CreateProducto";
import UpdateProducto from "@/components/Modals/Producto/UpdateProducto";
import DeleteProducto from "@/components/Modals/Producto/DeleteProducto";

export function Productos() {
  const loading = useLoading();

  const { modals, openModal } = useModalStore();
  const { producto, setProducto, fetchProductos } = useProductoApi();

  const [openConfig, setOpenConfig] = useState(false);
  const [selectedProducto, setSelecteProducto] = useState(null);

  useEffect(() => {
    fetchProductos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading)
    return (
      <div className="w-full h-[72px] p-5 bg-primary rounded-lg space-y-5 animate-pulse"></div>
    );

  // Función para abrir el modal de confirmar eliminación.
  const handleOpenDeleteModal = (producto) => {
    setSelecteProducto(producto);
    openModal("DeleteProducto");
  };

  // Función para eliminar un producto del estado sin actualizar.
  const removeProductoList = (producto) => {
    setProducto((prevProducto) =>
      prevProducto.filter((item) => item.id !== producto)
    );
  };

  const handleOpenUpdateModal = (producto) => {
    setSelecteProducto(producto);
    openModal("UpdateProducto");
  };

  const handledSumit = () => {
    setOpenConfig(!openConfig);
  };

  const addProductoToList = (producto) => {
    setProducto((prevProducto) => [...prevProducto, producto]);
  };

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
            <IconArrowDown />
          </div>
        </div>

        {openConfig && (
          <div className="w-full h-auto bg-primary rounded-lg">
            <div className="rounded-lg border-border border">
              <div className="flex items-center p-6 ">
                <div className="flex flex-col space-y-1.5">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-title">
                    Productos
                  </h3>
                  <p className="text-sm text-muted-foreground text-title">
                    Administra tus productos.
                  </p>
                </div>

                <div className="relative ml-auto flex-1 md:grow-0 bg-secondary rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                  >
                    <path
                      d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="#b4b4b4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    className=" w-full outline-none focus:border-none rounded-4 flex bg-transparent text-title h-10 px-3 py-2 text-sm pl-8 md:w-[200px] lg:w-[336px]"
                    placeholder="Search menu..."
                    type="search"
                  />
                </div>

                <div className="flex items-center justify-center p-4 relative">
                  <button
                    className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-3 gap-1"
                    onClick={() => openModal("CreateProducto")}
                  >
                    <IconAddButton className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    Añadir Producto
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="relative w-full h-[400px] overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&amp;_tr]:border-b">
                      <tr className="border-b border-border transition-colors hover:bg-muted/50">
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Imagen</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Nombre</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Descripción</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Precio</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Catidad</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Categoría</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Subcategoria</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Opciones</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {producto.length > 0 ? (
                        producto.map((producto) => (
                          <tr
                            key={producto?.id_producto}
                            className="border-b border-border"
                          >
                            <td className="p-4 align-middle text-subtitle font-extralight">
                              <IconDefaultProduct />
                            </td>
                            <td className="p-4 align-middle text-subtitle font-extralight">
                              {producto?.nombre}
                            </td>
                            <td className="p-4 align-middle text-subtitle font-extralight">
                              {producto?.descripcion}
                            </td>
                            <td className="p-4 align-middle text-subtitle font-extralight">
                              ${producto?.precio.toLocaleString("es-CO", {
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
                                onClick={() => handleOpenUpdateModal(producto)}
                              >
                                <IconPencil />
                              </button>

                              <button
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 bg-red-500 hover:bg-red-500/80 h-7 w-7"
                                onClick={() => handleOpenDeleteModal(producto)}
                              >
                                <IconPapelera />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr className="h-[200px]">
                          <td
                            colSpan="8"
                            className="text-center text-title font-semibold p-4"
                          >
                            No hay productos agregados
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {modals.CreateProducto && (
                    <CreateProducto addProductoToList={addProductoToList} />
                  )}
                  {modals.UpdateProducto && (
                    <UpdateProducto producto={selectedProducto} />
                  )}
                  {modals.DeleteProducto && (
                    <DeleteProducto
                      producto={selectedProducto}
                      removeProductoList={removeProductoList}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
