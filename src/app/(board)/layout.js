import { DashBoard } from "@/components/Shared/Dashboard";

export default function Layout({ children }) {
  return (
    <main className="w-full h-screen flex">
      <div className='w-auto h-full border-gray border-r-[.5px] shadow-lg'>
        <DashBoard />
      </div>
      <section className="w-full h-full">
        {children}
      </section>
    </main>
  );
}
