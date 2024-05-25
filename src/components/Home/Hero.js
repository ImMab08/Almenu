import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <main className="">
        <nav className="w-full h-[75px] bg-primary fixed top-0 z-50 shadow-xl flex justify-between items-center px-[65px]">
          <div className="w-[150px] h-[70px]">
            <a href="index.html">
              <Image width={150} height={70} className=" object-contain" src="/img/logo-almenu.png" alt="" />
            </a>
          </div>
          <div className="container-links flex justify-evenly items-center w-2/5">
            <a className="relative no-underline text-[16px] font-semibold text-secondary transition-colors hover:text-tertiary" href="">Sobre Nosotros</a>
            <a className="relative no-underline text-[16px] font-semibold text-secondary transition-colors hover:text-tertiary" href="">Planes y Suscripciones</a>
            <a className="relative no-underline text-[16px] font-semibold text-secondary transition-colors hover:text-tertiary" href="">Contacto</a>
          </div>
        </nav>

        <section className="w-full h-screen flex justify-center items-center mt-[50px]">
          <div className="w-3/5 h-auto">
            <h1 className="text-[2rem] font-black text-secondary leading-10">Revolución</h1>
            <h2 className="text-[4rem] font-bold mb-[5px] text-secondary leading-[50px]">
              <span className="">Digital</span> Para
            </h2>
            <h3 className="text-[3rem] font-extrabold leading-[50px] pl-[30px] text-secondary">Tu Negocio.</h3>
            <p className="mt-[25px] w-[500px]">
              Optimiza y lleva al siguiente nivel tu restaurante con Almenú. Un
              software hecho a la medida para la gestión de de pequeños,
              medianos y grandes restaurantes.
            </p>
            <div className="aboutMore w-[130px] h-auto flex items-center cursor-pointer mt-[30px]">
              <a className="bg-primary text-secondary no-underline text-base transition" href="">Conoce más</a>
              <svg id="right-icon" width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
          </div>

          <div className="w-[auto] h-[350px] p-[25px] bg-primary flex flex-col justify-between items-center rounded-3xl shadow-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-[2rem] font-extrabold text-secondary">Iniciar Sesión</h2>
            </div>

            <form action="">
              <div className="input-field">
                <input className="input" type="text" placeholder=" " required />
                <label className="label_name">Correo electronico</label>
              </div>

              <div className="input-field">
                <input className="input" type="text" placeholder=" " required />
                <label className="label_name">Contraseña</label>
              </div>

              <div className="button">
                <a href="home.html">Iniciar sesión</a>
              </div>
            </form>

            <div className="w-full flex justify-between gap-[20px]">
              <a className="text-[14px] text-secondary no-underline hover:text-tertiary" href="">Olvidé mi contraseña</a>
              <a className="text-[14px] text-secondary no-underline hover:text-tertiary" href="register.html">Registrarme</a>
            </div>
          </div>
        </section>

        <section className="w-full h-screen flex justify-center">
          <div className="w-[350px] h-[350px] absolute top-[450px] left-[450px]">
            <Image width={350} height={350} className="object-contain" src="/img/img-hero.png" alt="" />
          </div>
          <div class="w-[75%] h-[300px] relative bg-secondary rounded-[20px] mt-[170px] shadow-2xl">

          </div>
        </section>

        <section class="w-full h-screen flex justify-center">
          <div class="relative w-full h-full">
            <Image layout="fill" objectFit="contain" src="/img/banner.png" alt="" />
          </div>
        </section>

        <footer className="w-full h-[200px] bg-footerBg shadow-xl flex flex-col justify-center items-center">
          <div className="w-[90%] h-[80%] flex">
            <div className="w-[30%] h-full relative">
              <Image width={150} height={80} objectFit="contain" src="/img/logo-almenu.png" alt="" />
            </div>
            <div className="w-[70%] flex justify-around py-5">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">Almenú</h3>
                <a className="my-[5px] text-[14px] no-underline cursor-pointer" href="">almenusoport@almenu.com</a>
                <a className="my-[5px] text-[14px] no-underline cursor-pointer" href="">+57 123 456 7890</a>
              </div>
              <div class="flex flex-col">
                <h3 className="text-lg font-bold">Soluciones</h3>
                <a className="my-[5px] text-[14px] no-underline cursor-pointer" href="">Para negocios</a>
                <a className="my-[5px] text-[14px] no-underline cursor-pointer" href="">Para restaurantes</a>
                <a className="my-[5px] text-[14px] no-underline cursor-pointer" href="">Para empresas</a>
              </div>
              <div class="flex flex-col">
                <h3 className="text-lg font-bold">Siguenos</h3>
                <a className="my-[5px] text-[14px] no-underline cursor-pointer" href="">Términos y condiciones</a>
                <a className="my-[5px] text-[14px] no-underline cursor-pointer" href="">Política y privacidad</a>
                <a className="my-[5px] text-[14px] no-underline cursor-pointer" href=""></a>
              </div>
            </div>
          </div>

          <div className="w-full h-full flex justify-center items-center">
            <p className="text-[13px] font-medium">Copyright © Almenú 2024</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Hero;
