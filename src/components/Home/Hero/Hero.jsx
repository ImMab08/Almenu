"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { IconRightArrow } from "./Icons";
import { login } from "@/api/auth/login";
import { IconTouch } from "@/icons";
import Image from "next/image";

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isAuthenticated = await login(credentials.email, credentials.password);

    if (isAuthenticated) {
      router.push('/inicio'); 
    } else {
      setError('El correo o la contraseña son incorrectos.');
    }

  }

  return (
    <main>
      <section className="w-full h-screen p-36 bg-[url('/img/background_bottom.png')] bg-bottom bg-opacity-10 bg-no-repeat">
        <div className="w-full h-auto flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[2rem] mobileLG:text-[2.5rem] tablet:text-[3.5rem] laptop:text-[3rem] desktopLG:text-[4rem] leading-[22px] mobileLG:leading-[32px] tablet:leading-[72px] laptop:leading-[52px] desktopLG:leading-[72px] font-extrabold text-text ">
              Revolución
            </h1>
            <h2 className="text-[3rem] mobileLG:text-[3.5rem] tablet:text-[5.25rem] laptop:text-[4.25rem] desktopLG:text-[5rem] leading-[50px] font-black mb-[5px] text-text ">
              <span className="text-blue-600">Digital</span> Para
            </h2>
            <h3 className="text-[2.25rem] mobileLG:text-[2.75rem] bott tablet:text-[4rem] laptop:text-[3rem] leading-[20px] desktopLG:text-[3.5rem] mobileLG:leading-[32px] tablet:leading-[80px] laptop:leading-[50px] desktopLG:leading-[72px] pl-[20px] tablet:pl-[32px] laptop:pl-[30px] font-extrabold text-text">
              Restaurantes
            </h3>
          </div>
          <p className="text-text text-md leading-5 text-center laptop:w-[500px] ">
            <span className="font-bold">
              Optimiza y lleva al siguiente nivel tu restaurante con Almenú
            </span>
            .
            <br /> Un software hecho a la medida para la gestión de de pequeños,
            medianos y grandes restaurantes.
          </p>

          <div className="flex flex-col items-center space-y-1 mt-10">
            <Link
              href="/register"
              className=" flex space-x-10 py-2 px-5 rounded-lg text-white text-lg font-bold hover:shadow-lg hover:duration-300 bg-gradient-to-r from-blue-600 to-teal-500"
            >
              CREA TU CUENTA AHORA
              <IconTouch className="ml-2 mt-0.5" width={22} height={22} />
            </Link>

            <p className="text-text text-sm font-semibold">¡Sin costo!</p>
          </div>
        </div>
      </section>
      <section className="hidden w-full h-auto px-36 pt-36 bg-[url('/img/background_top.png')] bg-top bg-opacity-80 bg-no-repeat">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center w-1/4 ml-40 space-y-10">
            <p className="text-4xl font-bold text-teal-600">La favorita de los <br />restaurantes</p>
            <p className="text-base text-text leading-5">
              Consectetur id dolor Lorem velit non labore fugiat cupidatat ipsum
              proident nostrud. Reprehenderit cillum cillum officia proident
              nisi. Aliquip commodo reprehenderit reprehenderit aliqua nostrud
              reprehenderit labore culpa magna veniam ea voluptate.
            </p>
            <Link
              href="/register"
              className="flex space-x-10 py-2 px-5 rounded-lg text-white text-lg justify-center font-bold hover:shadow-lg hover:duration-300 bg-gradient-to-r from-blue-600 to-teal-500"
            >
              Registrate ¡GRATIS!
              <IconTouch className="ml-2 mt-0.5" width={22} height={22} />
            </Link>
          </div>
          
          <div className="flex justify-end items-end mt-32">
            <Image width={500} height={1000} src="/img/mockupmobile.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}

export { Hero };
