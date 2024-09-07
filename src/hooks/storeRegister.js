import { create } from "zustand";

export const formRegister = create((set) => ({
  formData: {
    nombre: "",
    apellido: "",
    celular: "",
    email: "",
    password: "",
    password_confirm: "",
  },

  setFormData: (newFormData) =>
    set((state) => ({
      formData: {...state.formData, ...newFormData}
    }))
}));
