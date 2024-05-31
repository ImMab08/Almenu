import { DashBoard } from "@/components/Shared/Dashboard";
import { Navboard } from "@/components/Shared/Navboard";

export default function Layout({ children, Header }) {
  return (
    <main className="w-full h-screen flex">
      <section className='w-auto h-full border-gray border-r-[.5px] shadow-lg'>
        <DashBoard />
      </section>
      <section className="w-full h-screen">
        <nav className="w-full h-[10.7%]">
          <Navboard Header={Header} />
        </nav>
        <section className="w-full h-[89.3%] bg-gray-200 overflow-auto">
          {children}
        </section>
      </section>
    </main>
  );
}
