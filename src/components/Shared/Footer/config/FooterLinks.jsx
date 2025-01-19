import Link from "next/link";
import React from "react";

export const FooterLinks = ({ title, links }) => {
  const isSocialLink = title === "Siguenos";

  return (
    <div className="my-2 2xl:my-0">
      <div className="space-y-1 flex flex-col items-center 2xl:justify-normal 2xl:items-start">
        <h3 className={`text-base font-bold ${isSocialLink ? 'text-center 2xl:text-start' : ''}`}>{title}</h3>
        <div className={`${isSocialLink ? 'flex flex-row 2xl:block space-x-3 2xl:space-x-0 items-center justify-center 2xl:space-y-1' : 'space-y-1' }`}>
          {links.map((link, index) =>
            link.text ? (
              <div key={link} className="flex flex-row space-x-1 items-center justify-center 2xl:justify-normal">
                {link.icon ? (
                  <Link className="bg-tertiary p-2 rounded-full flex flex-row items-center justify-center" href={link.href}>
                    {link.icon}
                  </Link>
                ) : null}
                <Link
                  className={`${
                    isSocialLink
                      ? "hidden 2xl:inline 2xl:my-1 hover:underline text-sm no-underline cursor-pointer"
                      : "2xl:my-1 hover:underline text-sm no-underline cursor-pointer"
                  }`}
                  key={index}
                  href={link.href}
                  passHref
                >
                  {link.text}
                </Link>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
