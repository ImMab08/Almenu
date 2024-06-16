'use client'
import { Header } from "@/components/Home/Header/Header";
import { Hero } from "@/components/Home/Hero/Hero";
import { Footer } from "@/components/Home/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
