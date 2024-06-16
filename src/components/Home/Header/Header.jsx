
import Image from 'next/image';

import { IconBars } from './icons';

import { HeroItemsNav } from './HeroItemsNav';
import { HeroMobileNav } from './HeroMobileNav';
import { navItems, navItemsMobile } from './config';

import { useMenuMobile } from '@/hooks/menu-mobile';

function Header() {

  const [
    isOpen,
    toggleMenu,
  ] = useMenuMobile(state => [
    state.isOpen,
    state.toggleMenu,
  ]);

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
        <HeroItemsNav items={navItems} />
      </div>

      {isOpen && (
        <HeroMobileNav items={navItemsMobile} />
      )}
    </div>
  );
};

export { Header };