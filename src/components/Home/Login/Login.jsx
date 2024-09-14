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

    if (isAuthenticated) {
      router.push('/inicio');
    } else {
      setError("El correo o la contraseña son incorrectos.")
    }
  }

  return (
    <main className="w-full h-screen bg-primary hero">
      <section className=" relative w-full h-full flex flex-col items-center justify-center px-2">
        <div className="w-[350px] h-[450px] tablet:w-[400px] p-[25px] bg-secondary flex flex-col justify-between items-center rounded-3xl shadow-2xl mt-5 laptop:mt-0">
          <Image width={150} height={150} src="/img/logo-almenu.png" alt="" />
          <div className="flex justify-between items-center">
            <h2 className="text-[1.8rem] sm:text-[2rem] font-extrabold text-title">Iniciar Sesión</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                className="input"
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

            <div className="text-center text-white bg-bg rounded-md py-1 hover:bg-bg/80">
              <button type="submit">Iniciar sesión</button>
            </div>
              {
                error && <p className="text-red-500 text-center font-bold">{error}</p>
              }
          </form>
          
          <div className="w-full flex justify-between gap-[20px]">
            <a className="text-[14px] text-subtitle no-underline hover:text-title" href="">Olvidé mi contraseña</a>
            <Link className="text-[14px] text-subtitle no-underline hover:text-title" href="/register">Registrarme</Link>
          </div>
        </div>
        <Link className="text-white text-base sm:text-lg font-semibold mt-5 hover:underline" href="/">Volver al inicio</Link>
      </section>
    </main>
  )
}

export default Login;