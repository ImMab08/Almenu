import { DashBoard } from "@/components/Desktop/Board/Dashboard";
import { Navboard } from "@/components/Desktop/Board/Navboard";
import { NavboardMobile } from "@/components/Mobile/Board/Navboard";

export default function Layout({ children, Header }) {
  return (
    <main className="w-full h-auto flex ">

      <section className='hidden sm:flex w-auto h-full border-secondary border-r-[1px] shadow-lg'>
        <DashBoard />
      </section>
      <section className="hidden sm:flex flex-col w-full h-screen overflow-hidden">
        <nav className="w-full h-auto">
          <Navboard Header={Header} />
        </nav>
        <div className="h-full bg-secondary overflow-auto">
          {children}
        </div>
      </section>
      
      <section className="sm:hidden">
        <nav className="w-full h-auto bg-primary">
          <NavboardMobile Header={Header} />
        </nav>
        <section className="w-full h-full bg-secondary">
          {children}
        </section>
      </section>

    </main>
  );
}
