import React, { useState } from "react";
import useModalStore from "@/hooks/storeOpenModals";

import api from "@/api/api";
import { IconUpload } from "@/icons";

export default function UpdateRestaurante({ initialData }) {
  const { closeModal } = useModalStore();
  const [ formData, setFormData ] = useState({
    nombre: initialData?.nombre || "",
    ciudad: initialData?.ciudad || "",
    direccion: initialData?.direccion || "",
    logo: null,
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialData?.id) {
        // Si ya existe un restaurante, actualizamos (PUT)
        await api.put(`/v01/restaurante/update/${initialData.id}`, formData);
        console.log("Restaurante actualizado con éxito.");
      } else {
        // Si no existe, creamos uno nuevo (POST)
        const response = await api.post("/v01/restaurante/create", formData);
        console.log("Restaurante creado con éxito:", response.data);
      }
      closeModal();
    } catch (error) {
      console.error("Error guardando la información del restaurante:", error);
    }
  }

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex items-center justify-center">
      <div className=" w-[40%] border-border border-[1px] h-auto bg-primary rounded-lg p-8 flex flex-col">
        <h1 className="text-title text-lg font-semibold border-b border-border pb-3">Información del Restaurante</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 my-3">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-subtitle">Nombre del restaurante <span className="text-red-500">*</span></label>
              <input
                className="mt-1 border-title border-[1.5px] full h-[40px] p-4 rounded-md"
                type="text"
                name="nombre"
                value={formData.nombre}
                placeholder="Nombre del restaurante"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-subtitle">Ciudad <span className="text-red-500">*</span></label>
              <input
                className="mt-1 border-title border-[1.5px] full h-[40px] p-4 rounded-md"
                type="text"
                name="ciudad"
                value={formData.ciudad}
                placeholder="Ciudad"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-subtitle">Dirección <span className="text-red-500">*</span></label>
              <input
                className="mt-1 border-title border-[1.5px] full h-[40px] p-4 rounded-md"
                type="text"
                name="direccion"
                value={formData.direccion}
                placeholder="Dirección del restaurante"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="w-full h-full flex flex-col">
            <div className="w-auto h-full pt-2">
              <p className="text-sm font-medium text-title">Logo</p>
              <div className="w-[120px] h-[120px] mt-1 flex flex-col items-center justify-center rounded-xl bg-secondary border cursor-pointer">
                <IconUpload />
                <p className="text-sm font-medium text-title">Cargar logo</p>
              </div>
            </div>

            <div className="w-full h-full flex items-center justify-center gap-3 mt-10">
              <button onClick={closeModal} className="flex flex-col bg-red-500 hover:bg-red-500/80 px-4 py-2 rounded-md cursor-pointer">
                <p className="text-sm text-center font-semibold text-white">Cancelar</p>
              </button>
              <button type="submit" className="flex flex-col bg-green-500 hover:bg-green-500/80 px-4 py-2 rounded-md cursor-pointer">
                <p className="text-sm text-center font-semibold text-white">
                  {initialData?.id ? 'Actualizar' : 'Guardar'}
                </p>
              </button>
            </div>
          </div>

        </form>


      </div>
    </div>
  );
}
