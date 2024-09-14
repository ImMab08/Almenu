import React, { useState } from "react";
import useModalStore from "@/hooks/storeOpenModals";
import { useRouter } from "next/navigation";

export default function ModalRegistro() {
  const { closeModal } = useModalStore();
  const router = useRouter();

  // función para cerrar el modal y redirigir al usuario.
  const handleCloseModal = () => {
    closeModal();
    router.push("/login");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-primary p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-title text-xl font-bold mb-2">Registro Exitoso</h2>
        <p className="text-subtitle mb-10">¡Tu registro se completó con éxito!</p>
        <button
          onClick={handleCloseModal}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
