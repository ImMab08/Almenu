import { useState, useEffect } from "react";
import api from "@/api/api";

const useRestauranteApi = () => {
  const [ restaurante, setRestaurante ] = useState(null);

  // Obtener información del restaurante.
  useEffect(() => {
    const fetchRestaurante = async () => {
      try {
        const response = await api.get("/v01/restaurante/usuario");
        setRestaurante(response.data);
      } catch (error) {
        console.log("Error al traer la información del restaurante del usuario: ", error);
      }
    };
    fetchRestaurante();
  }, []);

  // Crear información del restaurante.

  // Editar información del restaurante.

  // Eliminar información del restaurante.

  return { restaurante };
};

export default useRestauranteApi;