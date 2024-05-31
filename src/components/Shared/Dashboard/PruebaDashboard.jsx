import Image from "next/image";
import Link from "next/link";

import { menus, userSettings } from "./config";
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

<div className="w-full h-full p-5 tablet:p-10 laptop:p-10 flex flex-col laptop:flex-row laptop:justify-between">
<div className="w-[128px] h-[70px] relative laptop:w-[140px] laptop:h-[70px]">
  <Image layout="fill" objectFit="contain" src="/img/logo-almenu.png" alt="" />
</div>
<div className="w-full flex flex-col laptop:w-[80%] tablet:grid tablet:grid-cols-3 justify-around pt-5">
  <div className="flex flex-col">
    <h3 className="text-lg desktop:text-xl font-bold">Almenú</h3>
    <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">almenusoport@almenu.com</a>
    <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">+57 123 456 7890</a>
  </div>
  <div className="flex flex-col">
    <h3 className="text-lg desktop:text-xl font-bold">Soluciones</h3>
    <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Para negocios</a>
    <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Para restaurantes</a>
    <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Para empresas</a>
  </div>
  <div className="flex flex-col">
    <h3 className="text-lg desktop:text-xl font-bold">Siguenos</h3>
    <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Términos y condiciones</a>
    <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href="">Política y privacidad</a>
    <a className="my-[2px] laptop:my-[5px] text-[14px] laptop:text-base no-underline cursor-pointer" href=""></a>
  </div>
</div>
</div>