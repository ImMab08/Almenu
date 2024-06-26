"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { expandedBoard } from "@/hooks/CustomHook";
import { menus, userSettings } from "./config";

import {
  IconHome,
  IconStock,
  IconLogout,
  IconStats,
  IconSettings,
  IconRightButton,
  IconLeftButton,
} from "./icons";

const iconMap = {
  IconHome: IconHome,
  IconStock: IconStock,
  IconStats: IconStats,
  IconSettings: IconSettings,
  IconLogout: IconLogout,
};

export function DashBoard() {

  const [ isExpanded, toggleExpanded ] = expandedBoard((state) => [
    state.isExpanded,
    state.toggleExpanded,
  ])

  const Menus = menus.map(({ url, text, icon }) => {
    const IconComponent = iconMap[icon];
    return (
      <div
        className={`flex items-center my-[10px] hover:bg-secondary py-1 rounded-md ${
          isExpanded ? "w-48" : "w-12"
        } transition-all duration-300`}
        key={url}
      >
        <Link className="flex text-[16px] decoration no-underline  rounded-xl text-title" href={url}>
          <div className="ml-[13px] mr-2">
            {IconComponent ? <IconComponent /> : null}
          </div>
          {isExpanded && (
            <span className={isExpanded ? "text-visible" : "text-hidden"}>
              {text}
            </span>
          )}
        </Link>
      </div>
    );
  });

  const UserSettings = userSettings.map(({ url, text, icon }) => {
    const IconComponent = iconMap[icon];
    return (
      <div
        className={`flex items-center my-[10px] hover:bg-blue-500 py-1 rounded-md ${
          isExpanded ? "w-48" : "w-12"
        } transition-all duration-300`}
        key={url}
      >
        <Link className="flex text-[16px] decoration no-underline  text-title" href={url}>
          <div className="ml-[13px] mr-2">
            {IconComponent ? <IconComponent /> : null}
          </div>
          {isExpanded && (
            <span className={isExpanded ? "text-visible" : "text-hidden"}>
              {text}
            </span>
          )}
        </Link>
      </div>
    );
  });

  return (
    <section className="hidden sm:flex w-full h-screen">
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
        <div className="w-full h-[70%] p-3">{Menus}</div>
        <div className="w-full h-[20%] p-3">{UserSettings}</div>
      </section>

      <button
        className={`pl-[5px] absolute bottom-4 ${
          isExpanded
            ? "left-[216px]"
            : "left-[72px] hover:w-[50px] hover:pl-[15px]"
        } bg-primary w-[35px] h-[35px] shadow-lg rounded-r-xl transition-all duration-300`}
        onClick={toggleExpanded}
      >
        {isExpanded ? <IconLeftButton /> : <IconRightButton />}
      </button>

    </section>
  );
}
