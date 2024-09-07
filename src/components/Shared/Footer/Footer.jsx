import Image from "next/image";
import React from "react";

import { links, icons, FooterLinks } from "./config";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full h-auto bg-primary shadow-xl flex flex-col px-5 laptop:px-20">
      <div className="w-full h-full flex flex-col py-10 laptop:flex-row">
        <div className="laptop:w-[40%]">
          <Image
            width={128}
            height={60}
            className="object-cover"
            src="/img/logo-almenu.png"
            alt=""
          />
        </div>
        <div className="w-full text-white mt-10 laptop:mt-0 flex flex-col laptop:w-[60%] tablet:flex-row tablet:justify-between mx-auto ">
          {links.map((section, index) => (
            <FooterLinks
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-full laptop:flex justify-between items-center py-5 border-t-2">
        <p className="laptop:w-[30%] mb-2 laptop:mb-0 text-xs font-medium text-white">Copyright © Almenú 2024</p>
        <div className="laptop:w-[70%] flex laptop:justify-end items-center space-x-4">
          {icons.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export { Footer };
