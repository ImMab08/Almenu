"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useMenuMobile } from "@/hooks/CustomHook";
import { menus, userSettings } from "./config";
import {
  IconClose,
  IconHome,
  IconStock,
  IconLogout,
  IconStats,
  IconSettings,
} from "@/icons";


const iconMap = {
  IconHome: IconHome,
  IconStock: IconStock,
  IconStats: IconStats,
  IconSettings: IconSettings,
  IconLogout: IconLogout,
};

export function DashBoard() {

  const [ closeMenu ] = useMenuMobile((state) => [state.closeMenu]);

  const Menus = menus.map(({ url, text, icon }) => {
    const IconComponent = iconMap[icon];
    return (
      <div
        className='flex items-center my-[10px] hover:bg-secondary py-1 rounded-md'
        key={url}
      >
        <Link className="flex text-[16px] decoration no-underline rounded-xl text-title" href={url} onClick={closeMenu}>
          <div className="ml-[13px] mr-2 flex gap-2">
            {IconComponent ? <IconComponent /> : null}
            {text}
          </div>
        </Link>
      </div>
    );
  });

  const UserSettings = userSettings.map(({ url, text, icon }) => {
    const IconComponent = iconMap[icon];
    return (
      <div
        className={`flex items-center my-[10px] hover:bg-secondary py-1 rounded-md transition-all duration-300`}
        key={url}
      >
        <Link className="flex text-[16px] decoration no-underline  text-title" href={url} onClick={closeMenu}>
          <div className="ml-[13px] mr-2 flex gap-2">
            {IconComponent ? <IconComponent /> : null}
            {text}
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-70 z-10" onClick={closeMenu}></div>
      <section className="fixed w-[50%] inset-y-0 left-0 flex flex-col justify-between bg-primary py-10 z-10">
        <section className="w-full h-full flex flex-col justify-between">
          <div className="absolute top-3 right-3 cursor-pointer" onClick={closeMenu}>
            <IconClose width={24} height={24} />
          </div>
          <div className="space-y-5 ">
            <div className="w-auto h-auto flex justify-center">
              <Image
                width={60}
                height={60}
                className="object-contain transition-all duration-300"
                src="/img/logo.png"
                alt="Logo Almenu"
              />
            </div>
            <div className="w-full border-t border-border pt-8 p-2">{Menus}</div>
          </div>

          <div className="w-full border-t border-border pt-8 p-2">{UserSettings}</div>
        </section>
      </section>
    </>
  );
}
