import React, { useEffect, useState } from "react";
import useModalStore from "@/hooks/storeOpenModals";
import useProductoApi from "@/api/Conections/ProductoApi";
import { IconUpload } from "../icons/IconUpload";

export default function CreateProducto({ addProductoToList }) {
  const { closeModal } = useModalStore();
  const { producto, categoria, subcategoria, createProducto, fetchCategorias, fetchSubcategorias }  = useProductoApi();

  // Estados para el formulario.
  const [ nombre, setNombre ] = useState("");
  const [ descripcion, setDescripcion ] = useState("");
  const [ precio, setPrecio ] = useState("");
  const [ cantidad, setCantidad ] = useState("");
  const [ imagen, setImagen ] = useState("");

  const [ idCategoria, setIdCategoria ] = useState("");
  const [ idSubcategoria, setIdSubcategoria ] = useState("");

   const [ loading, setLoading ] = useState(false);
   const [ error, setError ] = useState("");

  useEffect(() => {
    fetchCategorias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleInputChange = async (e) => {
    const selectedCategoria = e.target.value;
    setIdCategoria(selectedCategoria);
    if (selectedCategoria) {
      fetchSubcategorias(selectedCategoria); // Obtener las subcategorias de la categoria seleccionada.
    } else {
      setIdSubcategoria("");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newProducto = { 
      nombre, 
      descripcion, 
      precio: parseFloat(precio), 
      cantidad: parseInt(cantidad), 
      imagen: imagen || "url-imagen", 
      idCategoria: parseInt(idCategoria), 
      idSubcategoria: parseInt(idSubcategoria) 
    };

    try {
      const createdProducto = await createProducto(newProducto);

      console.log("Producto creado: ", createdProducto)

      // Llamamos a la prop para añadir el producto al estado.
      addProductoToList(createdProducto);

      // Actualizar las categorias y las subcategorias.
      await fetchCategorias()
      await fetchSubcategorias(idCategoria)

      // Cerrar el modal.
      closeModal();
    } catch(error) {
      console.error("Error al crear el producto", error.response?.data || error.menssage);
      setError("Error al crear el producto, intentalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full top-0 left-0 bg-black/70 bg-opacity-60 fixed z-50 flex ">
      <div className="bg-secondary overflow-auto">
        <div className="flex flex-col space-y-1.5 p-5">
          <h3 className="text-xl text-title font-semibold text-center">Añade un nuevo producto</h3>
        </div>

        <div className="px-6 over">
          <div className="w-full h-auto overflow-auto">
            <form onSubmit={handleSubmit} action="" className="p-2 space-y-4">

              <div className="flex flex-col space-y-2">
                <label className="text-title font-semibold" htmlFor="categoria">Categoria</label>
                <select className="py-2 px-3 bg-primary rounded-lg cursor-pointer" name="categoria" id="categoria" value={idCategoria} onChange={handleInputChange}>
                  <option className="py-2 px-4 text-title bg-primary" value="">Selecciona una categoria</option>
                  {categoria.map((categoria) => (
                      <option className="py-2 px-4 text-title bg-primary" key={categoria.id} value={categoria.id}>
                        {categoria?.nombre}
                      </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-title font-semibold" htmlFor="categoria">Subcategoria</label>
                <select className="py-2 px-3 bg-primary rounded-lg cursor-pointer" name="subcategoria" id="subcategoria" value={idSubcategoria} onChange={(e) => setIdSubcategoria(e.target.value)}>
                  <option className="py-2 px-4 text-title bg-primary" value="">Selecciona una subcategoria</option>
                  {subcategoria.map((subcategoria) => (
                    <option className="py-2 px-4 text-title bg-primary" key={subcategoria.id} value={subcategoria.id}>
                      {subcategoria?.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-title font-semibold" htmlFor="">Nombre</label>
                <input
                  className="flex border px-3 py-2 text-sm text-title bg-primary w-[300px] border-border rounded-lg"
                  placeholder="Salchipapa Vegana Personal"
                  type="search"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex  space-x-5">
                <div className="flex flex-col space-y-2">
                  <label className="text-title font-semibold" htmlFor="">Precio</label>
                  <input
                    className="flex border px-3 py-2 text-sm text-title bg-primary w-[140px] border-border rounded-lg"
                    placeholder="$ 25.000"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex flex-col space-y-1.5">
                  <label className="text-title font-semibold" htmlFor="">Cantidad</label>
                  <input
                    className="flex border px-3 py-2 text-sm text-title bg-primary w-[140px] border-border rounded-lg"
                    placeholder="50"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    required
                  />
                </div>
              </div>


              <div className="flex flex-col space-y-1.5">
                <label className="text-title font-semibold" htmlFor="">Descripción</label>
                <textarea
                  className="flex border px-3 py-2 text-sm text-title bg-primary w-[300px] border-border rounded-lg"
                  placeholder="Añade una descrión corta"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  required
                  rows="4"
                  cols="50"
                  type="search"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-title font-semibold" htmlFor="">Imagen</label>
                <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed rounded-md space-y-4 cursor-pointer">
                  <IconUpload />
                  <p className="text-subtitle text-sm w-[180px] text-center">Selecciona o arraste la imagen de tu producto</p>
                </div>
              </div>

              <div className="flex items-center justify-center p-4 relative space-x-10">
                <button onClick={closeModal} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-red-500 hover:bg-red-500/80 rounded-md px-3 gap-1">Cancelar</button>
                <button type="submit" disabled={loading} className="flex items-center justify-center text-sm font-medium text-white h-9 bg-green-500 hover:bg-green-500/80 rounded-md px-4 gap-1">{loading ? "Guardando... " : "Guardar"}</button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
