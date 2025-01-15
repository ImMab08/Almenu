'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/api/auth/login";

const Login = () => {
  const [ credentials, setCredentials ] = useState({ email: '', password: ''})
  const [ error, setError ] = useState('');
  const router = useRouter();

  const handleChange = async (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isAuthenticated = await login(credentials.email, credentials.password);

    console.log("datos: ", isAuthenticated )

    if (isAuthenticated) {
      router.push('/inicio');
    } else {
      setError("El correo o la contraseña son incorrectos.")
    }
  }

  return (
    <main className="w-full h-screen bg-primary">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-auto xl:w-1/4 py-5 px-10 md:py-10 md:px-12 bg-gray-100 flex flex-col justify-between items-center rounded-3xl shadow-2xl mt-5 laptop:mt-0 space-y-5">
          <Image width={180} height={150} src="/img/logo-almenu.png" alt="" />
          <div className="flex justify-between items-center">
            <h2 className="text-2xl xl:text-3xl font-extrabold text-text">Iniciar Sesión</h2>
          </div>

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
              <button type="submit" className="text-base font-semibold">Iniciar sesión</button>
            </div>
              {
                error && <p className="text-red-500 text-center text-sm font-medium pt-4">{error}</p>
              }
          </form>
          
          <div className="w-full flex justify-between gap-[20px] pt-10">
            <a className="text-sm text-text no-underline hover:text-text/80" href="">Olvidé mi contraseña</a>
            <Link className="text-sm text-text no-underline hover:text-text/80" href="/register">Registrarme</Link>
          </div>
        </div>
        <Link className="text-text text-base sm:text-lg font-semibold mt-5 hover:underline" href="/">Volver al inicio</Link>
      </section>
    </main>
  )
}

export default Login;