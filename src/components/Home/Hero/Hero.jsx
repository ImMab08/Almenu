"use client";
import React, { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { IconRightArrow } from "./Icons";
import { login } from "@/api/auth/login";

function Hero() {
  const [credentials, setCredentials] = useState({ email: '', password: '',});
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumit = async (e) => {
    e.preventDefault()
    const isAuthenticated = await login(credentials.email, credentials.password);

    if (isAuthenticated) {
      router.push('/inicio'); 
    } else {
      setError('El correo o la contraseña son incorrectos.');
    }

  }

  return (
    <main className="">
      <section className="hero w-full h-screen bg-tertiary tablet:flex tablet:flex-col laptop:flex-row justify-center items-center mt-[50px] tablet:mt-[80px] laptop:mt-10 p-5 tablet:p-10 laptop:p-10">
        <div className="w-full h-[80%] flex flex-col justify-center tablet:block tablet:h-auto laptop:w-3/5 relative z-10">
          <h1 className="text-[2rem] mobileLG:text-[2.5rem] tablet:text-[3.5rem] laptop:text-[3rem] desktopLG:text-[4rem] leading-[22px] mobileLG:leading-[32px] tablet:leading-[72px] laptop:leading-[52px] desktopLG:leading-[72px] font-extrabold text-title ">Revolución</h1>
          <h2 className="text-[3rem] mobileLG:text-[3.5rem] tablet:text-[5.25rem] laptop:text-[4.25rem] desktopLG:text-[5rem] leading-[50px] font-black mb-[5px] text-title ">
            <span className="">Digital</span> Para
          </h2>
          <h3 className="text-[2.25rem] mobileLG:text-[2.75rem] tablet:text-[4rem] laptop:text-[3rem] leading-[20px] desktopLG:text-[4rem] mobileLG:leading-[32px] tablet:leading-[80px] laptop:leading-[50px] desktopLG:leading-[72px] pl-[20px] tablet:pl-[32px] laptop:pl-[30px] font-extrabold text-title">Tu Negocio.</h3>
          <p className="text-title mt-8 text-sm mobileLG:text-base laptop:text-lg laptop:mt-[25px] laptop:w-[500px] ">
            Optimiza y lleva al siguiente nivel tu restaurante con Almenú. Un
            software hecho a la medida para la gestión de de pequeños, medianos
            y grandes restaurantes.
          </p>
          <div className="aboutMore w-[200px] h-auto flex items-center cursor-pointer mt-5">
            <Link
              className="mx-2 text-title no-underline hover:underline text-base laptop:text-base transition"
              href="/about"
            >
              Conoce más
            </Link>
            <IconRightArrow />
          </div>
        </div>

        <div className="hidden desktop:block relative z-10">
          <p className="text-center text-primary">¿Ya tienes una cuenta?</p>
          <div className="w-[auto] h-[350px] tablet:w-[400px] p-[25px] bg-[#1f1f1f] flex flex-col justify-between items-center rounded-3xl shadow-2xl mt-5 laptop:mt-0">
            <div className="flex justify-between items-center">
              <h2 className="text-[2rem] font-extrabold text-white">Iniciar Sesión</h2>
            </div>

            <form onSubmit={handleSumit}>
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
              <div className="button-login">
                <button type="submit">Iniciar sesión</button>
              </div>
              {
                error && <p>{error}</p>
              }
            </form>

            <div className="w-full flex justify-between gap-[20px]">
              <Link
                className="text-[14px] text-subtitle no-underline hover:text-title"
                href="/"
              >
                Olvidé mi contraseña
              </Link>
              <Link
                className="text-[14px] text-subtitle no-underline hover:text-title"
                href="/register"
              >
                Registrarme
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export { Hero };
