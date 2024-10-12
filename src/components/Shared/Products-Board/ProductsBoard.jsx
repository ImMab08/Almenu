"use client";
import React, { useState } from "react";
import { IconArrowDown } from "./icons";
import useCategoriaApi from "@/api/Conections/CategoriaApi";
import { IconClose } from "../Header/icons";

export default function ProductsBoard({ handleCategoriaSelect, handleProductoSelect }) {
  const [selected, setSelected] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState();
  const { categoria } = useCategoriaApi();

  const showDropdown = () => setIsDropdownVisible(true);
  const hideDropdown = () => setIsDropdownVisible(false);

  const handleCategoriaClic = (idCategoria) => {
    setSelected(idCategoria);
    handleCategoriaSelect(idCategoria);
  };

  const handleClose = () => {
    setSelected(null);
    handleCategoriaSelect(false);
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
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
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
