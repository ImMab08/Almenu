import React, { useState } from "react";

import { useFetch } from "@/hooks/useFetch";
import useLoading from "@/hooks/useLoading";
import useModalStore from "@/hooks/storeOpenModals";

import CreateSubcategoria from "@/components/Modals/Subcategoria/CreateSubcategoria";
import UpdateSubcategoria from "@/components/Modals/Subcategoria/UpdateSubcategoria";
import DeleteSubcategoria from "@/components/Modals/Subcategoria/DeleteSubcategoria";

import { IconPapelera, IconPencil } from "@/icons";

export default function Subcategoria() {
  const loading = useLoading();
  const { modals, openModal } = useModalStore();
  const { data: subcategorias, setData } = useFetch('/v01/subcategoria/subcategorias');
  
  // Estado para almacenar la subcategoria seleccionada.
  const [ selectSubcategoria, setSelectSubcategoria ] = useState(null);

  if (loading) {
    return (
      <div role="status" className="rounded-lg border border-border p-5 w-full h-[300px] flex items-center justify-center">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin fill-[#1995ed]"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  
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
    <div className="rounded-lg border border-border">
      <div className="flex flex-col space-y-1.5 p-5">
        <h3 className="text-lg font-semibold leading-none text-title">Subcategorías</h3>
        <p className="text-sm text-muted-foreground border-b border-border text-title pb-3">Gestona las subcategorías de tú menú en caso de ser necesario.</p>
      </div>

      <div className="px-6">
        <div className="w-full h-[300px] overflow-auto">
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
              {subcategorias?.length > 0 ? (
                subcategorias.map((subcategoria) => (
                  <tr key={subcategoria?.nombre} className="border-b border-border">
                    <td className="p-4 align-middle font-semibold text-subtitle">{subcategoria?.nombre}</td>
                    <td className="p-4 align-middle text-subtitle">{subcategoria?.descripcion}</td>
                    <td className="p-4 align-middle font-semibold text-subtitle">{subcategoria?.nombreCategoria}</td>

                    <td className="p-4 align-middle space-x-2">
                      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-bg hover:bg-bg/80 h-7 w-7" onClick={() => handleOpenModalEdit(subcategoria)}>
                        <IconPencil />
                      </button>
                      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-red-500 hover:bg-red-500/80 h-7 w-7" onClick={() => handleOpenModalDelete(subcategoria)}>
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
        <button className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-3" onClick={() => openModal("CreateSubcategoria")}>
          Añadir Subcategoria
        </button>

        {modals.CreateSubcategoria && <CreateSubcategoria subcategoria={subcategorias} setData={setData} />}
        {modals.EditarSubcategoria && <UpdateSubcategoria subcategoria={selectSubcategoria} setData={setData} />}
        {modals.EliminarSubcategoria && <DeleteSubcategoria subcategoria={selectSubcategoria} setData={setData} />}
      </div>
    </div>
  );
}
