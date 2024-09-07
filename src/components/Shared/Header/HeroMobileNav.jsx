import { IconClose } from './icons';
import { HeroItemsNav } from './HeroItemsNav';
import { useMenuMobile } from '@/hooks/CustomHook';

export function HeroMobileNav({ items }) {
  
  const [ closeMenu ] = useMenuMobile(state => [state.closeMenu]);

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-70" onClick={closeMenu}></div>
      <div className="fixed inset-y-0 left-0 w-64 bg-primary shadow-md transform translate-x-0 transition-transform duration-300 ease-in-out laptop:hidden">
        <div className="p-4 flex flex-col space-y-4">
          <div className="flex justify-end border-b-2 pb-2">
            <button onClick={closeMenu} className="focus:outline-none">
              <IconClose />
            </button>
          </div>
          <HeroItemsNav items={items} />
        </div>
      </div>
    </>
  );
}
