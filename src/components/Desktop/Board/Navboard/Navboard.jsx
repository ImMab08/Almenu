'use client'
import React from 'react';
import useLoading from '@/hooks/useLoading';
import useUsuarioApi from '@/api/Conections/UsuarioApi';

export function Navboard({ Header }) {
  const loading = useLoading();
  const { usuario } = useUsuarioApi();

  if (loading) return (
    <section className='w-full h-full flex justify-between items-center p-5 border-secondary border-b-[.5px] shadow-sm bg-primary'>
      <div className='text-[20px] font-semibold'>
        <p className='bg-secondary w-[180px] h-[25px] animate-pulse'></p>
      </div>
      <div className='flex items-center'>
        <div className=' mr-3'>
          <div className='flex space-x-1'>
            <p className='bg-secondary w-[80px] h-[10px] animate-pulse'></p>
            <p className='bg-secondary w-[80px] h-[10px] animate-pulse'></p>
          </div>
          <p className='bg-secondary w-[160px] h-[10px] mt-2 animate-pulse'></p>
        </div>
      </div>
    </section>
  )

  return (
    <section className='w-full h-full flex justify-between items-center p-5 border-secondary border-b-[.5px] shadow-sm bg-primary'>
      <div className='text-lg font-semibold'>
        {Header}
      </div>
      <div className='flex items-center'>
        <div className='mr-3'>
          <div className='flex space-x-1'>
            <p className='text-tertiary text-sm font-semibold leading-4'>{usuario?.nombre}</p>
            <p className='text-tertiary text-sm font-semibold leading-4'>{usuario?.apellido}</p>
          </div>
          <p className='text-tertiary text-right text-xs font-medium'>{usuario?.plan}</p>
        </div>
      </div>
    </section>
  );
}