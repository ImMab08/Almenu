import { handleLogout } from '../authActions';

export const menus = [
  { url: "/inicio", text: "Inicio", icon: "IconHome" },
  { url: "/menu", text: "Menú", icon: "IconMenu" },
  { url: "/inventario", text: "Inventario", icon: "IconStock" },
  { url: "/balance", text: "Balance", icon: "IconStats" },
];

export const userSettings = [
  { url: "/configuracion", text: "Configuración", icon: "IconSettings", action: null },
  { url: "#", text: "Cerrar Sesión", icon: "IconLogout", action: handleLogout },
];
