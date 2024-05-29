'use client'
import { useRef, useEffect, useCallback } from 'react';
import { IconClose } from './icons';
import { HeroItemsNav } from './HeroItemsNav';

export function HeroMobileNav({ closeMenu, items }) {
  const menuRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  }, [closeMenu]);

  const handleSwipe = useCallback((event) => {
    const touch = event.touches[0];
    if (touch.clientX < 50) {
      closeMenu();
    }
  }, [closeMenu]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleSwipe);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleSwipe);
    };
  }, [handleClickOutside, handleSwipe]);

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50" onClick={closeMenu}></div>
      <div ref={menuRef} className="fixed inset-y-0 left-0 w-64 bg-white shadow-md transform translate-x-0 transition-transform duration-300 ease-in-out laptop:hidden">
        <div className="p-4 flex flex-col space-y-4">
          <div className="flex justify-end">
            <button onClick={closeMenu} className="focus:outline-none">
              <IconClose />
            </button>
          </div>
          <HeroItemsNav items={items} />
        </div>
      </div>
    </>
  );
}
