import { useState } from "react";
import useUsuarioApi from "@/api/Conections/UsuarioApi";
import useModalStore from "@/hooks/storeOpenModals";

export default function UpdateUsuario({ usuario }) {
  const { closeModal } = useModalStore();
  const { updateUsuario } = useUsuarioApi();

  // Estados locales para actualizar los datso del usuario.
  const [ nombre, setNombre ] = useState(usuario.nombre);
  const [ apellido, setApellido ] = useState(usuario.apellido);
  const [ email, setEmail ] = useState(usuario.email);
  const [ celular, setCelular ] = useState(usuario.celular);

  // Función para manejar la edición del usuario.
  const handleSubmit = async (e) => {
    try {
      if (usuario && usuario.id_usuario) {
        await updateUsuario(usuario.id_usuario, { nombre,  apellido, email, celular });
      } else {
        console.log("El ID del usuario es indefinido");
      }
    } catch (error) {
      console.log("Error al actualizar la información del usuario.", error);
    }
    closeModal();
  }

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex items-center justify-center">
      <div className="rounded-lg bg-secondary">
        <div className="flex flex-col space-y-1.5 p-5 justify -center items-center">
          <h3 className="text-2xl text-title font-semibold text-center">Actualiza tu información</h3>
        </div>

        <div className="px-6">
          <div className="w-full h-auto mb-10">
            <form onSubmit={handleSubmit} className="p-2 grid grid-cols-2 gap-5">

              <div className="flex flex-col space-y-1.5">
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

              <div className="flex flex-col space-y-1.5">
                <label className="text-title text-semibold" htmlFor="nombre">Apellido</label>
                <input
                  id="nombre"
                  className="flex h-10 border px-3 py-2 text-sm w-[300px] rounded-lg text-primary"
                  placeholder="Añade un nombre a la categoría"
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-title text-semibold" htmlFor="nombre">Celular</label>
                <input
                  id="nombre"
                  className="flex h-10 border px-3 py-2 text-sm w-[300px] rounded-lg text-primary"
                  placeholder="Añade un nombre a la categoría"
                  type="text"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-title text-semibold" htmlFor="nombre">Correo Eléctronico</label>
                <input
                  id="nombre"
                  className="flex h-10 border px-3 py-2 text-sm w-[300px] rounded-lg text-primary"
                  placeholder="Añade un nombre a la categoría"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 relative space-x-5">
          <button onClick={() => closeModal("EditarCategoria")} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-red-500 hover:bg-red-500/80 rounded-md px-3 gap-1">Cancelar</button>
          <button onClick={handleSubmit} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-4 gap-1">
            Actualizar
          </button>
        </div>
      </div>
    </div>
  );
}