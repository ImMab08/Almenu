import { useState } from "react";

import useModalStore from "@/hooks/storeOpenModals";
import useRestauranteApi from "@/api/Conections/RestauranteApi";
import UpdateRestaurante from "@/components/Modals/Restaurante/UpdateRestaurante";
import { IconUpload } from "@/icons/index";


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

        {modals.Restaurante && <UpdateRestaurante initialData={restaurante || null}/>}
      </div>
    </div>
  </div>
  );
}