"use client";
import React, { useState } from "react";

import { IconTableTwo, IconTableFour, IconTableSix, IconTableHeight, IconArrowDown, IconPapelera } from "../../icons";
import useLoading from "@/hooks/useLoading";
import useMesaApi from "@/api/Conections/MesaApi";

export function Mesas() {
  const loading = useLoading();
  const { mesas, setMesas, fetchMesas, createMesa, deleteMesa } = useMesaApi();
  const [isEdited, setIsEdited] = useState(false);
  const [mesasBackup, setMesasBackup] = useState([]);
  const [openConfig, setOpenConfig] = useState(false);
  const [hoveredMesa, setHoveredMesa] = useState(null);

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

  const max = 40;
  const addMesas = (capacidad) => {
    if (mesas.length < max) {
      const newMesa = {
        numeroMesa: mesas.length + 1,
        capacidad: capacidad,
      };
      setMesas([...mesas, newMesa]);
    } else {
      alert("Has alcanzado el límite de mesas.");
    }
  };

  const handledCreateMesa = () => {
    createMesa(mesas);
    setIsEdited(false);
  }

  const handledDeleteMesa = async (id) => {
    try {
      await deleteMesa(id);
    } catch (error) {
      console.error("Error al eliminar la mesa: ", error);
    }
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
          <div
            className="absolute top-0 cursor-pointer bg-red-700 w-full h-full rounded-lg flex items-center justify-center bg-opacity-90"
            onClick={() => handledDeleteMesa(mesa.id)}
          >
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
    <section
      className="w-full h-full p-5 bg-primary rounded-lg space-y-5"
      id="mesas"
    >
      <div className="flex cursor-pointer" onClick={handleSubmit}>
        <h1 className="flex-1 text-xl text-title font-semibold">Configuración de Mesas</h1>
        <div
          className={`cursor-pointer transform transition-transform duration-300 ${
            openConfig ? "rotate-0" : "-rotate-180"
          }`}
          onClick={handleSubmit}
        >
          <IconArrowDown />
        </div>
      </div>

      {openConfig && (
        <>
          <div className="flex w-full">
            <div className="w-[86%] h-[500px] rounded-lg p-4 border items-center justify-center grid grid-cols-10 grid-rows-4 border-border bg-tertiary ">
              {mesas.map((mesa) => (
                <Mesa key={mesa.id_mesa} mesa={mesa} />
              ))}
            </div>

            <div
              className={`w-[14%] h-auto flex flex-col items-center justify-center border border-border bg-tertiary rounded-lg p-2 ml-3 overflow-auto space-y-5 ${
                isEdited ? "" : "pointer-events-none cursor-not-allowed"
              }`}
            >
              <div
                className={`w-[120px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer ${
                  isEdited ? "" : "opacity-30"
                }`}
                onClick={() => addMesas(2)}
              >
                <p>Para 2</p>
                <IconTableTwo />
              </div>

              <div
                className={`w-[120px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer ${
                  isEdited ? "" : "opacity-30"
                }`}
                onClick={() => addMesas(4)}
              >
                <p>Para 4</p>
                <IconTableFour />
              </div>

              <div
                className={`w-[120px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer ${
                  isEdited ? "" : "opacity-30"
                }`}
                onClick={() => addMesas(6)}
              >
                <p>Para 6</p>
                <IconTableSix />
              </div>

              <div
                className={`w-[120px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer ${
                  isEdited ? "" : "opacity-30"
                }`}
                onClick={() => addMesas(8)}
              >
                <p>Para 8</p>
                <IconTableHeight />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-[86%]"></div>
            <div className="flex w-[14%] justify-end">
              <button
                className={`flex w-full bg-bg hover:bg-bg/80 text-title font-semibold px-[75px] py-1 rounded-md ${
                  isEdited ? "hidden" : "block"
                }`}
                onClick={handleEdited}
              >
                Editar
              </button>
              {isEdited && (
                <div className="flex space-x-2 justify-center items-center-">
                  <button
                    className="flex bg-red-500 text-md hover:bg-red-500/80 text-title font-semibold px-[10px] py-1 rounded-md"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </button>
                  <button
                    className="flex bg-green-500 text-md hover:bg-green-500/80 text-title font-semibold px-[10px] py-1 rounded-md"
                    onClick={handledCreateMesa}
                  >
                    Guardar
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}