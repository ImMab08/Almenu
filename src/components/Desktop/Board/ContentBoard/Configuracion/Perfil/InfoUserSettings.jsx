import { useState, useEffect } from "react";
import api from "@/api/api";

const UserInfoSettings = () => {
  const [ usuarioInfo, setUsuarioInfo ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchUsuarioInfo = async () => {
      try {
        const response = await api.get("/v01/user/settings");
        setUsuarioInfo(response.data);
      } catch (erro) {
        setError(erro);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarioInfo();
  }, []);

  return { usuarioInfo, loading, error }

}; 

export default UserInfoSettings;