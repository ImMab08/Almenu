'use client'
import React from "react";

import { Mesas } from "./Mesas";
import { SettingsCategoria } from "./Categorias";
import { Empleados } from './Empleados'
import { Perfil } from "./Perfil";
import { Productos } from "./Productos";

export function Configuracion() {

  return (
    <section className="p-5 space-y-4 bg-secondary">
      <Perfil />
      <Mesas />
      <SettingsCategoria />
      <Productos />
      <Empleados />
    </section>
  );
}
