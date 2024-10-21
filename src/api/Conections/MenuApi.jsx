import api from "@/api/api";
import { useEffect, useState } from "react";

const useMenuApi = (idCategoria) => {
  const [categoria, setCategoria] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async (idCategoria) => {
      if (!idCategoria) return;

      try {
        const response = await api.get(`/v01/menu/usuario/${idCategoria}/productos`);
        if (response.status === 200) {
          setMenu(response.data);
        } else {
          throw new Error("Error al obtener el menú.");
        }
      } catch {
        console.log("Error al obtener el menú del usuario.");
      }
    };

    fetchMenu(idCategoria);
  }, [idCategoria]);

  return { categoria, menu, setMenu };
};

export default useMenuApi;