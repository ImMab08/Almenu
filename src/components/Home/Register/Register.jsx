'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IconCheck, IconRedirectArrow } from "./Icons";
import FormRegister from "./FormRegister";

const Register = () => {

  return (
    <main className="w-full h-full laptop:h-screen laptop:flex justify-center items-center">
      <section className="w-full h-full laptop:h-full laptop:flex">
        <div className="w-full laptop:w-2/5 h-full bg-primary relative">
          <div className="w-full h-full flex flex-col justify-center items-center laptop:justify-start laptop:items-start p-5">
            <h1 className="text-title text-[2rem] laptop:text-[2.5rem] leading-[2rem] laptop:leading-[2.8rem] font-bold laptop:font-extrabold">Solamente Con Registrarte Podrás</h1>
            <div className="mt-[15px] ml-[10px]">
              <div className=" flex items-center mt-1 laptop:mt-0">
                <div className="mr-[10px]">
                  <IconCheck />
                </div>
                <p className="text-title font-medium text-sm laptop:text-base">Administrar la contabilidad de tu negocio.</p>
              </div>
              <div className="flex items-center mt-1 laptop:mt-0">
                <div className="mr-[10px]">
                  <IconCheck />
                </div>
                <p className="text-title font-medium text-sm laptop:text-base">Cargar fácilmente todo tu inventario y llevar un control de tu stock.</p>
              </div>
              <div className="flex items-center mt-1 laptop:mt-0">
                <div className="mr-[10px]">
                  <IconCheck />
                </div>
                <p className="text-title font-medium text-sm laptop:text-base">Gestionar tus clientes y proveedores.</p>
              </div>
            </div>

            <div className="form-register mt-10 laptop:hidden">
              <div className="w-[150px] h-[100px] relative">
                <Image
                  width={150} height={150} className="object-contain"
                  src="/img/logo-almenu.png"
                  alt=""
                />
              </div>
            </div>

            <div className="text-title flex flex-col justify-center laptop:block mt-5 laptop:mt-0 laptop:absolute laptop:bottom-5">
              <p className="text-base font-medium text-center laptop:text-left">¿Ya tienes una cuenta?</p>
              <div className="flex justify-center">
                <Link className="text-[14px] font-normal no-underline text-subtitle flex items-center" href="/">
                  Inicia sesión aquí.
                  <div className="ml-[5px]">
                    <IconRedirectArrow />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden laptop:block absolute bottom-0 right-0">
            <Image
              width={310} height={310} className="object-contain"
              src="/img/img-register.png"
              alt=""
            />
          </div>
        </div>
        
        <FormRegister />
        
      </section>
    </main>
  );
};

export default Register;
