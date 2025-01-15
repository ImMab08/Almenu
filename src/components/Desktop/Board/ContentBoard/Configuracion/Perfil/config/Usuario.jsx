import { useState } from "react";

import useModalStore from "@/hooks/storeOpenModals";
import UpdateUsuario from "@/components/Modals/Usuario/updateUsuario";
import { useFetch } from "@/hooks/useFetch";

export default function Usuario() {
  const { modals, openModal } = useModalStore();
  const { data: usuario, setData } = useFetch("/v01/usuario/settings");

  // Estado para alamacenar la info del usuario
  const [ selectedUsuario, setSelecteUsuario ] = useState(null);

  // función para editar información del usuario.
  const handleOpenModalEdit = (usuario) => {
    setSelecteUsuario(usuario);
    openModal("EditarUsuario");
  }
  
  return (
    <div className="w-full border-border border-[1px] h-full bg-primary rounded-lg px-4 py-6 flex flex-col">
      <h1 className="text-title text-lg font-semibold border-b border-border pb-2 mb-3">Información del perfil</h1>

      <div className="space-y-4">

        <div className="flex flex-col">
          <h2 className="text-base font-medium text-title">Nombre Completo</h2>
          <div className="flex space-x-1 border-border">
            <p className="text-sm text-subtitle">{usuario?.nombre}</p>
            <p className="text-sm text-subtitle">{usuario?.apellido}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="text-base font-medium text-title">Correo Eléctronico</h2>
          <p className="text-sm text-subtitle border-border">{usuario?.email}</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-base font-medium text-title">Celular</h2>
          <p className="text-sm text-subtitle border-border">{usuario?.celular}</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-base font-medium text-title">Plan</h2>
          <p className="text-sm text-subtitle border-border">{usuario?.plan}</p>
        </div>

      </div>    

      <div className="w-full h-full flex justify-end items-end gap-3">
        <button className="flex flex-col bg-bg hover:bg-bg/80 px-4 py-2 rounded-md cursor-pointer" onClick={() => handleOpenModalEdit(usuario)}>
          <p className="text-sm text-center font-semibold text-white ">Editar</p>
        </button>
        {modals.EditarUsuario && (<UpdateUsuario usuario={selectedUsuario} setData={setData} />)}
      </div>
    </div>
  );
}