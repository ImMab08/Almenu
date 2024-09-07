import { DashBoard } from "@/components/Desktop/Board/Dashboard";
import { Navboard } from "@/components/Desktop/Board/Navboard";
import { NavboardMobile } from "@/components/Mobile/Board/Navboard";

export default function Layout({ children, Header }) {
  return (
    <main className="w-full h-auto flex ">

      <section className='hidden sm:flex w-auto h-full border-border border-r-[.5px] shadow-lg'>
        <DashBoard />
      </section>
      <section className="hidden sm:flex flex-col w-full h-screen overflow-hidden">
        <nav className="w-full h-[10.7%]">
          <Navboard Header={Header} />
        </nav>
        <section className="w-full h-[89.3%] bg-secondary">
          {children}
        </section>
      </section>
      
      <section className=" sm:hidden w-full h-screen">
        <nav className="w-full h-auto fixed top-0 right-0 bg-primary z-10">
          <NavboardMobile Header={Header} />
        </nav>
        <section className="w-auto h-auto bg-secondary">
          {children}
        </section>
      </section>

    </main>
  );
}
