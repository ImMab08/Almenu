import React from 'react'
import Image from 'next/image'

import { IconDownArrow } from './icons'
import { IconUser } from './icons'

export  function Navboard({Header}) {
  return (
    <section className='w-full h-full flex justify-between items-center px-5 border-gray border-b-[.5px] shadow-sm'>
      <div className=''>
        {Header}
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
