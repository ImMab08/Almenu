import Link from 'next/link';
import React from 'react';

export const FooterLinks = ({ title, links }) => (
  <div className="flex flex-col">
    <h3 className="text-lg desktop:text-xl font-bold">{title}</h3>
    {links.map((link, index) => (
      <Link className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" key={index} href={link.href} passHref>
        {link.text}
      </Link>
    ))}
  </div>
);
