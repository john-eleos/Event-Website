import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Socialproof from "./components/Socialproof";
import Features from "./components/Features";
import Team from "./components/Team";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import Tickets from "./components/Tickets";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Socialproof />
      <Features />
      <Team />
      <Location />
      <FAQ />
      <Tickets />
      <Footer />
    </>
  );
}
