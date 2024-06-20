'use client'
import { Header } from "@/components/Shared/Header/Header";
import { Hero } from "@/components/Home/Hero/Hero";
import { Footer } from "@/components/Shared/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
