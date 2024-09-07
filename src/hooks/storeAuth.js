import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  clearAuth: () => set({ user: null, token: null }),

  login: async (email, password) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data:", errorData);
        throw new Error(`Error ${response.status}: ${errorData.detail}`);
      }

      const data = await response.json();
      set({ user: data.user, token: data.access_token });
      return data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  logout: () => {
    set({ user: null, token: null });
  },
}));
