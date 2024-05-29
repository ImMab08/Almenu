'use client'
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from './config';
import { IconBars, IconClose } from './icons';

export function HeroNav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  }, []);

  const handleSwipe = useCallback((event) => {
    const touch = event.touches[0];
    if (touch.clientX < 50) {  // Umbral para considerar un deslizamiento
      closeMenu();
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleSwipe);
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleSwipe);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleSwipe);
    };
  }, [isMenuOpen, handleClickOutside, handleSwipe]);

  const Items = navItems.map(({ url, text }) => (
    <Link key={url} className="relative no-underline text-[16px] desktopLG:text-[18px] font-semibold text-secondary transition-colors hover:text-tertiary" href={url}>
      {text}
    </Link>
  ));

  return (
    <div className="w-full h-auto laptop:h-[80px] bg-primary fixed top-0 z-50 shadow-xl flex justify-between items-center px-5 tablet:px-[40px] tablet:py-[5px] laptop:px-16">
      <div className="w-[40px] h-[40px] relative mobileLG:w-[50px] mobileLG:h-[50px] tablet:w-[60px] tablet:h-[60px] laptop:hidden" onClick={toggleMenu}>
        <IconBars />
      </div>
      <div className="w-[120px] h-[50px] mobileLG:w-[130px] mobileLG:h-[60px] tablet:w-[150px] tablet:h-[70px] laptop:w-[160px] laptop:h-[80px] relative">
        <a href="index.html">
          <Image layout="fill" objectFit="contain" src="/img/logo-almenu.png" alt="Logo" />
        </a>
      </div>

      <div className="container-links hidden laptop:flex justify-evenly items-center w-3/5">
        {Items}
      </div>

      {/* Overlay background */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out laptop:hidden`}
      >
        <div className="p-4 flex flex-col space-y-4">
          <div className="flex justify-end">
            <button onClick={closeMenu} className="focus:outline-none">
              <IconClose />
            </button>
          </div>
          {Items}
        </div>
      </div>
    </div>
  );
};
