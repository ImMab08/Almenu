import React, { useState } from "react";
import useModalStore from "@/hooks/storeOpenModals";
import api from "@/api/api";

export default function DeleteColaboradores() {
  const { closeModal } = useModalStore();

  // Estado para el formulario
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de la página

    setLoading(true);
    setError(null);

    try {
      await api.post("v01/categoria/create", { nombre, descripcion });
      // Cierra el modal después de guardar
      closeModal();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex items-center justify-center">
      <div className="rounded-lg bg-secondary w-[450px] ">
        <div className="flex flex-col space-y-4 p-5">
          <p className="text-xl text-center text-title">¿Estás seguro que deseas eliminar a <span className="font-semibold">Helados</span>?</p>
          <p className="text-xs font-semibold text-subtitle text-center">¡Al hacer esto perderas toda su información!</p>
        </div>

        <div className="flex items-center justify-center p-4 relative space-x-10">
          <button onClick={closeModal} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-red-500 hover:bg-red-500/80 rounded-md px-3 gap-1">Cancelar</button>
          <button onClick={handleSubmit} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-4 gap-1">Confirmar</button>
        </div>
      </div>
    </div>
  );
}