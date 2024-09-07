import React from 'react';
import { IconDownArrow, IconUser } from './icons';
import { DataUser } from '@/api/data';

export function Navboard({ Header }) {

  return (
    <section className='w-full h-full flex justify-between items-center px-5 border-[#212121] border-b-[.5px] shadow-sm bg-primary'>
      <div className='text-[20px] font-semibold'>
        {Header}
      </div>
      <div className='flex items-center'>
        <div className=' mr-3'>
          <DataUser />
          <p className='text-title text-[14px] font-semibold leading-4'>Franky Vargas</p>
          <p className='text-title text-[12px] font-medium'>Admin</p>
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
  );
}