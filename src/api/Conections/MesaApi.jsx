import api from "@/api/api";
import { useEffect, useState } from "react";

const useMesaApi = () => {
  const [ mesas, setMesas ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  // Obtener las mesas
  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const response = await api.get("/v01/mesa/usuario");
        if (response?.data) {
          setMesas(response.data);
        } else {
          setError("No se han encontrado mesas para el usuario.");
        }
      } catch (error) {
        setError(error.message || "Error al cargar las mesas.");
      } finally {
        setLoading(true);
      }
    }

    fetchMesas();
  }, [])


  // Crear Mesas
  const createMesa = async (newMesa) => {
    try {
      const response = await api.post("/v01/mesa/create", newMesa);
      console.log("Respuesta del servidor:", response);
      return response
    } catch (error) {
      setError(error.message ||  "Error al crear la mesa");
    }
  }

  // Eliminar Mesas
  const deleteMesa = async (id_mesa) => {
    try {
      const response = await api.delete(`/v01/mesa/delete/${id_mesa}`);
      if (response) {
        setMesas(
          mesas.filter((mesa) => mesa.id !== id_mesa)
        );
        return response.data;
      } else {
        throw new Error("La respuesta del servidor es undefined");
      }
    } catch(error) {
      setError(error.message || "Error al eliminar la mesa.");
    }
  }

  return { mesas, setMesas, loading, error, createMesa, deleteMesa }
}

export default useMesaApi;