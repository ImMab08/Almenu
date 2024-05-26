import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <main className="">
        <nav className="w-full h-auto laptop:h-[80px] bg-primary fixed top-0 z-50 shadow-xl flex justify-between items-center px-5 tablet:px-[40px] tablet:py-[5px] laptop:px-16">
          <div className="w-[40px] h-[40px] relative mobileLG:w-[50px] mobileLG:h-[50px] tablet:w-[60px] tablet:h-[60px] laptop:hidden ">
            <Image layout="fill" objectFit="contain" src="/img/bars.svg" alt="" />
          </div>
          <div className="w-[120px] h-[50px] mobileLG:w-[130px] mobileLG:h-[60px] tablet:w-[150px] tablet:h-[70px] laptop:w-[160px] laptop:h-[80px] relative">
            <a href="index.html">
              <Image layout="fill" objectFit="contain" src="/img/logo-almenu.png" alt="" />
            </a>
          </div>
          <div className="container-links hidden laptop:flex justify-evenly items-center w-3/5 ">
            <a className="relative no-underline text-[16px] desktopLG:text-[18px] font-semibold text-secondary transition-colors hover:text-tertiary" href="">Sobre Nosotros</a>
            <a className="relative no-underline text-[16px] desktopLG:text-[18px] font-semibold text-secondary transition-colors hover:text-tertiary" href="">Planes y Suscripciones</a>
            <a className="relative no-underline text-[16px] desktopLG:text-[18px] font-semibold text-secondary transition-colors hover:text-tertiary" href="">Contacto</a>
          </div>
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
              <svg id="right-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
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
                  <a href="home.html">Iniciar sesión</a>
                </div>
              </form>

              <div className="w-full flex justify-between gap-[20px]">
                <a className="text-[14px] text-secondary no-underline hover:text-tertiary" href="">Olvidé mi contraseña</a>
                <a className="text-[14px] text-secondary no-underline hover:text-tertiary" href="register.html">Registrarme</a>
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

        <section className="w-full h-screen flex flex-col justify-center p-5 tablet:p-10 laptop:p-10">
          <div className="w-[300px] h-[300px] top-1 left-[30px] relative mobileLG:left-[60px] tablet:w-[350px] tablet:h-[350px] tablet:top-[10px] tablet:left-[350px] laptop:w-[450px] laptop:h-[350px] laptop:top-1 laptop:left-[450px] z-[1]">
            <Image layout="fill" objectFit="contain" src="/img/img-hero.png" alt="" />
          </div>
          <div class="w-full h-[300px] relative z-10 bg-secondary rounded-[20px]  shadow-2xl">

          </div>
        </section>

        <section className="hidden w-full h-screen laptop:flex justify-center">
          <div class="relative w-full h-full">
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
              <div class="flex flex-col">
                <h3 className="text-lg desktop:text-xl font-bold">Soluciones</h3>
                <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Para negocios</a>
                <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Para restaurantes</a>
                <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Para empresas</a>
              </div>
              <div class="flex flex-col">
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
