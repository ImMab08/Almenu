import api from "@/api/api";
import { useEffect, useState } from "react";

const useColaboradoresApi = () => {
  const [ colaborador, setColaborador ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null)

  // Obetener colaboradores
  const fetchColaboradores = async () => {
    setLoading(true)
    try {
      const response = await api.get("/v01/colaborador/colaboradores");
      if (response?.data) {
        setColaborador(response.data);
      } else {
        setError("No se encuentra colaboradores");
      }
    } catch (err) {
      setError(err.message || "Error al cargar a los colaboradores");
    } finally {
      setLoading(false)
    }
  };

  // Crear un nuevo colaborador
  const createColaborador = async (newColaborador) => {
    try {
      const response = await api.post("/v01/colaborador/create", newColaborador);
      setColaborador([
        ...colaborador,
        response.data,
      ])
    } catch (err) {
      setError(err.message || "Error al crear al colaborador");
    }
  }

  useEffect(() => {
    fetchColaboradores();
  }, []);

  return { colaborador, loading, error, createColaborador }
};

export default useColaboradoresApi;