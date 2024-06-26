import React from 'react'
import Image from 'next/image'

import { IconDownArrow } from './icons'
import { IconUser } from './icons'

export function Navboard({Header}) {
  return (
    <section className='w-full h-full flex justify-between items-center px-5 border-gray border-b-[.5px] shadow-sm'>
      <div className='text-[20px] font-semibold'>
        {Header}
      </div>
      <div className='flex items-center'>
        <div className=' mr-3'>
          <p className='text-[14px] font-semibold leading-4'>Franky Vargas</p>
          <p className='text-[12px] font-medium'>Admin</p>
        </div>
        <div className='flex items-center cursor-pointer'>
          <div className=''>
            <IconUser /> 
          </div>
          <div className='ml-1'>
            <IconDownArrow />
          </div>
        </div>
      </div>
    </section>
  )
}
