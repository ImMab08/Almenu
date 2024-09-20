import React from "react";
import useModalStore from "@/hooks/storeOpenModals";
import useCategoriaApi from "@/api/Conections/CategoriaApi";

export default function DeleteCategoria({ categoria }) {
  const { closeModal } = useModalStore();
  const { deleteCategoria } = useCategoriaApi();

  // Función para confirmar la eliminación
  const handleSubmit = async (e) => {
    try {
      if (categoria) {
        await deleteCategoria(categoria.id)
      }
    } catch(error) {
      console.log(error);
    }
    closeModal();
  };

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex items-center justify-center">
      <div className="rounded-lg bg-secondary w-[450px] ">
        <div className="flex flex-col space-y-4 p-5">
          <p className="text-xl text-center">¿Estás seguro que deseas eliminar la categoria <span className="font-semibold">{categoria?.nombre}</span>?</p>
          <p className="text-xs font-semibold text-subtitle text-center">Al hacer esto perderas las subcategorias que pertenezcan a esta</p>
        </div>

        <div className="flex items-center justify-center p-4 relative space-x-10">
          <button onClick={closeModal} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-red-500 hover:bg-red-500/80 rounded-md px-3 gap-1">Cancelar</button>
          <button onClick={handleSubmit} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-4 gap-1">Confirmar</button>
        </div>
      </div>
    </div>
  );
}