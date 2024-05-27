import Image from "next/image";
import Link from "next/link";
import { menus } from "./config";
import { userSettings } from "./config";

export function DashBoard(props) {
  const Menus = menus.map(({url, text, image, alt}) =>
    <div className="flex items-center my-[10px]" key={url}>
      <div className="w-[22px] h-[22px] relative mr-2">
        <Image layout="fill" objectFit="contain" src={image} alt={alt} />
      </div>
      <Link className="text-base decoration no-underline text-title" href={url}>
        {text}
      </Link>
    </div>
  )

  const UserSettings = userSettings.map(({url, text, image, alt}) =>
    <div className="flex items-center my-[10px]" key={url}>
      <div className="w-[22px] h-[22px] relative mr-2">
        <Image layout="fill" objectFit="contain" src={image} alt={alt} />
      </div>
      <Link className="text-base decoration no-underline text-title" href={url}>
        {text}
      </Link>
    </div>
  )

  return (
    <main className="w-full h-screen flex">
      <section className="pt-2">
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
