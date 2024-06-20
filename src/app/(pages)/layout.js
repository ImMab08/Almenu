import { Header } from "@/components/Home/Header/Header";
import { Footer } from "@/components/Home/Footer/Footer";

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
