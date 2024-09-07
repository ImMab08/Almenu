import { useAuthStore } from "@/hooks/storeAuth";

export const handleLogout = () => {
  const logout = useAuthStore.getState().logout;
  logout();
  localStorage.removeItem('token');
};