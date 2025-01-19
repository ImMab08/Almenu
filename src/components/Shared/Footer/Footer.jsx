import Image from "next/image";
import React from "react";

import { links, FooterLinks } from "./config";
import Link from "next/link";
import {IconLogo } from "@/icons";

function Footer() {
  return (
    <footer className="w-full h-auto bg-primary shadow-xl flex flex-col px-5 2xl:px-36 pt-5 2xl:pt-0">
      <div className="w-full h-full flex flex-col 2xl:py-10 2xl:flex-row">
        <div className="w-full 2xl:w-2/5 flex items-center justify-center 2xl:block">
          <IconLogo width={180} height={50} />
        </div>
        <div className="w-full text-text my-5 2xl:mt-0 flex flex-col 2xl:w-3/5 2xl:flex-row 2xl:justify-between">
          {links.map((section, index) => (
            <FooterLinks
              key={index}
              title={section.title}
              icon={section.icon}
              links={section.links}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-full flex flex-col-reverse 2xl:flex-row justify-center 2xl:justify-between items-center py-5 border-border border-t-2">
        <p className="2xl:w-[30%] mb-2 2xl:mb-0 text-sm font-medium text-text text-start">Copyright © Almenú 2024</p>
        <div className="2xl:w-[70%] flex justify-start 2xl:justify-end items-center 2xl:space-x-2">
          <Link href="">
            <Image width={150} height={80} src="/img/google-play.png" alt="Imagen de la play store de android" />
          </Link>
          <Link href="">
            <Image width={115} height={80} src="/img/app-store.png" alt="Imagen de la apple store" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
