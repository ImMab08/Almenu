'use client'
import React from 'react';
import { IconDownArrow, IconUser } from './icons';
import UserInfoNav from './UserInfoNav';

export function Navboard({ Header }) {
  const {usuarioInfo, loading, error} = UserInfoNav();

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <section className='w-full h-full flex justify-between items-center px-5 border-[#212121] border-b-[.5px] shadow-sm bg-primary'>
      <div className='text-[20px] font-semibold'>
        {Header}
      </div>
      <div className='flex items-center'>
        <div className=' mr-3'>
          <div className='flex space-x-1'>
            <p className='text-title text-[14px] font-semibold leading-4'>{usuarioInfo?.nombre}</p>
            <p className='text-title text-[14px] font-semibold leading-4'>{usuarioInfo?.apellido}</p>
          </div>
          <p className='text-title text-right text-[12px] font-medium'>{usuarioInfo?.plan}</p>
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