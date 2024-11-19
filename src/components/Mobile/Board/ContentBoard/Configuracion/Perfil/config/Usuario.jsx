import useUsuarioApi from "@/api/Conections/UsuarioApi";
import UpdateUsuario from "@/components/Modals/Usuario/updateUsuario";
import useModalStore from "@/hooks/storeOpenModals";
import { useState } from "react";

export default function Usuario() {
  const { usuario } = useUsuarioApi();
  const { modals, openModal } = useModalStore();

  // Estado para alamacenar la info del usuario
  const [ selectedUsuario, setSelecteUsuario ] = useState(null);

  const handleOpenEditModal = (usuario) => {
    setSelecteUsuario(usuario);
    openModal("EditarUsuario");
  }
  
  return (
    <div className="w-full border-border border-[1px] h-full bg-primary rounded-lg px-4 py-6 flex flex-col">
      <h1 className="text-title text-lg font-semibold border-b border-border pb-3">Información del perfil</h1>

      <div className="flex flex-col space-y-4 mt-4">
        <div className="flex flex-col">
          <h2 className="text-sm font-medium text-title">Nombre Completo</h2>
          <div className="flex space-x-1 border-border border-b-2">
            <p className="mt-2 text-sm text-subtitle full">{usuario?.nombre}</p>
            <p className="mt-2 text-sm text-subtitle full">{usuario?.apellido}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm font-medium text-title">Correo Eléctronico</h2>
          <p className="mt-2 text-sm text-subtitle border-border border-b-2 full">{usuario?.email}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm font-medium text-title">Celular</h2>
          <p className="mt-2 text-sm text-subtitle border-border border-b-2 full">{usuario?.celular}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm font-medium text-title">Plan</h2>
          <p className="mt-2 text-sm text-subtitle border-border border-b-2 full">{usuario?.plan}</p>
        </div>
      </div>    
      <div className="w-full h-full flex justify-center mt-4">
        <button className="flex flex-col bg-bg hover:bg-bg/80 px-4 py-2 rounded-md cursor-pointer" onClick={() => handleOpenEditModal(usuario)}>
          <p className="text-sm text-center font-semibold text-white ">Editar</p>
        </button>
        {modals.EditarUsuario && <UpdateUsuario usuario={selectedUsuario}/>}
      </div>
    </div>
  );
}