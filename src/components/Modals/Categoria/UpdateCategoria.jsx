import React, { useState, useEffect } from "react";
import useModalStore from "@/hooks/storeOpenModals";
import api from "@/api/api";

export default function UpdateCategoria() {
  const { closeModal, modals } = useModalStore();
  const categoria = modals.EditarCategoria; // Obtener la categoría del modal

  // Estado para el formulario
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Inicializa el estado con los datos de la categoría cuando el componente se monta
  useEffect(() => {
    if (categoria) {
      setNombre(categoria.nombre);
      setDescripcion(categoria.descripcion);
    }
  }, [categoria]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de la página

    setLoading(true);
    setError(null);

    try {
      await api.put(`v01/categoria/update`, { id: categoria.id, nombre, descripcion });
      // Cierra el modal después de actualizar
      closeModal("EditarCategoria");
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
          <h3 className="text-xl font-semibold text-center">Actualizar Categoria</h3>
        </div>

        <div className="px-6">
          <div className="w-full h-[250px] overflow-auto">
            <form onSubmit={handleSubmit} className="p-2 space-y-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  className="flex h-10 border px-3 py-2 text-sm bg-transparent w-[300px] rounded-lg"
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
                  className="flex border px-3 py-2 text-sm bg-transparent w-[300px] rounded-lg"
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
          <button onClick={() => closeModal("EditarCategoria")} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-red-500 hover:bg-red-500/80 rounded-md px-3 gap-1">Cancelar</button>
          <button onClick={handleSubmit} disabled={loading} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-4 gap-1">
            {loading ? "Actualizando..." : "Actualizar"}
          </button>
        </div>
      </div>
    </div>
  );
}




// const [ formData, setFormData ] = useState({
//   nombre: initialData?.nombre || "",
//   descripcion: initialData?.descripcion || "",
// });

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({
//     ...formData,
//     [name]: value,
//   });
// };

// const handleSubmit = async (e) => {
//   e.prevenDefault()
//   try {
    
//   } catch
// }