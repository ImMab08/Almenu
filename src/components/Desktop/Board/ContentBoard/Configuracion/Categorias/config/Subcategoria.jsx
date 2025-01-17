import React, { useState } from "react";

import { useFetch } from "@/hooks/useFetch";
import useLoading from "@/hooks/useLoading";
import useModalStore from "@/hooks/storeOpenModals";

import CreateSubcategoria from "@/components/Modals/Subcategoria/CreateSubcategoria";
import UpdateSubcategoria from "@/components/Modals/Subcategoria/UpdateSubcategoria";
import DeleteSubcategoria from "@/components/Modals/Subcategoria/DeleteSubcategoria";

import { IconPapelera, IconPencil } from "@/icons";

export default function Subcategoria() {
  const { modals, openModal } = useModalStore();
  const { data: subcategorias, setData } = useFetch('/v01/subcategoria/subcategorias');
  
  // Estado para almacenar la subcategoria seleccionada.
  const [ selectSubcategoria, setSelectSubcategoria ] = useState(null);

  // función para eliminar una subcategoria;
  const handleOpenModalEdit = (subcategoria) => {
    setSelectSubcategoria(subcategoria);
    openModal("EditarSubcategoria");
  }

  // función para editar una subcategoria;
  const handleOpenModalDelete = (subcategoria) => {
    setSelectSubcategoria(subcategoria);
    openModal("EliminarSubcategoria")
  }

  return (
    <div className="max-w-full rounded-lg border border-border">
      <div className="flex flex-col space-y-1.5 p-4 md:p-5">
        <h3 className="text-base md:text-lg font-semibold leading-none">Subcategorías</h3>
        <p className="text-text/70 text-xs md:text-sm border-b-2 border-border pb-3">Gestona las subcategorías de tú menú en caso de ser necesario.</p>
      </div>

      <div className="md:px-6">
        <div className="md:w-full h-[310px] overflow-auto">
          <table className="w-full">
            <thead className="sticky top-0">
              <tr className="border-b border-border bg-primary">
                <th className="h-12 px-4 text-left align-middle font-bold">Nombre</th>
                <th className="h-12 px-4 text-left align-middle font-bold">Descripción</th>
                <th className="h-12 px-4 text-left align-middle font-bold">Categoría</th>
                <th className="h-12 px-4 text-left align-middle font-bold">Opciones</th>
              </tr>
            </thead>
            <tbody className="">
              {subcategorias?.length > 0 ? (
                subcategorias.map((subcategoria) => (
                  <tr key={subcategoria?.nombre} className="border-b border-border">
                    <td className="p-4 text-xs md:text-sm align-middle text-text/90">{subcategoria?.nombre}</td>
                    <td className="p-4 text-xs md:text-sm align-middle text-text/90">{subcategoria?.descripcion}</td>
                    <td className="p-4 text-xs md:text-sm align-middle text-text/90">{subcategoria?.nombreCategoria}</td>

                    <td className="p-4 align-middle space-x-2">
                      <button className="inline-flex items-center justify-center rounded-md bg-bg hover:bg-bg/80 w-6 h-6 md:w-7 md:h-7" onClick={() => handleOpenModalEdit(subcategoria)}>
                        <IconPencil className="hidden md:block" width="18px" height="18px" />
                        <IconPencil className="block md:hidden" width="14px" height="14px" />
                      </button>
                      <button className="inline-flex items-center justify-center rounded-md bg-red-500 hover:bg-red-500/80 w-6 h-6 md:w-7 md:h-7" onClick={() => handleOpenModalDelete(subcategoria)}>
                        <IconPapelera className="hidden md:block" width="18px" height="18px" />
                        <IconPapelera className="block md:hidden" width="14px" height="14px" />
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-sm text-text/50 text-center font-semibold p-4">No hay subcategorias creadas</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-center p-4">
        <button className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-3" onClick={() => openModal("CreateSubcategoria")}>Añadir Subcategoria</button>

        {modals.CreateSubcategoria && <CreateSubcategoria subcategoria={subcategorias} setData={setData} />}
        {modals.EditarSubcategoria && <UpdateSubcategoria subcategoria={selectSubcategoria} setData={setData} />}
        {modals.EliminarSubcategoria && <DeleteSubcategoria subcategoria={selectSubcategoria} setData={setData} />}
      </div>
    </div>
  );
}
