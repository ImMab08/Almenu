import React from "react";
import Image from "next/image";
import Link from "next/link";

import { HeroNav } from "./HeroNav";
import { plans } from "./config";

import { IconRightArrow, IconMapa, IconMapaMobile, IconCheckPlans,  } from "./Icons";

const Hero = () => {
  const Plans = plans.map(({title, description, price, priceSpan, button, benefitsOne, benefitsTwo, benefitsThree}) => {
    return (
      <div key={title} className="bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-500 mt-2">{description}</p>
          <div className="flex mt-5 justify-center">
            <p className="text-black text-4xl font-bold">{price}</p>
            <p className="text-gray-500 text-sm leading-[50px]">{priceSpan}</p>
          </div>
          <div className="mt-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-primary-foreground h-11 rounded-md px-8 w-full ">
              {button}
            </button>
          </div>
          <ul className="space-y-2 mt-6">
            <li className="flex items-center">
              <IconCheckPlans />
              {benefitsOne}
            </li>
            <li className="flex items-center">
              <IconCheckPlans />
              {benefitsTwo}
            </li>
            <li className="flex items-center">
              <IconCheckPlans />
              {benefitsThree}
            </li>
          </ul>
        </div>
      </div>
    )
  });

  return (
    <>
      <main className="">
        <nav className="w-full h-full">
          <HeroNav />
        </nav>

        <section className="w-full h-screen tablet:flex tablet:flex-col laptop:flex-row  justify-center items-center mt-[70px] tablet:mt-[80px] laptop:mt-10 p-5 tablet:p-10 laptop:p-10">
          <div className="w-full h-[80%] flex flex-col justify-center tablet:block tablet:h-auto laptop:w-3/5">
            <h1 className="text-[2rem] mobileLG:text-[2.5rem] tablet:text-[3.5rem] laptop:text-[3rem] desktopLG:text-[4rem] leading-[22px] mobileLG:leading-[32px] tablet:leading-[72px] laptop:leading-[52px] desktopLG:leading-[72px] font-extrabold text-secondary ">Revolución</h1>
            <h2 className="text-[3rem] mobileLG:text-[3.5rem] tablet:text-[5.25rem] laptop:text-[4.25rem] desktopLG:text-[5rem] leading-[50px] font-black mb-[5px] text-secondary "><span className="">Digital</span> Para</h2>
            <h3 className="text-[2.25rem] mobileLG:text-[2.75rem] tablet:text-[4rem] laptop:text-[3rem] leading-[20px] desktopLG:text-[4rem] mobileLG:leading-[32px] tablet:leading-[80px] laptop:leading-[50px] desktopLG:leading-[72px] pl-[20px] tablet:pl-[32px] laptop:pl-[30px] font-extrabold text-secondary">Tu Negocio.</h3>
            <p className="mt-8 text-sm mobileLG:text-base laptop:text-lg desktopLG:text-xl laptop:mt-[25px] laptop:w-[500px] ">
              Optimiza y lleva al siguiente nivel tu restaurante con Almenú. Un
              software hecho a la medida para la gestión de de pequeños,
              medianos y grandes restaurantes.
            </p>
            <div className="aboutMore w-[140px] h-auto flex items-center cursor-pointer mt-5 laptop:mt-[30px]">
              <a className="bg-primary text-secondary no-underline text-base laptop:text-base transition" href="">Conoce más</a>
              <IconRightArrow />
            </div>
          </div>

          <div className="hidden desktop:block">
            <p className="text-center">¿Ya tienes una cuenta?</p>
            <div className="w-[auto] h-[350px] tablet:w-[400px] p-[25px] bg-primary flex flex-col justify-between items-center rounded-3xl shadow-2xl mt-5 laptop:mt-0">
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

        <section className="hidden w-full h-screen laptop:flex items-center justify-center px-[70px]">
          <IconMapa />
          <div className="w-full h-[80%] flex flex-col justify-center items-center tablet:block tablet:h-auto laptop:w-3/5">
            <h2 className="desktop:text-[2rem] ml-20 font-extrabold text-secondary leading-[5px]">¡Con más de</h2>
            <h2 className="desktop:text-[3.5rem] text-center font-extrabold text-secondary leading-[75px]"> <span>+ 2.000</span> clientes</h2>
            <h2 className="desktop:text-[2rem] text-center font-extrabold text-secondary leading-3">En toda Colombia!</h2>
          </div>
        </section>

        <section className="laptop:hidden w-full h-screen items-center justify-center px-[20px]">
          <div className="w-full h-auto flex flex-col justify-center items-center">
            <h2 className="text-[1.8rem] mr-[7.5rem] font-extrabold text-secondary leading-3">¡Con más de</h2>
            <h2 className="text-[2.3rem] text-center font-extrabold text-secondary leading-[50px]"> <span>+ 2.000</span> clientes</h2>
            <h2 className="text-[1.8rem] mr-[2rem] text-center font-extrabold text-secondary leading-3">En toda Colombia!</h2>
          </div>
          <IconMapaMobile />
        </section>

        <section className="w-full h-auto flex flex-col justify-center p-5 tablet:p-10  ">
          <div className="w-[200px] h-[200px] top-1 left-[130px] relative mobileLG:left-[60px] tablet:w-[350px] tablet:h-[350px] tablet:top-[10px] tablet:left-[350px] laptop:w-[300px] laptop:h-[300px] laptop:top-[1px] laptop:left-[750px] z-[1]">
            <Image layout="fill" objectFit="contain" src="/img/img-hero.png" alt="" />
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
                <div className="grid lg:grid-cols-3 gap-6">
                  {Plans}
                </div>
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
            <Image layout="fill" objectFit="contain" src="/img/aboutwe.png" alt="" />
          </div>
        </section>

        <section className="hidden w-full h-screen laptop:flex justify-center">
          <div className="relative w-full h-full">
            <Image layout="fill" objectFit="contain" src="/img/banner.png" alt="" />
          </div>
        </section>

        <footer className="w-full h-auto bg-footerBg shadow-xl flex flex-col justify-center items-center">
          <div className="w-full h-full p-5 tablet:p-10 laptop:p-10 flex flex-col laptop:flex-row laptop:justify-between">
            <div className="w-[128px] h-[70px] relative laptop:w-[140px] laptop:h-[70px]">
              <Image layout="fill" objectFit="contain" src="/img/logo-almenu.png" alt="" />
            </div>
            <div className="w-full flex flex-col laptop:w-[80%] tablet:grid tablet:grid-cols-3 justify-around pt-5">
              <div className="flex flex-col">
                <h3 className="text-lg desktop:text-xl font-bold">Almenú</h3>
                <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">almenusoport@almenu.com</a>
                <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">+57 123 456 7890</a>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg desktop:text-xl font-bold">Soluciones</h3>
                <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Para negocios</a>
                <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Para restaurantes</a>
                <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Para empresas</a>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg desktop:text-xl font-bold">Siguenos</h3>
                <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Términos y condiciones</a>
                <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Política y privacidad</a>
                <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href=""></a>
              </div>
            </div>
          </div>

          <div className="w-full h-full flex justify-center items-center p-2">
            <p className="text-[14px] font-medium">Copyright © Almenú 2024</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Hero;