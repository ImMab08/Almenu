import { create } from "zustand";

export const useMenuMobile = create((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({isOpen: !state.isOpen})),
  closeMenu: () => set({isOpen: false}),
}))

export const expandedBoard = create((set) => ({
  isExpanded: false,
  toggleExpanded: () => set((state) => ({isExpanded: !state.isExpanded})),
  closeExpanded: () => set({isExpanded: false}),
}))

export const expandedItemState = create((set) => ({
  expandedId: null,
  toggleExpanded: (id) => set((state) => ({
    expandedId: state.expandedId === id ? null : id,
  })),
  closeExpanded: () => set({ expandedId: null }),
}));