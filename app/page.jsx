import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Socialproof from "./components/Socialproof";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Socialproof />
    </>
  );
}
