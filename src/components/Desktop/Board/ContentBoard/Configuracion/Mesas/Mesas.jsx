"use client";
import React, { useState } from "react";

import { useFetch } from "@/hooks/useFetch";
import { crear } from "@/utils/crear";
import { eliminar } from "@/utils/eliminar";

import { selectMesa } from "./config";
import useLoading from "@/hooks/useLoading";

import { IconTableTwo, IconTableFour, IconTableSix, IconTableHeight, IconArrowDown, IconPapelera } from "@/icons";

export function Mesas() {
  const loading = useLoading();
  const { data: mesas, setData: setMesas } = useFetch("/v01/mesa/usuario");

  const [isEdited, setIsEdited] = useState(false);
  const [mesasBackup, setMesasBackup] = useState([]);
  const [openConfig, setOpenConfig] = useState(false);
  const [hoveredMesa, setHoveredMesa] = useState(null);
  const [mensaje, setMensaje] = useState("");

  // Manejo del modo de edición
  const handleEdited = () => {
    if (!isEdited) {
      setMesasBackup(mesas); // Realiza el backup antes de editar
    }
    setIsEdited(!isEdited); // Cambia el modo de edición
  };

  // Restaurar las mesas si se cancela la edición
  const handleCancel = () => {
    setMesas(mesasBackup); // Restaurar las mesas desde el backup
    setIsEdited(false); // Salir del modo de edición
  };

  const max = 50;
  const addMesas = (capacidad) => {
    if (mesas.length < max) {
      const newMesa = {
        numeroMesa: mesas.length + 1,
        capacidad: capacidad,
      };
      setMesas([...mesas, newMesa]);
    } else {
      setMensaje("Haz alcanzado el limite máximo de mesas");
      setTimeout(() => {
        setMensaje("");
      }, 3000)
    }
  };

  // Función para crear una mesa.
  const handledCreateMesa = async () => {
    await crear('/v01/mesa/create', mesas);
    setIsEdited(false);
  };

  // Función para eliminar una mesa.
  const handledDeleteMesa = async (id) => {
    await eliminar(`/v01/mesa/delete/${id}`)
    setMesas((prev) => 
      prev.filter((item) => item.id !== id)
    );
  };

  const renderIcono = (capacidad) => {
    switch (capacidad) {
      case 2:
        return <IconTableTwo />;
      case 4:
        return <IconTableFour />;
      case 6:
        return <IconTableSix />;
      case 8:
        return <IconTableHeight />;
      default:
        return null;
    }
  };

  const Mesa = ({ mesa }) => {
    return (
      <div
        onMouseEnter={() => setHoveredMesa(mesa.id)}
        onMouseLeave={() => setHoveredMesa(null)}
        className="relative w-[100px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg"
      >
        <p>Mesa {mesa.numeroMesa}</p>
        {renderIcono(mesa.capacidad)}
        {isEdited && hoveredMesa === mesa.id && (
          <div className="absolute top-0 cursor-pointer bg-red-700 w-full h-full rounded-lg flex items-center justify-center bg-opacity-90" onClick={() => handledDeleteMesa(mesa.id)}>
            <IconPapelera className="w-6 h-6" />
          </div>
        )}
      </div>
    );
  };

  if (loading)
    return (
      <div className="w-full h-[72px] p-5 bg-primary rounded-lg space-y-5 animate-pulse"></div>
    );

  const handleSubmit = () => {
    setOpenConfig(!openConfig);
  };

  return (
    <section className="w-full h-auto p-4 md:p-5 space-y-5 bg-primary rounded-lg">
      <div className="flex cursor-pointer" onClick={handleSubmit}>
        <h1 className="flex-1 text-base md:text-lg text-title font-semibold">Configuración de Mesas</h1>
        <div className={`cursor-pointer transform transition-transform duration-300 ${openConfig ? "rotate-0" : "-rotate-180" }`} onClick={handleSubmit}>
          <IconArrowDown width={28} height={28} />
        </div>
      </div>

      {openConfig && (
        <div className="flex w-full">
          <div className="w-[86%] h-[600px] rounded-lg p-4 border justify-center grid grid-cols-10 grid-rows-5 border-border bg-tertiary ">
            {mesas.map((mesa) => (
              <Mesa key={mesa.id} mesa={mesa} />
            ))}
          </div>

          <div className="w-[14%] flex flex-col justify-between ml-3 space-y-5">
            <div className={`w-auto h-full flex flex-col items-center justify-center border border-border bg-tertiary rounded-lg p-2 overflow-auto space-y-5 ${ isEdited ? "" : "pointer-events-none cursor-not-allowed" }`}>
              {selectMesa.map((mesa) => (
                <div key={mesa.title} className={`px-6 py-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer ${ isEdited ? "" : "opacity-30"}`} onClick={() => addMesas(mesa.capacidad)}>
                  <p>{mesa.title}</p>
                  {mesa.icon}
                </div>
              ))}
            </div>
            <button className={`w-auto flex justify-center bg-bg hover:bg-bg/80 text-title font-semibold text-center py-1 rounded-md ${ isEdited ? "hidden" : "block" }`} onClick={handleEdited}>Editar</button>
            {isEdited && (
              <div className="flex space-x-2 justify-center items-center">
                <button className="flex bg-red-500 text-md hover:bg-red-500/80 text-title font-semibold px-2 py-1 rounded-md" onClick={handleCancel}>Cancelar</button>
                <button className="flex bg-green-500 text-md hover:bg-green-500/80 text-title font-semibold px-2 py-1 rounded-md" onClick={handledCreateMesa}>Guardar</button>
              </div>
            )}
          </div>
        </div>
      )}

      {mensaje && 
        <div className="fixed bottom-8 left-[38%] z-50 bg-secondary px-5 py-2 rounded-lg">
          <p className="text-yellow-500 font-semibold">{mensaje}</p>
        </div>
      }
    </section>
  );
}
