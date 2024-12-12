import { useState } from "react";

import useModalStore from "@/hooks/storeOpenModals";
import useRestauranteApi from "@/api/Conections/RestauranteApi";
import UpdateRestaurante from "@/components/Modals/Restaurante/UpdateRestaurante";
import { IconUpload } from "@/icons";

export default function Restaurante() {
  const { restaurante } = useRestauranteApi();
  const { modals, openModal } = useModalStore();

  // Estado para alamacenar la info del usuario
  const [ selectedUsuario, setSelecteUsuario ] = useState(null);

  const handleOpenEditModal = (usuario) => {
    setSelecteUsuario(usuario);
    openModal("EditarUsuario");
  }
  
  return (
    <div className="w-full border-border border-[1px] h-auto bg-primary rounded-lg px-3 py-4 flex flex-col">
    <h1 className="text-title text-base font-semibold border-b border-border pb-2">Información del Restaurante</h1>

    <div className="flex flex-col space-y-4 mt-4">
      <div className="flex flex-col">
        <h2 className="text-sm font-medium text-title">Nombre del restaurante</h2>
        <p className="mt-1 text-sm text-subtitle border-border border-b-2 full">
          {restaurante?.nombre ? restaurante.nombre : "¡Añade el nombre del restaurante!"}
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-sm font-medium text-title">Ciudad</h2>
        <p className="mt-1 text-sm text-subtitle border-border border-b-2 full">
          {restaurante?.ciudad ? restaurante.ciudad : "¡Añade la ciudad del restaurante!"}
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-sm font-medium text-title">Dirección</h2>
        <p className="mt-1 text-sm text-subtitle border-border border-b-2 full">
          {restaurante?.direccion ? restaurante.direccion : "¡Añade la dirección del restaurante!"}
        </p>
      </div>
    </div>    

    <div className="w-full h-full flex justify-center mt-4">
      <button className="flex flex-col bg-bg hover:bg-bg/80 px-4 py-2 rounded-md cursor-pointer" onClick={() => openModal("Restaurante")}>
        <p className="text-sm text-center font-semibold text-white">Editar</p>
      </button>

      {modals.Restaurante && <UpdateRestaurante initialData={restaurante || null}/>}
    </div>
  </div>
  );
}