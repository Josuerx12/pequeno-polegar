import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbarmobile";
import PolegarBelives from "@/components/polegar-belives";
import Structure from "@/components/structure";

export default function Home() {
  return (
    <main>
      <NavbarMobile />
      <Navbar />
      <Hero />
      <About />
      <PolegarBelives />
      <Structure />
    </main>
  );
}
