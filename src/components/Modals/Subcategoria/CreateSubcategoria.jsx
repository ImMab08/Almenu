import React, { useState } from "react";
import useModalStore from "@/hooks/storeOpenModals";
import useSubcategoriaApi from "@/api/Conections/SubcategoriaApi";

export default function CreateSubcategoria() {
  const { closeModal } = useModalStore();
  const { createSubcategoria, categoria }  = useSubcategoriaApi();

  // Estados para el formulario.
  const [ nombre, setNombre ] = useState("");
  const [ descripcion, setDescripcion ] = useState("");
  const [ idCategoria, setIdCategoria ] = useState("");

  const handleSubmit = async (e) => {
    try {
      await createSubcategoria({ nombre, descripcion, idCategoria })
    } catch {
      console.error("Error al crear la subcategoria");
    }
    closeModal();
  }

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex items-center justify-center">
      <div className="rounded-lg bg-secondary">
        <div className="flex flex-col space-y-1.5 p-5">
          <h3 className="text-xl font-semibold text-center">Añade una nueva Subcategoría</h3>
        </div>

        <div className="px-6">
          <div className="w-full h-auto overflow-auto">
            <form action="" className="p-2 space-y-4">

              <div className="flex flex-col space-y-1.5">
                <label className="" htmlFor="categoria">Categoria</label>
                <select className="py-2 px-3 bg-primary rounded-lg " name="categoria" id="categoria" value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)}>
                  <option className="py-2 px-4 bg-primary" value="">Selecciona una categoria</option>
                  {categoria.map((categoria) => (
                      <option className="py-2 px-4 bg-primary" key={categoria.id} value={categoria.id}>
                        {categoria?.nombre}
                      </option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="">Nombre</label>
                <input
                  className="flex border px-3 py-2 text-sm text-title bg-primary w-[300px] rounded-lg"
                  placeholder="Añade un nombre a la categoría"
                  type="search"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="">Descripción</label>
                <textarea
                  className="flex border px-3 py-2 text-sm text-title bg-primary w-[300px] rounded-lg"
                  placeholder="Añade una descrión corta"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  required
                  rows="4"
                  cols="50"
                  type="search"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 relative space-x-10">
          <button onClick={closeModal} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-red-500 hover:bg-red-500/80 rounded-md px-3 gap-1">Cancelar</button>
          <button onClick={handleSubmit} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-4 gap-1">Añadir</button>
        </div>
      </div>
    </div>
  );
}
