import api from "../api";
import { useState } from "react";

const useProductoApi = () => {
  const [ producto, setProducto ] = useState([]);
  const [ categoria, setCategoria ] = useState([]);
  const [ subcategoria, setSubcategoria] = useState([]);

  // Obtener Categorias.
  const fetchCategorias = async () => {
    try {
      const response = await api.get("/v01/categoria/usuario");
      if (response?.data) {
        setCategoria(response.data);
      } else {
        console.log("No se han encontrado categorias.")
      }
    } catch(error) {
      console.log("Error al obtener las categorias")
    }
  };

  // Obtener Subcategorias de la categoria seleccionada.
  const fetchSubcategorias = async (idCategoria) => {
    try {
      const response = await api.get(`/v01/subcategoria/categoria/${idCategoria}`);
      if (response?.data) {
        setSubcategoria(response.data);
      } else {
        console.log("No se encontraron subcategorias para el usuario")
      }
    } catch {
      console.error("Error al obtener las subcategorias");
    }
  };

  // Obtener todos los productos del usuario.
  const fetchProductos = async () => {
    try {
      const response = await api.get("/v01/producto/usuario");
      if (response?.data) {
        setProducto(response.data);
      } else {
        console.log("No se encuentran productos para el usuario.")
      }
    } catch (error) {
      console.log("Error al cargar los producots", error)
    }
  };

  // Crear un producto del usuario.
  const createProducto = async (newProducto) => {
    try {
      const response = await api.post("/v01/producto/create", newProducto);

      // Agregar un nuevo producto a la lista sin actualizar.
      setProducto([
        ...producto,
        response.data
      ], []);

      // Retornamos la información
      return response.data;
    } catch(error) {
      console.error("Error al crear producto", error.response?.data || error.message);
    }
  };

  // Actualizar un producto del usuario.
  const updateProducto = async (id_producto, putProducto) => {
    try {
      const response = await api.put(`/v01/producto/update/${id_producto}`, putProducto);
      setProducto(producto.map((producto) => 
        producto.id === id_producto ? response.data : producto
      ));
      return response.data
    } catch (error) {
      console.error("Error al actualizar el producto", error)
    }
  }

  // Eliminar un producto del usuario.
  const deleteProducto = async (id_producto) => {
    try {
      const response = await api.delete(`/v01/producto/delete/${id_producto}`);
      setProducto(
        producto.filter((producto) => producto.id != id_producto)
      );
      return response.data
    } catch (error) {
      console.error("Error al eliminar el producto.")
    }
  }

  return { producto, setProducto, categoria, subcategoria, createProducto, updateProducto, deleteProducto, fetchCategorias, fetchSubcategorias, fetchProductos };
};

export default useProductoApi;