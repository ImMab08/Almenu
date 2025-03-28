'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { handleLogout } from './authActions';
import { menus, userSettings } from './config';
import { expandedBoard } from '@/hooks/CustomHook';

import { IconHome, IconMenu, IconStock, IconLogout, IconStats, IconSettings, IconArrowRight, IconArrowLeft, IconLogo, IconLogoShort, IconCalendar } from '@/icons';
const iconMap = { IconHome: IconHome, IconMenu: IconMenu, IconStock: IconStock, IconStats: IconStats, IconSettings: IconSettings, IconLogout: IconLogout, IconCalendar: IconCalendar };


export function DashBoard() {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    if (router.pathname ==='/inicio') {
      setSelectedMenu('/inicio');
    }
  }, [router.pathname]);

  const handledClick = (url) => {
    setSelectedMenu(url);
    router.push(url);
  };  

  const [isExpanded, toggleExpanded] = expandedBoard((state) => [
    state.isExpanded,
    state.toggleExpanded,
  ]);

  const handleUserSettingClick = (url, action) => {
    setSelectedMenu(url);
    if (action) {
      action();
      if (action === handleLogout) {
        router.push('/');
      }
    }
  };
  
  const Menus = menus.map(({ url, text, icon }) => { 
    const isSelected = selectedMenu === url;
    const IconComponent = iconMap[icon];
    return (
      <div
        onClick={() => {handledClick(url)}}
        className={`flex items-center my-2 ${isSelected ? 'bg-hover' : ' bg-primary'} hover:bg-hover active:bg-hover text-text py-1 rounded-md ${
          isExpanded ? 'w-48' : 'w-12'
        } transition-all duration-300`}
        key={url}
      >
        <Link className="flex w-full items-center text-base decoration no-underline rounded-xl font-medium" href={url}>
          <div className="ml-3 mr-2">{IconComponent ? <IconComponent width={22} height={22} /> : null}</div>
          {isExpanded && <span className={isExpanded ? 'text-visible' : 'text-hidden'}>{text}</span>}
        </Link>
      </div>
    );
  });

  const UserSettings = userSettings.map(({ url, text, icon, action }) => {
    const isSelected = selectedMenu === url;
    const IconComponent = iconMap[icon];
    return (
      <div
        className={`flex items-center my-2 ${isSelected ? 'bg-hover' : 'bg-primary'} hover:bg-hover active:bg-hover text-text py-1 rounded-md ${
          isExpanded ? 'w-48' : 'w-12'
        } transition-all duration-300`}
        key={url}
        onClick={() => handleUserSettingClick(url, action)}
      >
        <Link className="flex w-full items-center text-base decoration no-underline font-medium" href={url}>
          <div className="ml-3 mr-2">{IconComponent ? <IconComponent width={22} height={22} /> : null}</div>
          {isExpanded && <span className={isExpanded ? 'text-visible' : 'text-hidden'}>{text}</span>}
        </Link>
      </div>
    );
  });

  return (
    <section className="hidden sm:flex w-full h-screen bg-primary">
      <section className="w-full h-full pt-1 flex flex-col items-center">
        {isExpanded ? 
          <IconLogo width={110} height={70} /> 
          : <IconLogoShort width={40} height={70} className='' />
        }
        <div className="w-full h-[70%] p-3">{Menus}</div>
        <div className="w-full h-[20%] p-3">{UserSettings}</div>
      </section>

      <button
        className={`pl-1 absolute z-50 bottom-4 ${
          isExpanded ? 'left-[216px]' : 'left-[72px] hover:w-12 hover:pl-4'
        } bg-primary w-9 h-9 shadow-lg rounded-r-xl transition-all duration-300`}
        onClick={toggleExpanded}
      >
        {isExpanded ? <IconArrowLeft width={24} height={24} /> : <IconArrowRight width={24} height={24} />}
      </button>
    </section>
  );
}
