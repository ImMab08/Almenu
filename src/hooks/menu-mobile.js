import { create } from "zustand";

export const useMenuMobile = create((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({isOpen: !state.isOpen})),
  closeMenu: () => set({isOpen: false}),
}))