import Link from "next/link";

export function HeroItemsNav({ items }) {
  return (
    <>
      {items.map(({ url, text }) => (
        <Link
          key={url}
          className="relative no-underline text-[16px] desktopLG:text-[18px] font-semibold text-secondary transition-colors hover:text-tertiary"
          href={url}
        >
          {text}
        </Link>
      ))}
    </>
  );
}
