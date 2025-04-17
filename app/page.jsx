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
  const faqRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToView = (ref) => {
    if(typeof ref !== "undefined" && ref.current !== null){
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const navScroll=(section)=>{
    switch (section) {
      case "speakers":
        if(typeof teamsRef !== "undefined" && teamsRef.current !== null){
          teamsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "faq":
        if(typeof faqRef !== "undefined" && faqRef.current !== null){
          faqRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "about":
        if(typeof aboutRef !== "undefined" && aboutRef.current !== null){
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Navbar routeScroll={navScroll}/>
      <div ref={aboutRef}>
      <Hero routeToTeams={() => scrollToView(teamsRef)} />
      </div>
      <About routeToFeatures={()=>scrollToView(featuresRef)}/>
      <Socialproof />
      <div ref={featuresRef}>
      <Features />
      </div>
      <div ref={teamsRef}>
      <Team />
      </div>
      <Location />
      <div ref={faqRef}>
      <FAQ />
      </div>
      
      {/* <Tickets /> */}
      <Footer />
    </>
  );
}
