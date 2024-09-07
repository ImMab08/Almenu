"use client";
import React, { useState } from "react";

import useEditStore from "@/hooks/storeEdit";
import { userData, restaurantData } from "./config/inputs";

import { IconArrowDown, IconUpload } from "../../icons";

export function Perfil() {
  const [ openConfig, setOpenConfig ] = useState();

  const handledSumit = () => {
    setOpenConfig(!openConfig)
  }

  const { editingSection, setEditingSection, clearEditingSection } = useEditStore();

  const handleEditClick = (section) => {
    setEditingSection(section);
  };
  const handleSaveClick = () => {
    clearEditingSection();
  };

  const RestaurantData = restaurantData.map(
    ({ title, required, placeHolder }) => {
      return (
        <div key={title} className="flex flex-col">
          <label className="text-sm font-medium text-subtitle">
            {title} <span className="text-red-500">{required}</span>
          </label>
          <input
            className={`mt-1 border-title border-[1.5px] full h-[40px] p-4 rounded-md ${
              editingSection !== "restaurant" ? " cursor-not-allowed" : ""
            }`}
            type="text"
            placeholder={placeHolder}
            disabled={editingSection !== "restaurant"}
            required
          />
        </div>
      );
    }
  );

  const UserData = userData.map(({ title, required, placeHolder }) => {
    return (
      <div key={title} className="flex flex-col">
        <label className="text-sm font-medium text-subtitle">
          {title} <span className="text-red-500">{required}</span>
        </label>
        <input
          className={`mt-1 border-title border-[1.5px] w-full h-[40px] p-4 rounded-md ${
            editingSection !== "profile" ? "cursor-not-allowed" : ""
          }`}
          type="text"
          placeholder={placeHolder}
          disabled={editingSection !== "profile"}
          required
        />
      </div>
    );
  });

  return (
    <section className="w-full h-auto bg-primary p-5 space-y-5 rounded-lg">
      <div className="flex cursor-pointer" onClick={handledSumit}>
        <h1 className="flex-1 text-xl text-title font-semibold">Configuración del Perfil</h1>
        <div className={`cursor-pointer transform transition-transform duration-300 ${openConfig ? 'rotate-0' : '-rotate-180'}`} onClick={handledSumit}>
          <IconArrowDown />
        </div>
      </div>

      {openConfig && 
        <div className="w-full h-[32rem] grid grid-cols-2 gap-5">
          <div className="w-full border-border border-[1px] h-auto bg-primary rounded-lg px-4 py-6 flex flex-col">
            <h1 className="text-title text-lg font-semibold border-b border-border pb-3">Información del Restaurante</h1>
      
            <div className="grid grid-cols-2 gap-5 my-3">{RestaurantData}</div>      
            <div className="w-full h-full flex flex-col">
              <div className="w-auto h-full pt-2">
                <p className="text-sm font-medium text-title">Logo </p>
                <div className="w-[120px] h-[120px] mt-1 flex flex-col items-center justify-center rounded-xl bg-secondary border cursor-pointer">
                  <IconUpload />
                  <p className="text-sm font-medium text-title">Cargar logo</p>
                </div>
              </div>
      
              <div className="w-full h-full flex justify-end items-end gap-3">
                {editingSection === "restaurant" ? (
                  <>
                    <buttom className="flex flex-col bg-yellow-500 hover:bg-yellow-500/80 px-4 py-2 rounded-md cursor-pointer" onClick={handleSaveClick}>
                      <p className="text-sm text-center font-semibold text-white">Cancelar</p>
                    </buttom>
                    <buttom className="flex flex-col bg-green-500 hover:bg-green-500/80 px-4 py-2 rounded-md cursor-pointer" onClick={handleSaveClick}>
                      <p className="text-sm text-center font-semibold text-white">Guardar</p>
                    </buttom>
                  </>
                ) : (
                  <buttom className="flex flex-col bg-secondary hover:bg-black px-4 py-2 rounded-md cursor-pointer" onClick={() => handleEditClick("restaurant")}>
                    <p className="text-sm text-center font-semibold text-white">Editar</p>
                  </buttom>
                )}
              </div>
            </div>
          </div>
      
          <div className="w-full border-border border-[1px] h-full bg-primary rounded-lg px-4 py-6 flex flex-col">
            <h1 className="text-title text-lg font-semibold border-b border-border pb-3">Información del perfil</h1>
      
            <div className="grid grid-cols-2 gap-5 my-3">{UserData}</div>    
            <div className="w-full h-full flex justify-end items-end gap-3">
              {editingSection === "profile" ? (
                <>
                  <buttom className="flex flex-col bg-yellow-500 hover:bg-yellow-500/80 px-4 py-2 rounded-md cursor-pointer" onClick={handleSaveClick}>
                    <p className="text-sm text-center font-medium text-white">Cancelar</p>
                  </buttom>
                  <buttom className="flex flex-col bg-green-500 hover:bg-green-500/80 px-4 py-2 rounded-md cursor-pointer" onClick={handleSaveClick}>
                    <p className="text-sm text-center font-medium text-white">Guardar</p>
                  </buttom>
                </>
              ) : (
                <buttom className="flex flex-col bg-secondary hover:bg-black px-4 py-2 rounded-md cursor-pointer" onClick={() => handleEditClick("profile")}>
                  <p className="text-sm text-center font-semibold text-white">Editar</p>
                </buttom>
              )}
            </div>
          </div>
        </div>
      }
    </section>
  );
}
