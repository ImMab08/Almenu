import React, { useState } from "react";

import useSubcategoriaApi from "@/api/Conections/SubcategoriaApi";
import useModalStore from "@/hooks/storeOpenModals";
import { IconAddButton, IconPapelera, IconPencil } from "../../../icons";

import CreateSubcategoria from "@/components/Modals/Subcategoria/CreateSubcategoria";
import UpdateSubcategoria from "@/components/Modals/Subcategoria/UpdateSubcategoria";
import DeleteSubcategoria from "@/components/Modals/Subcategoria/DeleteSubcategoria";

export default function Subcategoria() {
  const { modals, openModal } = useModalStore();
  const { subcategoria } = useSubcategoriaApi();

  // Estado para almacenar la subcategoria seleccionada.
  const [ selectedSubcategoria, setSelectedSubcategoria ] = useState(null);

  // función para eliminar una subcategoria;
  const handleDeleteSubcategoria = (subcategoria) => {
    setSelectedSubcategoria(subcategoria);
    openModal("deleteSubcategoria");
  }

  // función para editar una subcategoria;
  const handleEditSubcategoria = (subcategoria) => {
    setSelectedSubcategoria(subcategoria);
    openModal("editSubcategoria")
  }

  return (
    <div className="rounded-lg border border-border">
      <div className="flex flex-col space-y-1.5 p-5">
        <h3 className="text-lg font-semibold leading-none text-title">Subcategorías</h3>
        <p className="text-sm text-muted-foreground border-b border-border text-title pb-3">Gestona las subcategorías de tú menú en caso de ser necesario.</p>
      </div>

      <div className="px-6">
        <div className="w-full h-[280px] overflow-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0">
              <tr className="border-b border-border bg-primary">
                <th className="h-12 px-4 text-left align-middle font-bold text-title">Nombre</th>
                <th className="h-12 px-4 text-left align-middle font-bold text-title">Descripción</th>
                <th className="h-12 px-4 text-left align-middle font-bold text-title">Categoría</th>
                <th className="h-12 px-4 text-left align-middle font-bold text-title">Opciones</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {subcategoria?.length > 0 ? (
                subcategoria.map((subcategoria) => (
                  <tr key={subcategoria?.nombre} className="border-b border-border">
                    <td className="p-4 align-middle font-semibold text-subtitle">{subcategoria?.nombre}</td>
                    <td className="p-4 align-middle text-subtitle">{subcategoria?.descripcion}</td>
                    <td className="p-4 align-middle font-semibold text-subtitle">{subcategoria?.nombreCategoria}</td>

                    <td className="p-4 align-middle space-x-2">
                      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-bg hover:bg-bg/80 h-7 w-7" onClick={() => handleEditSubcategoria(subcategoria)}>
                        <IconPencil />
                      </button>
                      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-red-500 hover:bg-red-500/80 h-7 w-7" onClick={() => handleDeleteSubcategoria(subcategoria)}>
                        <IconPapelera />
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4">No hay subcategorias creadas</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-center p-4">
        <button className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-3 gap-1" onClick={() => openModal("CreateSubcategoria")}>
          <IconAddButton />
          Añadir Subcategoria
        </button>

        {modals.CreateSubcategoria && <CreateSubcategoria />}
        {modals.editSubcategoria && <UpdateSubcategoria subcategoria={selectedSubcategoria}/>}
        {modals.deleteSubcategoria && <DeleteSubcategoria subcategoria={selectedSubcategoria}/>}
      </div>
    </div>
  );
}
