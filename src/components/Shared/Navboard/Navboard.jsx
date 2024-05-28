import React from 'react'
import Image from 'next/image'

import { IconDownArrow } from './icons'
import { IconUser } from './icons'

export  function Navboard() {
  return (
    <section className='w-full h-full flex justify-between items-center px-5 border-gray border-b-[.5px] shadow-sm'>
      <div className=''>
        <h2 className='text-2xl font-semibold titleHome'>Inicio</h2>
        <h2 className='text-2xl font-semibold titleStock'>Inventario</h2>
        <h2 className='text-2xl font-semibold titleStats'>Balance</h2>
        <h2 className='text-2xl font-semibold titleSettings'>Configuración</h2>
      </div>
      <div className='flex items-center'>
        <div className=' mr-3'>
          <p className='text-base font-semibold leading-4'>Franky Vargas</p>
          <p className='text-sm font-medium'>Admin</p>
        </div>
        <div className='flex items-center cursor-pointer'>
          <div className=''>
            <IconUser /> 
          </div>
          <div className='ml-2'>
            <IconDownArrow />
          </div>
        </div>
      </div>
    </section>
  )
}
