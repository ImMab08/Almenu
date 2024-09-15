import React, { useState } from "react";
import { Colaborator } from "@/components/Desktop/Board/ContentBoard/Configuracion/Empleados/config";
import useModalStore from "@/hooks/storeOpenModals";
import useColaboradoresApi from "@/components/Desktop/Board/ContentBoard/Configuracion/Empleados/config/ApiColaboradores";

export default function UpdateColaboradores({ colaborador }) {
  const { closeModal } = useModalStore();
  const { updateColaborador } = useColaboradoresApi();

  // Función para formatear el salario con puntos y el símbolo $
  const formatCurrency = (value) => {
    // Remueve cualquier carácter que no sea número
    let numericValue = value.replace(/\D/g, "");

    // Agrega puntos como separadores de miles
    numericValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Agrega el símbolo $ al inicio
    return `$${numericValue}`;
  };


  // Treare los datos del usuario seleccionado
  const [ formData, setFormData ] = useState({
    nombres: colaborador.nombres,
    apellidos: colaborador.apellidos,
    celular: colaborador.celular,
    email: colaborador.email,
    cargo: colaborador.cargo,
    salario: colaborador.salario,
  });

  const handleInputChange  = (e) => {
    const { name, value } = e.target;

    // Formatear salario
    let formattedValue = value;
    if (name === "salario") {
      formattedValue = formatCurrency(value);
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e)

    const cleanedFormData = {
      ...formData,
      salario: formData.salario.replace(/[.$]/g, "").replace("$", ""), // Remueve puntos y símbolo $
    };

    try {
      if (colaborador) {
        await updateColaborador(colaborador.id, cleanedFormData);
      }
    } catch(error) {
      console.log(error);
    }
    closeModal()
  };

  const formColaborador = Colaborator.map(
    ({ title, required, placeHolder, name }) => {
      return (
        <div key={title} className="flex flex-col">
          <label className="text-sm font-semibold text-title">
            {title} <span className="text-red-500">{required}</span>
          </label>
          <input
            className={`mt-1 border-border border-[1.5px] full w-[250px] h-[40px] p-4 rounded-md bg-transparent text-title`}
            type="text"
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            placeholder={placeHolder}
            required
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
