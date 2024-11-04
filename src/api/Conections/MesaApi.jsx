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
      const response = await api.post("", newMesa);
      console.log("Respuesta del servidor:", response);
      return response
    } catch (error) {
      setError(error.message ||  "Error al crear la mesa");
    }
  }

  return { mesas, setMesas, loading, error, createMesa, deleteMesa }
}

export default useMesaApi;