import { useState } from "react";

import { editar } from "@/utils/editar";
import useModalStore from "@/hooks/storeOpenModals";

export default function UpdateUsuario({ usuario, setData }) {
  const { closeModal } = useModalStore();

  // Estados locales para actualizar los datso del usuario.
  const [ nombre, setNombre ] = useState(usuario.nombre);
  const [ apellido, setApellido ] = useState(usuario.apellido);
  const [ email, setEmail ] = useState(usuario.email);
  const [ celular, setCelular ] = useState(usuario.celular);
  const [ error, setError ] = useState("");

  // Función para manejar la edición del usuario.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!nombre) {
      setError("El campo nombre es requerido.");
      return;
    } else if (!apellido) {
      setError("El campo apellido es requerido.");
      return;
    } else if (!email) {
      setError("El campo email es requerido.");
      return;
    } else if (!celular) {
      setError("El campo celular es requerido.");
      return;
    }

    await editar(`/v01/usuario/update/${usuario.id_usuario}`, {nombre, apellido, email, celular});
    setData((prev) => 
      prev.map((item) => item.id === usuario.id ? { nombre, apellido, email, celular } : item)
    );

    closeModal();
  };

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex items-center justify-center">
      <div className="rounded-lg bg-secondary">
        <div className="flex flex-col p-5 justify -center items-center">
          <h3 className="text-2xl text-title font-semibold text-center">Actualiza tu información</h3>
        </div>

        <div className="p-5">
          <div className="w-full h-auto">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">

              <div className="flex flex-col">
                <label className="text-title text-semibold" htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  className="flex h-10 border px-3 py-2 text-sm w-[300px] rounded-lg text-primary"
                  placeholder="Añade un nombre a la categoría"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              {error.nombre && <p className=" text-red-500 text-sm">{error.nombre}</p>}

              <div className="flex flex-col">
                <label className="text-title text-semibold" htmlFor="apellido">Apellido</label>
                <input
                  id="apellido"
                  className="flex h-10 border px-3 py-2 text-sm w-[300px] rounded-lg text-primary"
                  placeholder="Añade un nombre a la categoría"
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-title text-semibold" htmlFor="email">Correo Eléctronico</label>
                <input
                  id="email"
                  className="flex h-10 border px-3 py-2 text-sm w-[300px] rounded-lg text-primary"
                  placeholder="Añade un nombre a la categoría"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-title text-semibold" htmlFor="celular">Celular</label>
                <input
                  id="celular"
                  className="flex h-10 border px-3 py-2 text-sm w-[300px] rounded-lg text-primary"
                  placeholder="Añade un nombre a la categoría"
                  type="text"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                  required
                />
              </div>
            </form>
            
          </div>
        </div>
        <div className="flex items-center justify-center p-4 relative space-x-5">
          <button onClick={() => closeModal("EditarCategoria")} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-red-500 hover:bg-red-500/80 rounded-md px-3 gap-1">Cancelar</button>
          <button onClick={handleSubmit} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-4 gap-1">Actualizar</button>
        </div>
      </div>
    </div>
  );
}