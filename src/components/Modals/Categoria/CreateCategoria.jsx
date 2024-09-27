import React, { useState } from "react";
import useModalStore from "@/hooks/storeOpenModals";
import useCategoriaApi from "@/api/Conections/CategoriaApi";


export default function CreateCategoria({ addCategoriaList }) {
  const { closeModal } = useModalStore();
  const { createCategoria } = useCategoriaApi();

  // Estado para el formulario
  const [ nombre, setNombre ] = useState("");
  const [ descripcion, setDescripcion ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Creamos un array de los parametros que recibe los datos del usario
    // para luego enviarlos a la API.
    const newCategoria = {
      nombre,
      descripcion
    }

    try {
      // Guardamos el awai en una constante para luego pasarselo a nuestra prop con
      // el fin de actualizar el estado sin recargar.
      const createdCategoria = await createCategoria(newCategoria);
      // Llamamos a nuestra prop para actualizar el estado sin recargar.
      addCategoriaList(createdCategoria);
      // Cerramos el modal después de guardar y settear los estados.
      closeModal();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex items-center justify-center">
      <div className="rounded-lg bg-secondary">
        <div className="flex flex-col space-y-1.5 p-5">
          <h3 className="text-xl font-semibold text-center">Añade una nueva categoría</h3>
        </div>

        <div className="px-6">
          <div className="w-full h-[250px] overflow-auto">
            <form onSubmit={handleSubmit} className="p-2 space-y-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  className="flex border px-3 py-2 text-sm text-title bg-primary w-[300px] rounded-lg"
                  placeholder="Añade un nombre a la categoría"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                  id="descripcion"
                  className="flex border px-3 py-2 text-sm text-title bg-primary w-[300px] rounded-lg"
                  placeholder="Añade una descripción corta"
                  rows="4"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  required
                />
              </div>

              {error && <p className="text-red-500 text-center">{error}</p>}
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 relative space-x-10">
          <button onClick={closeModal} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-red-500 hover:bg-red-500/80 rounded-md px-3 gap-1">Cancelar</button>
          <button onClick={handleSubmit} disabled={loading} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-4 gap-1">
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </div>
      </div>
    </div>
  );
}