import api from "@/api/api";
import { useEffect, useState } from "react";

const useColaboradoresApi = () => {
  const [ colaborador, setColaborador ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null)

  // Obtener colaboradores
  useEffect(() => {
    setTimeout(() => {
      const fetchColaboradores = async () => {
        try {
          const response = await api.get("/v01/colaborador/colaboradores");
          if (response?.data) {
            setColaborador(response.data);
          } else {
            setError("No se encuentra colaboradores");
          }
        } catch (error) {
          setError(error.message || "Error al cargar a los colaboradores");
        } finally {
          setLoading(false)
        }
      };

      fetchColaboradores();
    }, 1000)
  }, [])

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

  // Editar a un colaborador
  const updateColaborador = async (id_empleado, updateColaborador) => {
    try {
      const response = await api.put(`/v01/colaborador/update/${id_empleado}`, updateColaborador);
      // Actualizar al empleado
      setColaborador(colaborador.map(colaborador =>
        colaborador.id === id_empleado ? response.data : colaborador
      ));
    } catch (err) {
      setError(err.message || "Error al actualizar al empleado.")
    }
  }

  // Eliminar a un colaborador 
  const deleteColaborador = async (id_empleado) => {
    try {
      await api.delete(`/v01/colaborador/delete/${id_empleado}`)
      setColaborador(colaborador.filter(colaborador => colaborador.id !== id_empleado));
    } catch (err) {
      setError(err.message || "Error al eliminar al colaborador.");
    }
  }

  return { colaborador, loading, error, createColaborador, updateColaborador, deleteColaborador }
};

export default useColaboradoresApi;