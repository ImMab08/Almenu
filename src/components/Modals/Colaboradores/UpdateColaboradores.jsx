import React, { useState } from "react";

import { editar } from "@/utils/editar";
import useModalStore from "@/hooks/storeOpenModals";

import { Colaborator } from "@/components/Desktop/Board/ContentBoard/Configuracion/Empleados/config";

export default function UpdateColaboradores({ colaborador, setColaborador }) {
  const { closeModal } = useModalStore();

  // Treare los datos del usuario seleccionado
  const [ formData, setFormData ] = useState({
    nombre: colaborador.nombre,
    apellido: colaborador.apellido,
    celular: colaborador.celular,
    email: colaborador.email,
    cargo: colaborador.cargo,
    salario: colaborador.salario,
  });

  const handleInputChange  = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e)

    const response = await editar(`/v01/colaborador/update/${colaborador.id}`, formData);
    console.log("datos: ",response.data)
    setColaborador((prev) => 
      prev.map((item) => item.id === colaborador.id ? formData : item)
    );

    closeModal();
  };

  const formColaborador = Colaborator.map(
    ({ title, required, placeHolder, name }) => {
      return (
        <div key={title} className="flex flex-col">
          <label className="text-sm font-semibold text-title">
            {title} <span className="text-red-500">{required}</span>
          </label>
          <input
            required
            type="text"
            name={name}
            placeholder={placeHolder}
            onChange={handleInputChange}
            value={formData[name] || ""}
            className={`mt-1 border-border border-[1.5px] full w-[250px] h-[40px] p-4 rounded-md bg-transparent text-title`}
          />
        </div>
      );
    }
  );

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex items-center justify-center">
      <div className="w-auto h-auto flex flex-col rounded-lg p-4 border border-border bg-primary space-y-10">
        <h2 className="text-title text-xl text-center font-semibold">Actualizar información</h2>
        <form  onSubmit={handleSubmit} action="">
          <div className="grid grid-cols-2 gap-5">{formColaborador}</div>

          <div className="w-full h-full flex justify-center items-center mt-10 space-x-4">
            <button className="flex flex-col bg-red-500 hover:bg-red-500/80 px-4 py-2 rounded-md cursor-pointer" onClick={() => closeModal()}>
              <p className="text-sm text-center font-semibold text-white">cancelar</p>
            </button>
            <button className="flex flex-col bg-green-500 hover:bg-green-500/80 px-4 py-2 rounded-md cursor-pointer" onClick={handleSubmit}>
              <p className="text-sm text-center font-semibold text-white">Guardar</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
