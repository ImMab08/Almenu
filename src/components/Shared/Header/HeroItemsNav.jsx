import { useMenuMobile } from "@/hooks/CustomHook";
import Link from "next/link";

export function HeroItemsNav({ items }) {
  
  const [ closeMenu ] = useMenuMobile(state => [state.closeMenu]);

  return (
    <>
      {items.map(({ url, text }) => (
        <Link
          key={url}
          className="relative no-underline text-[16px] desktopLG:text-[18px] font-semibold text-secondary transition-colors hover:text-tertiary"
          href={url}
          onClick={closeMenu}
        >
          {text}
        </Link>
      ))}
    </>
  );
};