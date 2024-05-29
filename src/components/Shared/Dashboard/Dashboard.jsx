'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import { menus, userSettings } from "./config";
import { IconHome, IconStock, IconLogout, IconStats, IconSettings, IconRightButton, IconLeftButton } from "./icons";

const iconMap = {
  IconHome: IconHome,
  IconStock: IconStock,
  IconStats: IconStats,
  IconSettings: IconSettings,
  IconLogout: IconLogout
};

export function DashBoard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const Menus = menus.map(({url, text, icon}) => {
    const IconComponent = iconMap[icon];
    return (
      <div className={`flex items-center my-[10px] ${isExpanded ? 'w-48' : 'w-12'} transition-all duration-300`} key={url}>
        <Link className="flex text-base decoration no-underline text-title" href={url}>
          <div className="ml-[13px] mr-2">
            {IconComponent ? <IconComponent /> : null}
          </div>
          {isExpanded && (
            <span className={isExpanded ? 'text-visible' : 'text-hidden'}>{text}</span>
          )}
        </Link>
      </div>
    )
  });

  const UserSettings = userSettings.map(({url, text, icon}) => {
    const IconComponent = iconMap[icon];
    return (
      <div className={`flex items-center my-[10px] ${isExpanded ? 'w-48' : 'w-12'} transition-all duration-300`} key={url}>
        <Link className="flex text-base decoration no-underline text-title" href={url}>
          <div className="ml-[13px] mr-2">
            {IconComponent ? <IconComponent /> : null}
          </div>
          {isExpanded && (
            <span className={isExpanded ? 'text-visible' : 'text-hidden'}>{text}</span>
          )}
        </Link>
      </div>
    )
  });

  return (
    <main className="w-full h-screen flex">
      <section className="pt-1">
        <div className="w-full h-[10%] flex justify-center">
          <Image 
            width={isExpanded ? 120 : 40} 
            height={120} 
            className="object-contain transition-all duration-300" 
            src={isExpanded ? "/img/logo-almenu.png" : "/img/logo.png"} 
            alt="Logo Almenu" 
          />
        </div>

        <div className="w-full h-[70%] p-5">
          {Menus}
        </div>

        <div className="w-full h-[20%] p-5">
          {UserSettings}
        </div>
      </section>

      <button 
        className={`absolute bottom-4 ${isExpanded ? 'left-[233px]' : 'left-[88px]'} bg-primary w-[35px] h-[35px] shadow-lg rounded-r-xl button-transition`} 
        onClick={toggleMenu}
      >
        {isExpanded ? <IconLeftButton /> : <IconRightButton />}
      </button>
    </main>
  );
};
