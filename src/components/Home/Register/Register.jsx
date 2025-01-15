'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

import FormRegister from "./FormRegister";
import { IconCheck, IconTouch } from "@/icons";

const Register = () => {

  return (
    <main className="w-full h-full 2xl:h-screen 2xl:flex justify-center items-center">
      <section className="w-full h-full 2xl:h-full 2xl:flex">
        <div className="w-full 2xl:w-2/5 h-full bg-gray-100 relative">
          <div className="w-full h-full flex flex-col justify-center items-center 2xl:justify-start 2xl:items-start p-5">
            <h1 className="text-text font-bold 2xl:font-extrabold text-3xl 2xl:text-5xl leading-8 2xl:leading-10">Solamente con registrarte podrás</h1>
            <div className="mt-4 ml-3">
              <div className=" flex items-center mt-1">
                <div className="mr-2">
                  <IconCheck width={24} height={24} />
                </div>
                <p className="text-text font-medium text-sm 2xl:text-base">Administrar la contabilidad de tu negocio.</p>
              </div>
              <div className="flex items-center mt-1 2xl:mt-0">
                <div className="mr-2">
                  <IconCheck width={24} height={24} />
                </div>
                <p className="text-text font-medium text-sm 2xl:text-base">Cargar fácilmente todo tu inventario y llevar un control de tu stock.</p>
              </div>
              <div className="flex items-center mt-1 2xl:mt-0">
                <div className="mr-2">
                  <IconCheck width={24} height={24} />
                </div>
                <p className="text-text font-medium text-sm 2xl:text-base">Gestionar tus clientes y proveedores.</p>
              </div>
            </div>

            <div className="form-register mt-10 2xl:hidden">
              <div className="w-[150px] h-[100px] relative">
                <Image
                  width={150} height={150} className="object-contain"
                  src="/img/logo-almenu.png"
                  alt=""
                />
              </div>
            </div>

            <div className="text-text  flex flex-col justify-center 2xl:block mt-5 2xl:mt-0 2xl:absolute 2xl:bottom-5">
              <p className="text-base font-semibold text-center 2xl:text-left">¿Ya tienes una cuenta?</p>
              <div className="flex justify-center">
                <Link className="text-sm font-normal no-underline text-text/90 flex items-center" href="/login">
                  Inicia sesión aquí.
                  <div className="ml-1">
                    <IconTouch width={18} height={18} className="fill-text/90" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden 2xl:block absolute bottom-0 right-0">
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
