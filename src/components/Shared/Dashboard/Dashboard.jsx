import Image from "next/image";
import Link from "next/link";

import { menus } from "./config";
import { userSettings } from "./config";

import { IconHome, IconStock, IconLogout, IconStats, IconSettings } from "./icons";

const iconMap = {
  IconHome: IconHome,
  IconStock: IconStock,
  IconStats: IconStats,
  IconSettings: IconSettings,
  IconLogout: IconLogout
};

export function DashBoard(props) {
  const Menus = menus.map(({url, text, icon}) => {
    const IconComponent = iconMap[icon];
    return (
      <div className="flex items-center my-[10px]" key={url}>
        <Link className="flex text-base decoration no-underline text-title" href={url}>
          <div className="mr-2">
            {IconComponent ? <IconComponent /> : null}
          </div>
          {text}
        </Link>
      </div>
    )
  });

  const UserSettings = userSettings.map(({url, text, icon}) => {
    const IconComponent = iconMap[icon];
    return (
      <div className="flex items-center my-[10px]" key={url}>
        <Link className="flex text-base decoration no-underline text-title" href={url}>
          <div className="mr-2">
            {IconComponent ? <IconComponent /> : null}
          </div>
          {text}
        </Link>
      </div>
    )
  });

  return (
    <main className="w-full h-screen flex">
      <section className="pt-1">
        <div className="w-full h-[10%] flex justify-center">
          <Image width={120} height={120} className="object-contain" src="/img/logo-almenu.png" alt="Logo Almenu" />
        </div>

        <div className="w-full h-[70%] p-5">
          {Menus}
        </div>

        <div className="w-full h-[20%] p-5">
          {UserSettings}
        </div>
      </section>
      
    </main>
  );
};