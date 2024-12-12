import React, { useState } from "react";

import { Colaborator } from "./config";

import { crear } from "@/utils/crear";
import { useFetch } from "@/hooks/useFetch";
import useLoading from "@/hooks/useLoading";
import useModalStore from "@/hooks/storeOpenModals";

import UpdateColaboradores from "@/components/Modals/Colaboradores/UpdateColaboradores";
import DeleteColaboradores from "@/components/Modals/Colaboradores/DeleteColaboradores";

import { IconArrowDown, IconPapelera, IconPencil, IconSearch, IconViewMoreUp } from "@/icons";

export function Empleados() {
  const loading = useLoading();
  const { modals, openModal } = useModalStore();
  const [ openConfig, setOpenConfig ] = useState();
  const [ openViewColaborador, setOpenViewColaborador ] = useState();
  const [ selectedColaborador, setSelectedColaborador ] = useState(null);

  const { data: colaboradores, setData: setColaborador } = useFetch("/v01/colaborador/colaboradores");

  // Función para editar un producto
  const handleOpenModalEdit = (colaborador) => {
    setSelectedColaborador(colaborador);
    openModal("EditarColaborador");
  };

  // Función para eliminar un producto.
  const handleOpenModalDelete = (colaborador) => {
    setSelectedColaborador(colaborador);
    openModal("EliminarColaborador");
  };

  const [ formData, setFormData ] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    email: "",
    cargo: "",
    salario: "",
  });

  const handleInputChange  = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await crear("/v01/colaborador/create", formData);
    setFormData({ 
      nombre: "",
      apellido: "",
      celular: "",
      email: "",
      cargo: "",
      salario: "",
    });
    setColaborador([
      ...colaboradores,
      response
    ])

  };

  const handleToggleConfig = () => {
    setOpenConfig(!openConfig);
  };

  // Función para manejar la apertura y cierra de la info del colaborador por su ID.
  const handleOpenColaborador = (id) => {
    if (openViewColaborador === id) {
      setOpenViewColaborador(null); // contraer
    } else {
      setOpenViewColaborador(id); // expandir
    }
  }

  if (loading) return (
    <div className="w-full h-[72px] p-5 bg-primary rounded-lg space-y-5 animate-pulse">
    </div>
  )

  const formColaborador = Colaborator.map(({title, required, placeHolder, name}) => {
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
          className={`mt-1 border-border border-[1.5px] full h-[40px] p-4 rounded-md bg-transparent text-title`}
        />
      </div>
    );
  })

  return (
    <section className="w-full h-auto p-5 bg-primary rounded-lg space-y-5">
      <div className="flex cursor-pointer" onClick={handleToggleConfig}>
        <h1 className="flex-1 text-xl text-title font-semibold">Configuración de Colaboradores</h1>
        <div className={`cursor-pointer transform transition-transform duration-300 ${openConfig ? 'rotate-0' : '-rotate-180'}`} onClick={handleToggleConfig}>
          <IconArrowDown width={28} height={28} />
        </div>
      </div>

      {openConfig &&
        <div className="w-full h-full flex">
          <div className="w-[60%] h-full flex flex-col rounded-lg p-4 border border-border">

            <form onSubmit={handleSubmit} action="">
              <div className="grid grid-cols-2 gap-5">{formColaborador}</div>

              <div className="w-full h-full flex justify-end items-end mt-32">
                <button className="flex flex-col bg-green-500 hover:bg-green-500/80 px-4 py-2 rounded-md cursor-pointer">
                  <p className="text-sm text-center font-semibold text-white">Guardar</p>
                </button>
              </div>
            </form>
          </div>
      
          <div className="w-[40%] h-[430px] flex flex-col flex-1 items-center border border-border rounded-lg p-2 ml-3 overflow-auto space-y-2">
            <div className="relative w-full ml-auto flex-1 md:grow-0 bg-secondary rounded-lg">
              <div className="absolute left-2 top-2">
                <IconSearch width={24} height={24} />
              </div>
              <input className=" w-full outline-none focus:border-none bg-transparent flex text-title h-10 px-3 py-2 text-sm pl-10" placeholder="Busca un colaborador" type="search"/>
            </div>

            <div className="w-full h-full space-y-2 overflow-auto">

              {colaboradores?.length > 0 ? (
                colaboradores.map((colaborador) => (
                  <div key={colaborador?.id} className="w-full p-2 bg-tertiary  rounded-md">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <div className="flex space-x-1">
                          <p className="text-base font-semibold text-title">{colaborador?.nombre}</p>
                          <p className="text-base font-semibold text-title">{colaborador?.apellido}</p>
                        </div>
                        <p className="text-sm text-subtitle">{colaborador?.cargo}</p>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex flex-col bg-bg hover:bg-bg/80 px-2 py-2 rounded-md cursor-pointer" onClick={() => handleOpenModalEdit(colaborador)}>
                          <IconPencil />
                        </button>
                        <button className="flex flex-col bg-red-500 hover:bg-red-500/80 px-2 py-2 rounded-md cursor-pointer" onClick={() => handleOpenModalDelete(colaborador)}>
                          <IconPapelera />
                        </button>
                        <button className={`flex flex-col bg-green-500 hover:bg-green-500/80 px-1 py-1 rounded-md cursor-pointer `} onClick={() => handleOpenColaborador(colaborador.id)}>
                          <div className={`transform transition-transform duration-300 ${openViewColaborador === colaborador?.id ? 'rotate-0' : 'rotate-180'}`}>
                            <IconViewMoreUp width={24} height={24} />
                          </div>
                        </button>
                      </div>
                    </div>
                                
                    {openViewColaborador === colaborador?.id &&
                      <div className="flex flex-col mt-2 border-t border-border">
                        <div className="flex flex-col space-y-2 mt-2">
                            <div className="flex flex-col">
                              <h4 className="text-title text-sm">Correo eléctronico</h4>
                              <p className="text-subtitle text-xs">{colaborador?.email}</p>
                            </div>
                            <div className="flex flex-col">
                              <h4 className="text-title text-sm">Celular</h4>
                              <p className="text-subtitle text-xs">{colaborador?.celular}</p>
                            </div>
                            <div className="flex flex-col">
                              <h4 className="text-title text-sm">Salario</h4>
                              <p className="text-subtitle text-xs">$ {colaborador?.salario}</p>
                            </div>
                        </div>                 
                      </div>
                    }
                  </div>
                ))
              ) : (
                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-center text-title font-semibold">No has añadido colaboradores aún</p>
                </div>
              )}
            </div>
            
            {modals.EditarColaborador && <UpdateColaboradores colaborador={selectedColaborador} setColaborador={setColaborador} />}
            {modals.EliminarColaborador && <DeleteColaboradores colaborador={selectedColaborador} setColaborador={setColaborador} />}
          </div>
        </div>
      }
    </section>
  );
}
