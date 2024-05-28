import React from 'react'
import Image from 'next/image'

export  function Navboard() {
  return (
    <section className='w-full h-full flex justify-between items-center px-5 border-gray border-b-[.5px] shadow-sm'>
      <div className=''>
        <h2 className='text-2xl font-semibold'>Inicio</h2>
      </div>
      <div className='flex items-center'>
        <div className=' mr-3'>
          <p className='text-base font-semibold leading-4'>Franky Vargas</p>
          <p className='text-sm font-medium'>Admin</p>
        </div>
        <div className='flex items-center cursor-pointer'>
          <div className=' w-[40px] h-[40px] relative'>
            <Image layout='fill' objectFit='contain' src="/img/user-circle.svg" alt="" />
          </div>
          <div className=' w-[15px] h-[15px] relative ml-2'>
            <Image layout='fill' objectFit='contain' src="/img/down-arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
