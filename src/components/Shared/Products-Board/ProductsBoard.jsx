"use client";
import React, { useState } from "react";
import { IconArrowDown } from "./icons";
import { IconClose } from "../Header/icons";
import useCategoriaApi from "@/api/Conections/CategoriaApi";

export default function ProductsBoard({ handleSelectCategoria }) {
  const [selected, setSelected] = useState(null);
  const { categoria } = useCategoriaApi();

  const handleCategoriaClic = (idCategoria) => {    
    // Verificar si la categoría ya está seleccionada
    if (selected === idCategoria) {
      setSelected(null);
      handleSelectCategoria(false)
    } else {
      setSelected(idCategoria);
      handleSelectCategoria(idCategoria);
    }
  };
  
  const handleClose = () => {
    setSelected(null);
    handleSelectCategoria(false);
  };

  return (
    <header className="w-full">
      <nav className=" w-full h-auto bg-tertiary border-b border-border">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-5 overflow-x-scroll">
            {categoria?.length > 0 ? (
              categoria.map((categoria) => (
                <li
                  key={categoria.id}
                  className={`p-1 text-title text-base flex items-center cursor-pointer list-none hover:bg-secondary px-2 ${
                    selected === categoria.id ? "bg-secondary" : ""
                  }`}
                  onClick={() => handleCategoriaClic(categoria.id)}
                >
                  {categoria.nombre}
                  <IconArrowDown />
                </li>
              ))
            ) : (
              <div></div>
            )}
          </ul>
          <div className="relative z-10 flex items-center justify-center px-3 cursor-pointer" onClick={handleClose}>
            <IconClose />
          </div>
        </div>
      </nav>
    </header>
  );
}