import React from "react";
import Link from "next/link";

import { IconRightArrow } from "./Icons";

function Hero() {

  return (
    <main className="">
      <section className="hero w-full h-screen bg-bgMain tablet:flex tablet:flex-col laptop:flex-row justify-center items-center mt-[50px] tablet:mt-[80px] laptop:mt-10 p-5 tablet:p-10 laptop:p-10">
        
        <div className="w-full h-[80%] flex flex-col justify-center tablet:block tablet:h-auto laptop:w-3/5 relative z-10">
          <h1 className="text-[2rem] mobileLG:text-[2.5rem] tablet:text-[3.5rem] laptop:text-[3rem] desktopLG:text-[4rem] leading-[22px] mobileLG:leading-[32px] tablet:leading-[72px] laptop:leading-[52px] desktopLG:leading-[72px] font-extrabold text-primary ">Revolución</h1>
          <h2 className="text-[3rem] mobileLG:text-[3.5rem] tablet:text-[5.25rem] laptop:text-[4.25rem] desktopLG:text-[5rem] leading-[50px] font-black mb-[5px] text-primary ">
            <span className="">Digital</span> Para
          </h2>
          <h3 className="text-[2.25rem] mobileLG:text-[2.75rem] tablet:text-[4rem] laptop:text-[3rem] leading-[20px] desktopLG:text-[4rem] mobileLG:leading-[32px] tablet:leading-[80px] laptop:leading-[50px] desktopLG:leading-[72px] pl-[20px] tablet:pl-[32px] laptop:pl-[30px] font-extrabold text-primary">Tu Negocio.</h3>
          <p className="text-primary mt-8 text-sm mobileLG:text-base laptop:text-lg desktopLG:text-xl laptop:mt-[25px] laptop:w-[500px] ">
            Optimiza y lleva al siguiente nivel tu restaurante con Almenú. Un
            software hecho a la medida para la gestión de de pequeños,
            medianos y grandes restaurantes.
          </p>
          <div className="aboutMore w-[140px] h-auto flex items-center cursor-pointer mt-5">
            <Link className="bg-secondary text-primary no-underline hover:underline text-base laptop:text-base transition" href="/about">Conoce más</Link>
            <IconRightArrow />
          </div>
        </div>

        <div className="hidden desktop:block relative z-10">
          <p className="text-center text-primary">¿Ya tienes una cuenta?</p>
          <div className="w-[auto] h-[350px] tablet:w-[400px] p-[25px] bg-primary flex flex-col justify-between items-center rounded-3xl shadow-2xl mt-5 laptop:mt-0">
            <div className="flex justify-between items-center">
              <h2 className="text-[2rem] font-extrabold text-secondary">Iniciar Sesión</h2>
            </div>
            <form action="">
              <div className="input-field">
                <input className="input" type="text" placeholder=" " required/>
                <label className="label_name">Correo electronico</label>
              </div>
              <div className="input-field">
                <input className="input" type="password" placeholder=" " required/>
                <label className="label_name">Contraseña</label>
              </div>
              <div className="button">
                <Link href="/inicio">Iniciar sesión</Link>
              </div>
            </form>
            <div className="w-full flex justify-between gap-[20px]">
              <Link className="text-[14px] text-secondary no-underline hover:text-tertiary" href="/">Olvidé mi contraseña</Link>
              <Link className="text-[14px] text-secondary no-underline hover:text-tertiary" href="/register">Registrarme</Link>
            </div>
          </div>
        </div>
        
      </section>

        {/* <div className="custom-shape-divider-top-1718826329">
          <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}

        {/* <section className="w-full h-screen desktop:hidden px-2">
          <p className="text-center">¿Ya tienes una cuenta?</p>
          <div className="w-[auto] h-[450px] tablet:w-[400px] p-[25px] bg-primary flex flex-col justify-between items-center rounded-3xl shadow-2xl mt-5 laptop:mt-0">
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
        </section> */}

        {/* 

        <section className="w-full h-auto flex flex-col justify-center p-5 tablet:p-10  ">
          <div className="w-[200px] h-[200px] top-1 left-[130px] relative mobileLG:left-[60px] tablet:w-[350px] tablet:h-[350px] tablet:top-[10px] tablet:left-[350px] laptop:w-[300px] laptop:h-[300px] laptop:top-[1px] laptop:left-[750px] z-[1]">
            <Image layout="fill" objectFit="contain" src="/img/img-hero.png" alt=""/>
          </div>
          <section className="w-auto h-auto bg-secondary rounded-[20px] shadow-2xly-32">
            <div className="w-full py-12">
              <div className="grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                  <div className="w-full flex flex-col items-center">
                    <h2 className="text-4xl desktop:text-5xl text-primary font-bold tracking-tight">Nuestros Planes</h2>
                    <p className="text-primary">Encuentra el plan perfecto para tu negocio.</p>
                  </div>
                </div>
                <div className="grid lg:grid-cols-3 gap-6">{Plans}</div>
              </div>
            </div>
          </section>
        </section>

        <section className="w-full h-screen flex items-center justify-center px-[70px]">
          <div className="w-full h-[80%] flex flex-col justify-center items-center tablet:block tablet:h-auto laptop:w-3/5">
            <h1 className="text-[2rem] text-center mobileLG:text-[2.5rem] tablet:text-[3.5rem] laptop:text-[2rem] desktopLG:text-[4rem] leading-[22px] mobileLG:leading-[32px] tablet:leading-[72px] laptop:leading-[18px] desktopLG:leading-[72px] font-extrabold text-secondary ">Con nuestro</h1>
            <h2 className="text-[3rem] text-center mobileLG:text-[3.5rem] tablet:text-[5.25rem] laptop:text-[3rem] desktopLG:text-[5rem] leading-[50px] font-black mb-[5px] text-secondary "><span className="">Sistema </span>Pos</h2>
            <h3 className="text-[2.25rem] text-center mobileLG:text-[2.75rem] tablet:text-[4rem] laptop:text-[2rem] laptop:ml-[5rem] leading-[20px] desktopLG:text-[4rem] mobileLG:leading-[32px] tablet:leading-[80px] laptop:leading-[20px] desktopLG:leading-[72px] pl-[20px] tablet:pl-[32px] laptop:pl-[30px] font-extrabold text-secondary">Tu Negocio.</h3>
            <p className="mt-8 text-sm text-end mobileLG:text-base laptop:text-lg desktopLG:text-xl laptop:mt-[25px] laptop:w-[500px]">
              Optimiza y lleva al siguiente nivel tu restaurante con Almenú. Un
              software hecho a la medida para la gestión de de pequeños,
              medianos y grandes restaurantes.
            </p>
          </div>
          <div className="w-[550px] h-[400px] relative">
            <Image layout="fill" objectFit="contain" src="/img/aboutwe.png" alt=""/>
          </div>
        </section>

        <section className="hidden w-full h-screen laptop:flex justify-center">
          <div className="relative w-full h-full">
            <Image layout="fill" objectFit="contain" src="/img/banner.png" alt=""/>
          </div>
        </section> */}
      </main>
  );
}

export { Hero };
