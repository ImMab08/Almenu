'use client'
import React from "react";

import { Mesas } from "./Mesas";
import { SettingsCategoria } from "./Categorias";
import { Empleados } from './Empleados'
import { Perfil } from "./Perfil";
import { Productos } from "./Productos";

export function ConfiguracionMobile() {

  return (
    <section className="w-full h-full p-4 space-y-4 bg-secondary">
      <Perfil />
      <Mesas />
      <SettingsCategoria />
      <Productos />
      <Empleados />
    </section>
  );
}
