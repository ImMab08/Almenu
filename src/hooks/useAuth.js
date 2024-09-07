import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthStore } from "@/hooks/storeAuth";

export const useAuth = () => {
  const router = useRouter();
  const { user, token, setUser, setToken } = useAuthStore((state) => ({
    user: state.user,
    token: state.token,
    setUser: state.setUser,
    setToken: state.setToken,
  }));

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      router.push("/login");
      return;
    }

    if (!user) {
      // Fetch user data with the stored token
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setUser(data);
            setToken(storedToken);
          } else {
            localStorage.removeItem("token");
            router.push("/login");
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          router.push("/login");
        });
    }
  }, [router, user, setUser, setToken]);

  return { user, token };
};
