import React from "react";
import { IconLocate } from "./icons/IconLocate";
import { IconPhone } from "./icons/IconPhone";

function Contact() {
  return (
      <section className=" bg-secondary w-full flex flex-col md:flex-row px-5 sm:px-20 py-12 md:py-24 lg:py-32 md:gap-8">

        <div className="space-y-4">
          <h2 className="text-3xl text-title font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ponte en Contacto con Nosotros
          </h2>
          <p className="max-w-[600px] text-muted-foreground text-subtitle text-lg">
            ¿Tienes alguna pregunta o deseas una accesoria personalizada? 
            Rellena el siguiente formulario y nos pondremos en contacto 
            contigo lo antes posible para solucionar todas tus dudas.
          </p>
          <div className=" items-center space-y-2">
            <div className="flex space-x-2">
              <IconPhone />
              <span className="text-subtitle text-base">+57 123 457 7890</span>
            </div>
            <div className="flex space-x-2">
              <IconLocate />
              <span className="text-subtitle text-base">
                Cali - Valle del Cauca, Colombia.
              </span>
            </div>
          </div>
        </div>

        <section className="w-full h-screen md:w-auto md:h-auto flex flex-col justify-center">
          <form className="grid gap-4 border bg-primary border-secondary rounded-lg p-5 shadow-xl space-y-5">
            <div className="space-y-2 sm:space-y-1 flex flex-col items-center justify-center border-b-2 border-secondary pb-8">
              <h1 className="text-2xl sm:text-3xl font-semibold text-title">Contactanos</h1>
              <p className="text-xs sm:text-sm w-3/5 text-center text-subtitle">Rellena el siguiente formulario y nos pondremos en contacto contigo lo antes posible.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-base text-title font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">Nombre</label>
                <input className="flex h-10 w-full rounded-md border border-secondary border-input px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-lg focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50" id="name" placeholder="Juanito Pérez"/>
              </div>
              <div className="space-y-2">
                <label className="text-base text-title font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Correo Eléctronico</label>
                <input className="flex h-10 w-full rounded-md border border-secondary border-input px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-lg focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="ejemplo@correo.com" type="email"/>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-base text-title font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="message">Mensaje</label>
              <textarea className="flex w-full rounded-md border border-secondary border-input px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]" id="message" placeholder="Ingresa tu consulta, duda o inquietud."></textarea>
            </div>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 bg-title text-primary hover:bg-bg hover:text-title h-10 px-4 py-2 justify-self-end" type="submit">
              Enviar
            </button>
          </form>
        </section>
        
      </section>
  );
}

export { Contact };
