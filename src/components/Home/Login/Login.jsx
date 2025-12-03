"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/api/auth/login";
import { IconGoogle, IconLogo } from "@/icons";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = async (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isAuthenticated = await login(
      credentials.email,
      credentials.password
    );

    console.log("datos: ", isAuthenticated);

    if (isAuthenticated) {
      router.push("/inicio");
    } else {
      setError("El correo o la contraseña son incorrectos.");
    }
  };

  return (
    <main className="w-full h-screen bg-primary">
      <section className="w-full h-full flex flex-col">
        {/* <div className="w-full h-5 flex items-start">
          <Link className="text-text text-base sm:text-lg font-semibold hover:underline" href="/">Volver al inicio</Link>
        </div> */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="bg-gray-100 w-auto xl:w-1/4 py-4 px-10 md:py-10 md:px-12  flex flex-col justify-between items-center rounded-3xl shadow-2xl mt-5 laptop:mt-0 space-y-5">
            <IconLogo width={160} height={80} />
            <h2 className="text-1xl xl:text-2xl font-extrabold text-text">Iniciar Sesión</h2>

            <form className="w-full" onSubmit={handleSubmit}>
              <div className="input-field">
                <input
                  className="input "
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label className="label_name">Correo electrónico</label>
              </div>

              <div className="input-field">
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label className="label_name">Contraseña</label>
              </div>

              <div className="text-center text-white bg-gradient-to-r from-blue-600 to-teal-500 py-2 rounded-xl hover:scale-105 transition duration-300">
                <button type="submit" className="text-white text-base font-semibold">
                  Iniciar sesión
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-center text-sm font-medium pt-4">
                  {error}
                </p>
              )}
            </form>

            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="bg-gray-100 absolute px-2 text-sm font-medium text-gray-900 -translate-x-1/2 left-1/2">O continúa con</span>
            </div>

            <button className="w-full flex justify-center border-2 py-2 rounded-xl space-x-2 hover:shadow-lg transition duration-200">
              <IconGoogle width={24} height={24} />
              <p>Iniciar sesión con Google</p>
            </button>

            <div className="w-full flex justify-between gap-[20px] pt-10">
              <Link className="text-sm text-text no-underline hover:text-text/80 hover:transition hover:duration-200" href="">Olvidé mi contraseña</Link>
              <Link className="text-sm text-text no-underline hover:text-text/80 hover:transition hover:duration-200" href="/register">Registrarme</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;