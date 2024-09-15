import React, { useState } from "react";

import useCategoriaApi from "./ApiCategoria";
import useModalStore from "@/hooks/storeOpenModals";
import { IconAddButton, IconPapelera, IconPencil } from "../../../icons";

import CreateCategoria from "@/components/Modals/Categoria/CreateCategoria";
import UpdateCategoria from "@/components/Modals/Categoria/UpdateCategoria";
import DeleteCategoria from "@/components/Modals/Categoria/DeleteCategoria";

export default function Categoria() {
  const { modals, openModal } = useModalStore();
  const { categoria, loading, error } = useCategoriaApi();

  // Estado para almacenar la categoría seleccionada.
  const [ selectedCategoria, setSelectedCategoria ] = useState(null);

  const handleOpenDeleteModal = (categoria) => {
    setSelectedCategoria(categoria);
    openModal("ConfirmDelete");
  }

  const handleOpenEditModal = (categoria) => {
    setSelectedCategoria(categoria);
    openModal("EditarCategoria")
  }

  return (
    <div className="rounded-lg border border-border">
      <div className="flex flex-col space-y-1.5 p-5 ">
        <h3 className="text-lg font-semibold leading-none text-title">Categorías</h3>
        <p className="text-sm border-b-2 border-border pb-3 text-title">Gestona las categorías de tú menú.</p>
      </div>

      <div className="px-6">
        <div className="w-full h-[280px] overflow-auto">
          <table className="w-full text-sm ">
            <thead className="sticky top-0">
              <tr className="border-b border-border bg-primary">
                <th className="h-12 px-4 text-left align-middle font-bold text-title">Nombre</th>
                <th className="h-12 px-4 text-left align-middle font-bold text-title">Descripción</th>
                <th className="h-12 px-4 text-left align-middle font-bold text-title">Opciones</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {categoria?.length > 0 ? (
                categoria.map((categoria) => (
                  <tr key={categoria.id} className="border-b border-border">
                    <td className="p-4 align-middle font-semibold text-subtitle">{categoria.nombre}</td>
                    <td className="p-4 align-middle text-subtitle">{categoria.descripcion}</td>

                    <td className="p-4 align-middle space-x-2">
                      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-bg hover:bg-bg/80 h-7 w-7" onClick={() => handleOpenEditModal(categoria)}>
                        <IconPencil />
                      </button>
                      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-red-500 hover:bg-red-500/80 h-7 w-7" onClick={() => handleOpenDeleteModal(categoria)}>
                        <IconPapelera />
                      </button>
                    </td>
                    
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center p-4">No hay categorías creadas</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-center p-4 relative">
        <button className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-3 gap-1" onClick={() => openModal("CreateCategoria")}>
          <IconAddButton />
          Añadir Categoría
        </button>

        {modals.CreateCategoria && <CreateCategoria />}
        {modals.EditarCategoria && <UpdateCategoria categoria={selectedCategoria} />}
        {modals.ConfirmDelete && <DeleteCategoria categoria={selectedCategoria} />}
      </div>
    </div>
  );
}
