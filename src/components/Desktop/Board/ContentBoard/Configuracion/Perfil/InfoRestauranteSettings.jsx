import { useState, useEffect } from "react";
import api from "@/api/api";

const InfoRestauranteSettings = () => {
  const [ restaurante, setRestaurante ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchUsuarioInfo = async () => {
      try {
        const response = await api.get("/v01/restaurante/usuario");
        setRestaurante(response.data);
      } catch (erro) {
        setError(erro);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarioInfo();
  }, []);

  return { restaurante, loading, error }

}; 

export default InfoRestauranteSettings;