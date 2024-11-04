import React, { useState } from "react";

import { editar } from "@/utils/editar";
import { useFetch } from "@/hooks/useFetch";
import useModalStore from "@/hooks/storeOpenModals";

export default function UpdateSubcategoria({ subcategoria, setData }) {
  const { closeModal } = useModalStore();

  // Estados locales para actualizar los datos de la subcategoria seleccionada.
  const [ nombre, setNombre ] = useState(subcategoria.nombre);
  const [ descripcion, setDescripcion ] = useState(subcategoria.descripcion);
  const [ id_categoria, setId_Categoria ] = useState(subcategoria.id_categoria);

  // Estado para manejar errores.
  const [ errorNombre, setErrorNombre ] = useState("");
  const [ errorCategoria, setErrorCategoria ] = useState("");

  const { data: categorias } = useFetch(`/v01/categoria/usuario`);

  // Función para manejar la edicción de la subcategoria.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorCategoria("");
    setErrorNombre("");

    // Validación de campos
    if (!id_categoria) {
      setErrorCategoria("Debes de seleccionar una categoría.");
      return;
    } 
    if (!nombre) {
      setErrorNombre("Debes de asignar un nombre.");
      return;
    }  

    await editar(`/v01/subcategoria/update/${subcategoria.id_subcategoria}`, { nombre, descripcion, id_categoria });
    setData((prev) =>
      prev.map((item) => item.id_subcategoria === subcategoria.id_subcategoria ? { nombre, descripcion, id_categoria, nombreCategoria: categorias.find((categoria) => categoria.id === Number(id_categoria))?.nombre } : item)
    );

    closeModal();
  };

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex items-center justify-center">
      <div className="rounded-lg bg-secondary">
        <div className="flex flex-col space-y-1.5 p-5">
          <h3 className="text-xl font-semibold text-center">Actualizar Categoria</h3>
        </div>

        <div className="px-6">
          <div className="w-full h-auto overflow-auto">
            <form action="" className="p-2 space-y-4">
              <div className="flex flex-col space-y-1.5">
                <label className="" htmlFor="categoria">Categoria</label>
                <select className="py-2 px-3 bg-primary rounded-lg focus:outline-none" name="categoria" id="categoria" value={id_categoria} onChange={(e) => setId_Categoria(e.target.value)}>
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
                  required
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Añade un nombre a la categoría"
                  className="flex px-3 py-2 text-sm text-title bg-primary w-[300px] rounded-lg focus:outline-none"
                />

                {errorNombre && <p className="text-red-500 text-sm">{errorNombre}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="">Descripción</label>
                <textarea
                  required
                  rows="4"
                  cols="50"
                  value={descripcion}
                  placeholder="Añade una descrión corta"
                  onChange={(e) => setDescripcion(e.target.value)}
                  className="flex px-3 py-2 text-sm text-title bg-primary w-[300px] rounded-lg focus:outline-none"
                />
              </div>
              </form>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 relative space-x-10">
          <button onClick={closeModal} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-red-500 hover:bg-red-500/80 rounded-md px-3">Cancelar</button>
          <button onClick={handleSubmit} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-4">Actualizar</button>
        </div>
      </div>
    </div>
  );
}