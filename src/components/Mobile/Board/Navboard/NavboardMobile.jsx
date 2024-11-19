'use client'
import React from 'react'

import { expandedBoard, useMenuMobile } from '@/hooks/CustomHook';
import { IconBars, IconDownArrow, IconUser } from './icons'
import { DashBoard } from '../Dashboard';

export function NavboardMobile({ Header }) {

  const [ isExpanded, closeExpanded ] = expandedBoard((state) => [
    state.isExpanded,
    state.closeExpanded
  ])

  const [ isOpen, toggleMenu ] = useMenuMobile((state) => [
    state.isOpen,
    state.toggleMenu,
  ]);

  const handleClick = () => {
    if (isExpanded) {
      closeExpanded();
    }
    toggleMenu();
  };

  return (
    <section className=' w-full h-auto flex justify-between items-center p-3 border-border'>
      <div className='flex items-center gap-4'>
        <div className='cursor-pointer' onClick={handleClick}>
          <IconBars />
        </div>

        {isOpen && (
          <DashBoard />
        )}

        <div className='text-xl font-semibold'>
          {Header}
        </div>
      </div>

      <div className='flex items-center'>
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
