import Link from "next/link";
import React from "react";

export const FooterLinks = ({ title, links }) => {
  return (
    <div className="my-2 laptop:my-0 flex flex-col">
      <h3 className="text-base font-bold">{title}</h3>
      {links.map((link, index) => (
        link.text ? (
          <Link
            className="my-[2px] hover:underline text-sm no-underline cursor-pointer"
            key={index}
            href={link.href}
            passHref
          >
            {link.text}
          </Link>
        ) : null
      ))}
    </div>
  );
};