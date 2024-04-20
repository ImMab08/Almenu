/* eslint-disable jsx-a11y/alt-text */
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const handleCloseMenu = () => {
    setOpenProfileMenu(false);
  };

  return (
    <header className="flex text-white bg-[#0b2131] w-full h-[4rem] justify-around px-10">
      <div className='flex items-center'>
        <Image width={150} height={150} src='/img/logo-almenu.png'></Image>
      </div>
      <div className="flex w-full items-center justify-center gap-10">
        <Link href="" className="text-xl font-bold">Menú</Link>
        <Link href="" className="text-xl font-bold">Productos</Link>
        <Link href="" className="text-xl font-bold">Bebidas</Link>
        <Link href="" className="text-xl font-bold">Productos</Link>
      </div>
      <div className="flex items-center justify-center cursor-pointer" onClick={() => setOpenProfileMenu(!openProfileMenu)}>
        <svg width={45} height={45} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" ></g>
          <g id="SVGRepo_iconCarrier">
            <path opacity="0.4" d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z" fill="#000"></path>
            <path d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z" fill="#fff"></path>
            <path d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z" fill="#fff"></path>
          </g>
        </svg>
      </div>
      {openProfileMenu && (
        <div className=" absolute w-1/5 h-full right-0 bg-white shadow-lg p-4 transition-transform duration-300 transform translate-x-0">
          <div className='flex flex-col justify-between h-full w-full'>
            <div>
              <div className='border-b-2 border-black mb-5 py-2'>
                <Image onClick={handleCloseMenu} width={30} height={30} className='cursor-pointer' src='/img/close.svg'></Image>
              </div>
              <div className='flex flex-col'>
                <Link href="/perfil" className='text-black'>Perfil</Link>
                <Link href="/configuracion" className='text-black'>Configuración</Link>
              </div>
            </div>

            <div className=' border-t-2 border-black mt-10 py-2'>
              <Link href="/log-out" className='text-black'>Cerrar sesión</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
