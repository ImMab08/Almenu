import api from "../api";
import { useEffect, useState } from "react";

const useProductoApi = () => {
  const [ producto, setProducto ] = useState([]);
  const [ categoria, setCategoria ] = useState([]);
  const [ subcategoria, setSubcategoria] = useState([]);

  // Obtener todos los productos del usuario.

  // Crear un producto del usuario.
  const crearProducto = async (newProducto) => {
    try {
      const response = await api.post("/v01/producto/create", newProducto);
      setProducto([
        ...producto,
        response.data
      ])
    } catch {
      console.log("Error al crear producto");
    }
  }

  // Editar un producto del usuario.

  // Eliminar un producto del usuario.


}