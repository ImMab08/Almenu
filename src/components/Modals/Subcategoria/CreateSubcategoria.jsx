import React, { useState } from "react";

import { crear } from "@/utils/crear";
import { useFetch } from "@/hooks/useFetch";
import useModalStore from "@/hooks/storeOpenModals";

export default function CreateSubcategoria({ subcategoria, setData }) {
  const { closeModal } = useModalStore();

  // Estados para el formulario.
  const [ nombre, setNombre ] = useState("");
  const [ descripcion, setDescripcion ] = useState("");
  const [ idCategoria, setIdCategoria ] = useState("");

  // Estados para manejar errores.
  const [ errorNombre, setErrorNombre ] = useState("");
  const [ errorCategoria, setErrorCategoria ] = useState("");

  const { data: categorias } = useFetch('/v01/categoria/usuario');

  // Función para el envío del formulario.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorNombre("");
    setErrorCategoria("");

    // Validación de campos
    if (!idCategoria) {
      setErrorCategoria("Debes de seleccionar una categoría.");
      return;
    } 
    if (!nombre) {
      setErrorNombre("Debes de asignar un nombre.");
      return;
    }  

    const response = await crear('/v01/subcategoria/create', { nombre, descripcion, idCategoria })
    setData([
      ...subcategoria,
      {
        ...response,
        nombre,
        descripcion,
        idCategoria,
        nombreCategoria: categorias.find((categoria) => categoria.id === Number(idCategoria))?.nombre
      }
    ]);

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
                <select className="py-2 px-3 bg-primary rounded-lg focus:outline-none" name="categoria" id="categoria" value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)}>
                  <option className="py-2 px-4 bg-primary" value="">Selecciona una categoria</option>
                  {categorias.map((categoria) => (
                      <option className="py-2 px-4 bg-primary" key={categoria.id} value={categoria.id}>
                        {categoria?.nombre}
                      </option>
                  ))}
                </select>

                {errorCategoria && <p className="text-red-500 text-sm">{errorCategoria}</p>}
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="">Nombre</label>
                <input
                  className="flex px-3 py-2 text-sm bg-primary w-[300px] rounded-lg focus:outline-none"
                  placeholder="Añade un nombre a la categoría"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />

                {errorNombre && <p className="text-red-500 text-sm">{errorNombre}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="">Descripción</label>
                <textarea
                  className="flex px-3 py-2 text-sm bg-primary w-[300px] rounded-lg focus:outline-none"
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
