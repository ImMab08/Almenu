"use client";
import React, { useEffect, useState } from "react";

import useModalStore from "@/hooks/storeOpenModals";
import ModalProducto from "@/components/Modals/ModalProducto";

import {
  IconAddButton,
  IconArrowDown,
  IconPapelera,
  IconPencil,
} from "../../icons";
import useLoading from "@/hooks/useLoading";

export function Productos() {
  const loading = useLoading();
  const [ openConfig, setOpenConfig ] = useState(false);
  const { modals, openModal } = useModalStore();

  if (loading) return (
    <div className="w-full h-[72px] p-5 bg-primary rounded-lg space-y-5 animate-pulse">
    </div>
  )

  const handledSumit = () => {
    setOpenConfig(!openConfig);
  };


  return (
    <section className="w-full h-full flex flex-col text-secondary overflow-auto">

      <div className="w-full h-auto bg-primary rounded-lg p-5 space-y-5">
        <div className="flex cursor-pointer" onClick={handledSumit}>
          <h1 className="flex-1 text-xl font-semibold text-title">Configuración de Productos</h1>
          <div className={`cursor-pointer transform transition-transform duration-300 ${openConfig ? "rotate-0" : "-rotate-180"}`}>
            <IconArrowDown />
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                    <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#b4b4b4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input className=" w-full outline-none focus:border-none rounded-4 flex bg-transparent text-title h-10 px-3 py-2 text-sm pl-8 md:w-[200px] lg:w-[336px]" placeholder="Search menu..." type="search"/>
                </div>

                <div className="flex items-center justify-center p-4 relative">
                  <button className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-3 gap-1" onClick={() => openModal("Producto")}>
                    <IconAddButton className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    Añadir Producto
                  </button>

                  {modals.Producto && <ModalProducto />}
                </div>
              </div>

              <div className="p-6">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&amp;_tr]:border-b">
                      <tr className="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Nombre</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Descripción</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Precio</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Categoría</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Subcategoria</th>
                        <th className="h-12 px-4 text-left align-middle font-bold text-title">Opciones</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="border-b border-border">
                        <td className="p-4 align-middle text-subtitle">Margherita Pizza</td>
                        <td className="p-4 align-middle text-subtitle">Classic Italian pizza with tomato sauce, mozzarella, and basil</td>
                        <td className="p-4 align-middle text-subtitle">$15.99</td>
                        <td className="p-4 align-middle text-subtitle">Entrees</td>
                        <td className="p-4 align-middle text-subtitle">Pizzas</td>
                        <td className="p-4 align-middle space-x-2">
                          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 bg-bg hover:bg-bg/80 h-7 w-7">
                            <IconPencil />
                          </button>

                          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 bg-red-500 hover:bg-red-500/80 h-7 w-7">
                            <IconPapelera />
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 align-middle text-subtitle">Caesar Salad</td>
                        <td className="p-4 align-middle text-subtitle">Crisp romaine lettuce, croutons, and creamy Caesar dressing</td>
                        <td className="p-4 align-middle text-subtitle">$9.99</td>
                        <td className="p-4 align-middle text-subtitle">Appetizers</td>
                        <td className="p-4 align-middle text-subtitle">Salads</td>
                        <td className="p-4 align-middle space-x-2">
                          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 bg-bg hover:bg-bg/80 h-7 w-7">
                            <IconPencil />
                          </button>

                          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium disabled:opacity-50 bg-red-500 hover:bg-red-500/80 h-7 w-7">
                            <IconPapelera />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
