"use client";
import React, { useState, useEffect } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { IconTableTwo, IconTableFour, IconTableSix, IconTableHeight, IconArrowDown, IconPapelera } from "../../icons";
import useLoading from "@/hooks/useLoading";
import useMesaApi from "@/api/Conections/MesaApi";

export function Mesas() {
  const loading = useLoading();
  const { mesas, setMesas, fetchMesas, createMesa, deleteMesa, updateMesa, updateMultipleMesas } = useMesaApi();
  const [ isEdited, setIsEdited ] = useState(false);
  const [ mesasBackup, setMesasBackup ] = useState([]);
  const [ openConfig, setOpenConfig ] = useState(false);
  const [ hoveredMesa, setHoveredMesa ] = useState(null);

  useEffect(() => {
    fetchMesas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  // Guardar los cambios al finalizar la edición
  const handleSave = async () => {
    await updateMultipleMesas(mesas);
    setMesasBackup(mesas);
    setIsEdited(false);
  };

  const max = 40;
  const addMesas = async (capacidad) => {
    if (mesas.length < max) {
      const newMesa = {
        numeroMesa: mesas.length + 1,
        capacidad: capacidad,
      };  
      try {
        const response = await createMesa(newMesa);
        if (response) {
          setMesas([...mesas, response.data]);
        } else {
          throw new Error("La respuesta del servidor es undefined");
        }
      } catch (error) {
        console.error("Error al crear la mesa:", error.response ? error.response.data : error.message);
      }
    } else {
      alert("Has alcanzado el límite de mesas.");
    }
  };

  const moveMesa = async (dragIndex, hoverIndex) => {
    const draggeMesa = mesas[dragIndex];
    const updatedMesas = [...mesas];

    updatedMesas.splice(dragIndex, 1);
    updatedMesas.splice(hoverIndex, 0, draggeMesa);

    const reorderedMesas = updatedMesas.map((mesa, index) => ({
      ...mesa,
      numeroMesa: index + 1,
    }));

    setMesas(reorderedMesas);
    await updateMultipleMesas(reorderedMesas);
  };

  const handledDeleteMesa = async (id) => {
    try {
      await deleteMesa(id);
    } catch(error) {
      console.log(error);
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

  const Mesa = ({ mesa, index }) => {
    const [, ref] = useDrag({
      type: "mesa",
      item: { index },
    });

    const [, drop] = useDrop({
      accept: "mesa",
      hover: (item) => {
        if (item.index !== index) {
          moveMesa(item.index, index);
          item.index = index;
        }
      },
    });

    return (
      <div
        ref={(node) => ref(drop(node))}
        onMouseEnter={() => setHoveredMesa(mesa.id)}
        onMouseLeave={() => setHoveredMesa(null)}
        className={`relative w-[100px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg ${
          hoveredMesa === mesa.id ? "" : ""
        }`}
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
    return <div className="w-full h-[72px] p-5 bg-primary rounded-lg space-y-5 animate-pulse"></div>;

  const handleSubmit = () => {
    setOpenConfig(!openConfig);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <section className="w-full h-full p-5 bg-primary rounded-lg space-y-5" id="mesas">
        <div className="flex cursor-pointer" onClick={handleSubmit}>
          <h1 className="flex-1 text-xl text-title font-semibold">Configuración de Mesas</h1>
          <div className={`cursor-pointer transform transition-transform duration-300 ${openConfig ? "rotate-0" : "-rotate-180"}`} onClick={handleSubmit}>
            <IconArrowDown />
          </div>
        </div>

        {openConfig && (
          <>
            <div className="flex w-full justify-between">
              <button className="flex bg-bg hover:bg-bg/80 text-title font-semibold px-4 py-1 rounded-md" onClick={handleEdited}>
                {isEdited ? "Finalizar edición" : "Editar"}
              </button>
              {isEdited && (
                <div className="flex space-x-4">
                  <button className="flex bg-red-500 hover:bg-red-500/80 text-title font-semibold px-4 py-1 rounded-md" onClick={handleCancel}>
                    Cancelar
                  </button>
                  <button className="flex bg-green-500 hover:bg-green-500/80 text-title font-semibold px-4 py-1 rounded-md" onClick={handleSave}>
                    Guardar
                  </button>
                </div>
              )}
            </div>

            <div className="flex w-full">
              <div className="w-[86%] h-[500px] rounded-lg p-4 relative border border-border bg-tertiary flex flex-wrap space-x-3 space-y-3">
                {mesas.map((mesa, index) => (
                  <Mesa key={mesa.id} mesa={mesa} index={index} />
                ))}
              </div>

              <div className={`w-[14%] h-auto flex flex-col items-center justify-center border border-border bg-tertiary rounded-lg p-2 ml-3 overflow-auto space-y-5 ${isEdited ? "" : "pointer-events-none cursor-not-allowed"}`}>
                <div className="w-[120px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer" onClick={() => addMesas(2)}>
                  <p>Para 2</p>
                  <IconTableTwo />
                </div>

                <div className="w-[120px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer" onClick={() => addMesas(4)}>
                  <p>Para 4</p>
                  <IconTableFour />
                </div>

                <div className="w-[120px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer" onClick={() => addMesas(6)}>
                  <p>Para 6</p>
                  <IconTableSix />
                </div>

                <div className="w-[120px] h-[100px] p-2 flex flex-col items-center bg-slate-300 rounded-lg cursor-pointer" onClick={() => addMesas( 8)}>
                  <p>Para 8</p>
                  <IconTableHeight />
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </DndProvider>
  );
}
