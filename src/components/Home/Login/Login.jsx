'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    console.log(e.target.value, e.targe.name)
  };
  return (
    <main className="w-full h-screen bg-secondary hero">
      <section className=" relative w-full h-full flex flex-col items-center justify-center px-2">
        <div className="w-[350px] h-[450px] tablet:w-[400px] p-[25px] bg-primary flex flex-col justify-between items-center rounded-3xl shadow-2xl mt-5 laptop:mt-0">
          <Image width={150} height={150} src="/img/logo-almenu.png" alt="" />
          <div className="flex justify-between items-center">
            <h2 className="text-[1.8rem] sm:text-[2rem] font-extrabold text-secondary">Iniciar Sesión</h2>
          </div>

          <form>
          <div className="input-field">
            <input
              className="input"
              type="text"
              name="email"
              onChange={handleSubmit}
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
              onChange={handleSubmit}
              placeholder=" "
              required
            />
            <label className="label_name">Contraseña</label>
          </div>

          <div className="button-login">
            <button type="submit">Iniciar sesión</button>
          </div>
        </form>
          
          <div className="w-full flex justify-between gap-[20px]">
            <a className="text-[14px] text-secondary no-underline hover:text-tertiary" href="">Olvidé mi contraseña</a>
            <Link className="text-[14px] text-secondary no-underline hover:text-tertiary" href="/register">Registrarme</Link>
          </div>
        </div>
        <Link className="text-white text-base sm:text-lg font-semibold mt-5 hover:underline" href="/">Volver al inicio</Link>
      </section>
    </main>
  )
}

export default Login;