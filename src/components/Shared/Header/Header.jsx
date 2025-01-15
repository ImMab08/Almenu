"use client";
import Link from "next/link";

import { useMenuMobile } from "@/hooks/CustomHook";
import { IconArrowDown, IconBars, IconClose, IconLogo } from "@/icons";

function Header() {
  const [closeMenu] = useMenuMobile((state) => [state.closeMenu]);
  const [isOpen, toggleMenu] = useMenuMobile((state) => [
    state.isOpen,
    state.toggleMenu,
  ]);

  return (
    <section className="md:px-36">
      <div className="w-full h-auto md:h-28 flex justify-between items-center bg-white">
        <div className="flex md:hidden w-full justify-between items-center cursor-pointer p-4">
          <IconLogo width={120} height={50} />
          <div className="flex space-x-1">
            <button className="rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-3 text-sm text-white">
              Iniciar Sesión 
            </button> 
            <IconBars
              width={36}
              height={36}
              className=""
              onClick={toggleMenu}
            />            
          </div>
        </div>

        <IconLogo width={145} height={100} className="hidden md:block" />

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="py-2 px-5 text-lg text-blue-500 font-semibold hover:scale-110 transition duration-500"
          >
            Inicio
          </Link>
          <div className="flex items-center py-2 px-5 space-x-1 hover:scale-110 transition duration-500">
            <Link href="/register" className="text-lg text-text font-semibold">
              Software
            </Link>
            <IconArrowDown width={24} height={24} />
          </div>
          <Link
            href="/register"
            className="py-2 px-5 text-lg text-text font-semibold hover:scale-110 transition duration-500"
          >
            Planes
          </Link>
          <Link
            href="/about"
            className="py-2 px-5 text-lg text-text font-semibold hover:scale-110 transition duration-500"
          >
            Nosotros
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-5">
          <Link
            href="/register"
            className="py-2 px-5 rounded-full text-sm font-medium hover:shadow-lg hover:duration-300 text-white bg-gradient-to-r from-blue-600 to-teal-500"
          >
            ¡Empieza GRATIS!
          </Link>

          <div class="rounded-full bg-gradient-to-r from-teal-400 to-blue-500 p-[1.5px]">
            <div class="flexl items-center py-1 px-5 justify-center bg-white rounded-full">
              <Link href="/login" className="text-sm font-medium text-text">
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-y-0 left-0 w-full h-full bg-white transform translate-x-0 transition-transform duration-300 ease-in-out 2xl:hidden">
            <div className="p-4 w-full h-full flex flex-col space-y-4">
              <div className="flex justify-end border-b-2 pb-2 border-text">
                <button className="focus:outline-none" onClick={closeMenu}>
                  <IconClose width={26} height={26} />
                </button>
              </div>
              <div className="flex flex-col w-full h-full md:hidden items-center justify-center">
                <Link href="/" className="py-2 px-5 text-lg text-blue-500 font-semibold">Inicio</Link>
                <Link href="/register" className="py-2 px-5 text-lg text-text font-semibold">Software</Link>
                <Link href="/register" className="py-2 px-5 text-lg text-text font-semibold">Planes</Link>
                <Link href="/about" className="py-2 px-5 text-lg text-text font-semibold">Nosotros</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export { Header };
