import { DashBoard } from "@/components/Shared/Dashboard";
export default function Layout({ children }) {
  return (
    <main className="w-full h-screen flex">
      <div className='w-auto h-full shadow-xl'>
        <DashBoard />
      </div>
      <section className="w-[85%] h-full">
        {children}
      </section>
    </main>
  );
}
