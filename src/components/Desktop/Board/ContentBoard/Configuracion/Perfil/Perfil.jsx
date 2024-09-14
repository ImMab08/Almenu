"use client";
import React, { useState } from "react";

import useEditStore from "@/hooks/storeEdit";
import useModalStore from "@/hooks/storeOpenModals";
import ModalInfoRestaurante from "@/components/Modals/ModalInfoRestaurante";

import { IconArrowDown, IconUpload } from "../../icons";
import UserInfoSettings from "./InfoUserSettings";
import InfoRestauranteSettings from "./InfoRestauranteSettings";

export function Perfil() {
  const [ openConfig, setOpenConfig ] = useState();
  const { modals, openModal } = useModalStore();
  const { setEditingSection } = useEditStore();

  const { usuarioInfo, loading, error } = UserInfoSettings();
  const { restaurante } = InfoRestauranteSettings();

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const handledSumit = () => {
    setOpenConfig(!openConfig)
  }

  const handleEditClick = (section) => {
    setEditingSection(section);
  };

  return (
    <section className="w-full h-auto bg-primary p-5 space-y-5 rounded-lg">
      <div className="flex cursor-pointer" onClick={handledSumit}>
        <h1 className="flex-1 text-xl text-title font-semibold">Configuración del Perfil</h1>
        <div className={`cursor-pointer transform transition-transform duration-300 ${openConfig ? 'rotate-0' : '-rotate-180'}`} onClick={handledSumit}>
          <IconArrowDown />
        </div>
      </div>

      {openConfig && 
        <div className="w-full h-[32rem] grid grid-cols-2 gap-5">
          <div className="w-full border-border border-[1px] h-auto bg-primary rounded-lg px-4 py-6 flex flex-col">
            <h1 className="text-title text-lg font-semibold border-b border-border pb-3">Información del Restaurante</h1>
      
            <div className="grid grid-cols-2 gap-5 my-3">
              <div className="flex flex-col">
                <h2 className="text-sm font-medium text-title">Nombre del restaurante</h2>
                <p className="mt-2 text-subtitle border-border border-b-2 full">
                  {restaurante?.nombre ? restaurante.nombre : "¡Añade el nombre del restaurante!"}
                </p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm font-medium text-title">Ciudad</h2>
                <p className="mt-2 text-subtitle border-border border-b-2 full">
                  {restaurante?.ciudad ? restaurante.ciudad : "¡Añade la ciudad del restaurante!"}
                </p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm font-medium text-title">Dirección</h2>
                <p className="mt-2 text-subtitle border-border border-b-2 full">
                  {restaurante?.direccion ? restaurante.direccion : "¡Añade la dirección del restaurante!"}
                </p>
              </div>
            </div>      
            <div className="w-full h-full flex flex-col">
              <div className="w-auto h-full pt-2">
                <p className="text-sm font-medium text-title">Logo </p>
                <div className="w-[120px] h-[120px] mt-1 flex flex-col items-center justify-center rounded-xl bg-secondary border">
                  <IconUpload />
                  <p className="text-sm font-medium text-title">Cargar logo</p>
                </div>
              </div>
      
              <div className="w-full h-full flex justify-end items-end gap-3">
                <button className="flex flex-col bg-bg hover:bg-bg/80 px-4 py-2 rounded-md cursor-pointer" onClick={() => openModal("Restaurante")}>
                  <p className="text-sm text-center font-semibold text-white">Editar</p>
                </button>

                {modals.Restaurante && <ModalInfoRestaurante initialData={restaurante || null}/>}
              </div>
            </div>
          </div>
      
          <div className="w-full border-border border-[1px] h-full bg-primary rounded-lg px-4 py-6 flex flex-col">
            <h1 className="text-title text-lg font-semibold border-b border-border pb-3">Información del perfil</h1>
      
            <div className="grid grid-cols-2 gap-5 my-3">
              <div className="flex flex-col">
                <h2 className="text-sm font-medium text-title">Nombre Completo</h2>
                <div className="flex space-x-1 border-border border-b-2">
                  <p className="mt-2 text-subtitle full">{usuarioInfo?.nombre}</p>
                  <p className="mt-2 text-subtitle full">{usuarioInfo?.apellido}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm font-medium text-title">Correo Eléctronico</h2>
                <p className="mt-2 text-subtitle border-border border-b-2 full">{usuarioInfo?.email}</p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm font-medium text-title">Celular</h2>
                <p className="mt-2 text-subtitle border-border border-b-2 full">{usuarioInfo?.celular}</p>
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm font-medium text-title">Plan</h2>
                <p className="mt-2 text-subtitle border-border border-b-2 full">{usuarioInfo?.plan}</p>
              </div>
            </div>    
            <div className="w-full h-full flex justify-end items-end gap-3">
              <button className="flex flex-col bg-bg hover:bg-bg/80 px-4 py-2 rounded-md cursor-pointer" onClick={() => handleEditClick("profile")}>
                <p className="text-sm text-center font-semibold text-white ">Editar</p>
              </button>
            </div>
          </div>
        </div>
      }
    </section>
  );
}
