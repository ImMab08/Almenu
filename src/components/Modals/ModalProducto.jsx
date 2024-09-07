import React from "react";
import useModalStore from "@/hooks/storeOpenModals";
import { IconAddButton } from "../Desktop/Board/ContentBoard/icons";

export default function ModalProducto() {
  const { closeModal } = useModalStore();
  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex items-center justify-center">
      <div className="rounded-lg bg-secondary text-title">
        <div className="flex flex-col space-y-1.5 p-5">
          <h3 className="text-xl font-semibold text-center">Añade un nuevo producto</h3>
        </div>

        <div className="px-6">
          <div className="w-full h-auto overflow-auto">
            <form action="" className="p-2 space-y-4">
              <div className="flex gap-10">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="">Nombre</label>
                  <input
                    className="flex h-10 border px-3 py-2 text-sm bg-transparent w-[300px] rounded-lg"
                    placeholder="Nombre del producto"
                    type="search"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="">Precio</label>
                  <input
                    className="flex h-10 border px-3 py-2 text-sm bg-transparent w-[300px] rounded-lg"
                    placeholder="$ 20.000"
                    type="search"
                  />
                </div>
              </div>

              <div className="flex gap-10">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="">Categoría</label>
                  <select
                    className="flex h-10 border px-3 py-2 text-sm bg-transparent w-[300px] rounded-lg"
                    placeholder="Añade un nombre a la categoría"
                    type="search"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="">Subcategoría</label>
                  <select
                    className="flex h-10 border px-3 py-2 text-sm bg-transparent w-[300px] rounded-lg"
                    placeholder="Añade un nombre a la categoría"
                    type="search"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="">Descripción</label>
                <textarea
                  className="flex border px-3 py-2 text-sm bg-transparent w-auto rounded-lg"
                  placeholder="Añade una descrión corta"
                  rows="4"
                  cols="50"
                  type="search"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 relative space-x-10">
          <button onClick={closeModal} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-red-500 hover:bg-red-500/80 rounded-md px-3 gap-1">Cancelar</button>
          <button onClick={closeModal} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-4 gap-1">Añadir</button>
        </div>
      </div>
    </div>
  );
}
