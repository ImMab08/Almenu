import { useState, useEffect } from "react";
import api from "@/api/api";

const useCategoriaApi = () => {
  const [categoria, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener categorías
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await api.get("/v01/categoria/usuario");
        if (response?.data) {
          setCategorias(response.data);
        } else {
          setError("No se encontraron categorías.");
        }
      } catch (err) {
        setError(err.message || "Error al cargar las categorías.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  // Crear una nueva categoría
  const createCategoria = async (newCategoria) => {
    try {
      const response = await api.post("/v01/categoria/create", newCategoria);
      // Agregar la nueva categoría a la lista sin recargar
      setCategorias([...categoria, response.data]);
    } catch (err) {
      setError(err.message || "Error al crear la categoría.");
    }
  };

  // Actualizar una categoría existente
  const updateCategoria = async (id_categoria, updatedCategoria) => {
    try {
      const response = await api.put(`/v01/categoria/update/${id_categoria}`,updatedCategoria);
      // Actualizar la categoría en el estado sin recargar
      setCategorias(
        categoria.map((categoria) =>
          categoria.id === id_categoria ? response.data : categoria
        )
      );
    } catch (err) {
      setError(err.message || "Error al actualizar la categoría.");
    }
  };

  // Eliminar una categoría
  const deleteCategoria = async (id_categoria) => {
    try {
      await api.delete(`/v01/categoria/delete/${id_categoria}`);
      // Filtrar la categoría eliminada del estado sin recargar
      setCategorias(
        categoria.filter((categoria) => categoria.id !== id_categoria)
      );
    } catch (err) {
      setError(err.message || "Error al eliminar la categoría.");
    }
  };

  return { categoria, loading, error, createCategoria, updateCategoria, deleteCategoria };
};

export default useCategoriaApi;
