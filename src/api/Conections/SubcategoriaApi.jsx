import api from "@/api/api";
import { useEffect, useState } from "react";

const useSubcategoriaApi = () => {
  const [ subcategoria, setSubcategoria ] = useState([]);
  const [ categoria, setCategoria ] = useState([])

  // Obtener las categorias
  const fetchCategorias = async () => {
    try {
      const response = await api.get("/v01/categoria/usuario");
      if (response?.data) {
        setCategoria(response.data);
      } else {
        console.log("No se han encontrado categorias");
      }
    } catch { 
      console.log("Error al obtener las categorias")
    }
  }
  
  // Obtener las subcategorias
  const fetchSubcategorias = async () => {
    try {
      const response = await api.get("/v01/subcategoria/subcategorias");
      if (response?.data) {
        setSubcategoria(response.data);
      } else {
        console.log("No se encontraron subcategorias para el usuario")
      }
    } catch {
      console.error("Error al obtener las subcategorias");
    }
  };

  // Crear una subcategoria
  const createSubcategoria = async (newSubcategoria) => {
    try {
      const response = await api.post("/v01/subcategoria/create", newSubcategoria);
      setSubcategoria([
        ...subcategoria,
        response.data,
      ])
    } catch {
      console.log("Error al crear la subcategoria.")
    }
  }

  // Actualizar una subcategoria
  const updateSubcategoria = async (id_subcategoria, updateSubcategoria) => {
    try {
      await api.put(`/v01/subcategoria/update/${id_subcategoria}`, updateSubcategoria);
      setSubcategoria(subcategoria.map((subcategoria) =>
        subcategoria.id === id_subcategoria ? response.data : subcategoria
      ));
    } catch {
      console.log("Error al eliminar una subcategoria.");
    }
  }

  // Eliminar una subcategoria
  const deleteSubcategoria = async (id_subcategoria) => {
    try {
      await api.delete(`/v01/subcategoria/delete/${id_subcategoria}`);
      setSubcategoria(subcategoria.filter((subcategoria) => subcategoria.id !== id_subcategoria));
    } catch {
      console.log("Error al eliminar la subcategoria.")
    }
  }

  useEffect(() => {
    fetchCategorias();
    fetchSubcategorias();
  }, []);

  return { categoria, subcategoria, createSubcategoria, fetchCategorias, fetchSubcategorias, updateSubcategoria, deleteSubcategoria }
};

export default useSubcategoriaApi