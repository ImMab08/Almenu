import { useState, useEffect } from "react";
import api from "@/api/api";

const useUsuarioApi = () => {
  const [usuario, setUsuario] = useState([]);

  // Obtener información del usuario.
  useEffect(() => {
    const fetchUsuarioSettings = async () => {
      try {
        const response = await api.get("/v01/usuario/settings");
        setUsuario(response.data);
      } catch {
        console.log("Error al obtener la información del usuario para la configuración.");
      }      
    };
    fetchUsuarioSettings();
  }, []);

  // Actualizar información del usuario. 
  const updateUsuario = async (id_usuario, updateUsuario) => {
    try {
      const response = await api.put(`/v01/usuario/update/${id_usuario}`, updateUsuario);
      setUsuario(
        usuario.map((usuario) =>
          usuario.id_usuario  === id_usuario ? response.data : usuario
        )
      );
    } catch (error) {
      console.log("Error al actualizar la información del usuario.", error);
    }
  };

  return { usuario, updateUsuario }
};

export default useUsuarioApi;