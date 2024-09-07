'use client'
import React, { useState } from "react";

import useModalStore from "@/hooks/storeOpenModals";

import ModalCategory from "@/components/Modals/ModalCategory";
import ModalSubcategory from "@/components/Modals/ModalSubcategory";

import { IconAddButton, IconArrowDown, IconPapelera, IconPencil } from "../../icons";

export function Categoria() {

  const [ openConfig, setOpenConfig ] = useState(false);

  const handledSumit = () => {
    setOpenConfig(!openConfig);
  }

  const { modals, openModal } = useModalStore();

  return (
    <section className="w-full h-full flex flex-col text-title overflow-auto gap-5">

      <div className="w-full h-auto bg-primary rounded-lg p-5 space-y-5">
        <div className="flex cursor-pointer" onClick={handledSumit}>
          <h1 className="flex-1 text-xl text-title font-semibold">Configuración de Categorías</h1>
          <div className={`cursor-pointer transform transition-transform duration-300 ${openConfig ? 'rotate-0' : '-rotate-180'}`} >
            <IconArrowDown />
          </div>
        </div>

        {openConfig && 
          <div className="flex w-full flex-col overflow-auto">
            <main className="grid grid-cols-2 flex-1 items-start gap-4 md:gap-8">
            
              <div className="rounded-lg border border-border">
                <div className="flex flex-col space-y-1.5 p-5 ">
                  <h3 className="text-lg font-semibold leading-none text-title">Categorías</h3>
                  <p className="text-sm border-b-2 border-border pb-3 text-title">Gestona las categorías de tú menú.</p>
                </div>
          
                <div className="px-6">
                  <div className="w-full h-[280px] overflow-auto">
                    <table className="w-full text-sm ">
                      <thead className="sticky top-0">
                        <tr className="border-b border-border">
                          <th className="h-12 px-4 text-left align-middle font-bold text-title">Nombre</th>
                          <th className="h-12 px-4 text-left align-middle font-bold text-title">Descripción</th>
                          <th className="h-12 px-4 text-left align-middle font-bold text-title">Opciones</th>
                        </tr>
                      </thead>
                      <tbody className="w-full">
                        <tr className="border-b border-border">
                          <td className="p-4 align-middle font-semibold text-subtitle">Appetizers</td>
                          <td className="p-4 align-middle text-subtitle">Small bites to start your meal</td>
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
                
                <div className="flex items-center justify-center p-4 relative">
                  <button className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-3 gap-1" onClick={() => openModal('Category')}>
                    <IconAddButton />
                    Añadir Categoría
                  </button>
          
                  {modals.Category && <ModalCategory />}
                </div>
              </div>
          
              <div className="rounded-lg border border-border">
                <div className="flex flex-col space-y-1.5 p-5">
                  <h3 className="text-lg font-semibold leading-none text-title">Subcategorías</h3>
                  <p className="text-sm text-muted-foreground border-b border-border text-title pb-3">Gestona las subcategorías de tú menú en caso de ser necesario.</p>
                </div>
          
                <div className="px-6">
                  <div className="w-full h-[280px] overflow-auto">
                    <table className="w-full text-sm">
                      <thead className="sticky top-0">
                        <tr className="border-b border-border">
                          <th className="h-12 px-4 text-left align-middle font-bold text-title">Nombre</th>
                          <th className="h-12 px-4 text-left align-middle font-bold text-title">Descripción</th>
                          <th className="h-12 px-4 text-left align-middle font-bold text-title">Opciones</th>
                        </tr>
                      </thead>
                      <tbody className="w-full">
                        <tr className="border-b border-border">
                          <td className="p-4 align-middle font-semibold text-subtitle">Appetizers</td>
                          <td className="p-4 align-middle text-subtitle">Small bites to start your meal</td>
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
          
                <div className="flex items-center justify-center p-4">
                  <button className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-3 gap-1" onClick={() => openModal('Subcategory')}>
                    <IconAddButton />
                    Añadir Subcategoria
                  </button>
          
                  {modals.Subcategory && <ModalSubcategory />}
                </div>
              </div>
            </main>
          </div>
        }
      </div>
    </section>
  );
}