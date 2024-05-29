import { DashBoard } from "@/components/Shared/Dashboard";
import { Navboard } from "@/components/Shared/Navboard";

export default function Layout({ children, Header }) {
  return (
    <main className="w-full h-screen flex">
      <div className='w-auto h-full border-gray border-r-[.5px] shadow-lg'>
        <DashBoard />
      </div>
      <section className="w-full h-full">
        <div className="w-full h-[10.7%]">
          <Navboard Header={Header} />
        </div>
        {children}
      </section>
    </main>
  );
}
