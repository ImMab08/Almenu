import Image from 'next/image'
import React from 'react'

import { links, FooterLinks } from './config'

function Footer() {

  return (
    <footer className="w-full h-auto bg-footerBg shadow-xl flex flex-col justify-center items-center">
      <div className="w-full h-full p-5 tablet:p-10 laptop:p-10 flex flex-col laptop:flex-row laptop:justify-between">
        <div className="w-[128px] h-[70px] relative laptop:w-[140px] laptop:h-[70px]">
          <Image layout="fill" objectFit="contain" src="/img/logo-almenu.png" alt="" />
        </div>
        <div className="w-full flex flex-col laptop:w-[80%] tablet:flex-row tablet:justify-between mx-auto my-5">
          {links.map((section, index) => (
            <FooterLinks key={index} title={section.title} links={section.links} />
          ))}
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center p-2">
        <p className="text-[14px] font-medium">Copyright © Almenú 2024</p>
      </div>
    </footer>
  )
}

export { Footer }