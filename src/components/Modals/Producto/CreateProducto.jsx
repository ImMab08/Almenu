import React, { useState } from "react";

import { crear } from "@/utils/crear";
import { useFetch } from "@/hooks/useFetch";
import useModalStore from "@/hooks/storeOpenModals";

import { IconUpload } from "@/icons";

export default function CreateProducto({ productos, setData }) {
  const { closeModal } = useModalStore();

  // Estados para el formulario.
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState();
  const [cantidad, setCantidad] = useState();
  const [imagen, setImagen] = useState("");

  const [idCategoria, setIdCategoria] = useState();
  const [idSubcategoria, setIdSubcategoria] = useState();

  const [error, setError] = useState("");

  // Consumir la API.
  const { data: categorias } = useFetch( "/v01/categoria/usuario", "GET");
  const { data: subcategorias } = useFetch(`/v01/subcategoria/categoria/${idCategoria}`, "GET");

  // Función para mostrar las subcategorías dependiendo de la categoría.
  const handleInputChange = async (e) => {
    const selectedCategoria = e.target.value;
    setIdCategoria(selectedCategoria);
  };

  // Función para el envío del formulario.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await crear("/v01/producto/create", { nombre, descripcion, precio, cantidad, imagen, idCategoria, idSubcategoria });

    setData([
      ...productos,
      {
        ...response,
        idCategoria,
        idSubcategoria,
        nombreCategoria: categorias.find(
          (categoria) => categoria.id === Number(idCategoria)
        )?.nombre,
        nombreSubcategoria: subcategorias.find(
          (subcategoria) => subcategoria.id === Number(idSubcategoria)
        )?.nombre,
      },
    ]);

    closeModal();
  };

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex ">
      <div className="bg-secondary overflow-auto">
        <div className="flex flex-col space-y-1.5 p-5">
          <h3 className="text-xl text-text font-semibold text-center">Añade un nuevo producto</h3>
        </div>

        <div className="px-6 over">
          <div className="w-full h-auto overflow-auto">
            <form onSubmit={handleSubmit} action="" className="p-2 space-y-4 text-text">
              <div className="flex flex-col space-y-2">
                <label className="font-semibold" htmlFor="categoria">Categoria</label>
                <select
                  className="py-2 px-3 bg-primary rounded-lg cursor-pointer focus:outline-none"
                  onChange={handleInputChange}
                  value={idCategoria}
                  id="categoria"
                  name="categoria"
                >
                  <option className="py-2 px-4 bg-primary" value="">Selecciona una categoria</option>
                  {categorias.map((categoria) => (
                    <option
                      className="py-2 px-4 bg-primary"
                      value={categoria.id}
                      key={categoria.id}
                    >
                      {categoria?.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-semibold" htmlFor="categoria">Subcategoria</label>
                <select
                  className="py-2 px-3 bg-primary rounded-lg cursor-pointer focus:outline-none"
                  onChange={(e) => setIdSubcategoria(e.target.value)}
                  value={idSubcategoria}
                  name="subcategoria"
                  id="subcategoria"
                >
                  <option className="py-2 px-4 bg-primary" value="">Selecciona una subcategoria</option>
                  {subcategorias.map((subcategoria) => (
                    <option
                      className="py-2 px-4 bg-primary focus:outline-none"
                      key={subcategoria.id}
                      value={subcategoria.id}
                    >
                      {subcategoria?.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-semibold" htmlFor="">Nombre</label>
                <input
                  className="flex border px-3 py-2 text-sm bg-primary w-[300px] border-border rounded-lg focus:outline-none"
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                  required
                />
              </div>

              <div className="flex space-x-5">
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold" htmlFor="">Precio</label>
                  <input
                    className="flex border px-3 py-2 text-sm bg-primary w-[140px] border-border rounded-lg focus:outline-none"
                    onChange={(e) => setPrecio(e.target.value)}
                    value={precio}
                    required
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="font-semibold" htmlFor="">Cantidad</label>
                  <input
                    className="flex border px-3 py-2 text-sm bg-primary w-[140px] border-border rounded-lg focus:outline-none"
                    onChange={(e) => setCantidad(e.target.value)}
                    value={cantidad}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold" htmlFor="">Descripción</label>
                <textarea
                  className="flex border px-3 py-2 text-sm bg-primary w-[300px] border-border rounded-lg focus:outline-none"
                  onChange={(e) => setDescripcion(e.target.value)}
                  value={descripcion}
                  type="search"
                  required
                  cols="50"
                  rows="4"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="font-semibold" htmlFor="">Imagen</label>
                <div className="flex flex-col items-center justify-center py-10 border-2 border-tertiary border-dashed rounded-md space-y-2 cursor-pointer">
                  <IconUpload width={48} height={48} />
                  <p className="text-text/80 text-xs w-[180px] text-center">Selecciona o arraste la imagen de tu producto</p>
                </div>
              </div>

              <div className="flex items-center justify-center p-4 relative space-x-10">
                <button onClick={closeModal} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-red-500 hover:bg-red-500/80 rounded-md px-3 gap-1">Cancelar</button>
                <button type="submit" className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-4 gap-1">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
