"use client";



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
import { useRef } from "react";

export default function Home() {


  const teamsRef = useRef(null);
  const featuresRef = useRef(null);
  const locationRef = useRef(null);
  const faqRef = useRef(null);
  const ticketsRef = useRef(null);

  const scrollToView = (ref) => {
    if(typeof ref !== "undefined" && ref.current !== null){
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <Navbar />
      <Hero routeToTeams={() => scrollToView(teamsRef)} />
      <About routeToFeatures={()=>scrollToView(featuresRef)}/>
      <Socialproof />
      <div ref={featuresRef}>
      <Features />
      </div>
      <div ref={teamsRef}>
      <Team 
      //  action={() => scrollToView(teamsRef)}
        />
      </div>
      <Location />
      <FAQ />
      <Tickets />
      <Footer />
    </>
  );
}
