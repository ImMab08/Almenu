import { Header } from "@/components/Shared/Header/Header";
import { Footer } from "@/components/Shared/Footer/Footer";

export default function Layout({ children }) {
  return (
    <section className="w-full h-auto">
      <Header />
      <section className="w-full h-auto mt-20">
        {children}
      </section>
      <Footer />
    </section>
  );
}
