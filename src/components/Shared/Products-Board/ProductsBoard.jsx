"use client";
import React, { useState } from "react";
import { IconArrowDown } from "./icons";
import useCategoriaApi from "@/api/Conections/CategoriaApi";

export default function ProductsBoard() {
  const [isDropdownVisible, setIsDropdownVisible] = useState();
  const { categoria } = useCategoriaApi();

  const showDropdown = () => setIsDropdownVisible(true);
  const hideDropdown = () => setIsDropdownVisible(false);

  return (
    <header className="w-full">
      <nav className=" w-full h-auto bg-[#151515] border-b border-border px-5">
        <ul className="flex space-x-5">
          {categoria?.length > 0 ? (
            categoria.map((categoria) => (
                <li key={categoria.id} className="p-1 text-title text-base flex items-center cursor-pointer list-none" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                  {categoria.nombre}
                  <IconArrowDown />
                  {/* {isDropdownVisible && (
                    <>
                      <ul className=" absolute top-[106px] z-50 bg-white w-auto h-auto flex flex-col space-y-2 rounded-b-lg">
                        <li className="hover:bg-secondary hover:text-white px-3">Lorem ipsum</li>
                        <li className="hover:bg-secondary hover:text-white px-3">Lorem ipsum</li>
                        <li className="hover:bg-secondary hover:text-white px-3">Lorem ipsum</li>
                        <li className="hover:bg-secondary hover:text-white px-3">Lorem ipsum</li>
                      </ul>
                    </>
                  )} */}
                </li>
            ))
          ) : (
            <div></div>
          )}
        </ul>
      </nav>
    </header>
  );
}
