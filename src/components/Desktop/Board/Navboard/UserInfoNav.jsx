import { useState, useEffect } from "react";
import api from "@/api/api";

const UserInfoNav = () => {
  const [usuarioInfo, setUsuarioInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuarioInfo = async () => {
      try {
        const response = await api.get("/v01/user/navboard");
        setUsuarioInfo(response.data);
      } catch (erro) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarioInfo();
  }, []);

  return { usuarioInfo, loading, error };
};

export default UserInfoNav;
