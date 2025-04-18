"use client";




import React from "react";
import Link from "next/link";
import Image from "next/image";
import P1 from "../../public/people/mr-dotun.jpg";
import P2 from "../../public/people/mr-jide.jpg";
import P3 from "../../public/people/mr-austin.jpg";
import P4 from "../../public/people/miss-echeka.jpg";
import P5 from "../../public/people/ProphetPeterAbiolaAdebisi.jpg";
import P6 from "../../public/people/PastorAdegokeOmotola.jpg";
import P7 from "../../public/people/PastorOlugbeminiyiOlaifa.jpg";
import P8 from "../../public/people/PastorMrsFolashadeOlanrewaju.jpg";
import P9 from "../../public/people/PastorMrsFolashadeAdebisi.jpg";
import P10 from "../../public/people/VictorOzomoge.jpg";
import P11 from "../../public/people/PastorGodswillOyor.jpg";
// import P12 from "../../public/people/p12.jpg";




export const teamsCount = 20;

export const teams = [
  {
    name: "Prophet Peter Abiola Adebisi",
    role: "President CMCM Worldwide",
    facebook:"https://www.facebook.com/ProphetPeterAbiolaAdebisicmcmWorldwide",
    img: P5,
  },
  {
    name: "Pastor Mrs Folashade Adebisi",
    role: "Vice President CMCM Worldwide",
    facebook:"https://www.facebook.com/adebisi.adebisi.92798",
    img: P9,
  },


  {
    name: "Pastor Adegoke Omotola",
    role: "Minister",
    facebook:"https://www.facebook.com/adegoke.omotola",
    img: P6,
  },
  {
    name: "Pastor Olugbeminiyi Olaifa",
    role: "Minister",
    facebook:"https://www.facebook.com/olugbeminiyi",
    img: P7,
  },
  {
    name: "Pastor Mrs Folashade Olanrewaju",
    role: "Minister",
    facebook:"https://www.facebook.com/olanrewaju.folasade.54",
    img: P8,
  },
  {
    name: "Pastor Godswill Oyor",
    role: "Minister",
    linkedIn:"https://www.linkedin.com/in/godswill-oyor?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:"https://www.instagram.com/godswilloyor?igsh=d3FsYjIyaGk4OW9t",
    img: P11,
  },

  {
    name: "Mr Dotun Adeoye",
    role: "AI Product Leader",
    linkedIn:"https://www.linkedin.com/in/dotunadeoye/",
    img: P1,
  },
  {
    name: "Mr Jide Salau",
    role: "Founder Designrepublik.Ng",
    linkedIn:"https://www.linkedin.com/in/jide-salau-5a21b16/",
    img: P2,
  },
  {
    name: "Mr Samuel Efosa-Austin",
    linkedIn:"https://www.linkedin.com/in/samuelefosaaustin/",
    role: "CTO Kairoi",
    img: P3,
  },
  {
    name: "Miss Echeka Ihuoma",
    linkedIn: "https://www.linkedin.com/in/echeka-ihuoma-sphri-15ab56194/",
    role: "People and Culture Development Expert",
    img: P4,
  },
  {
    name: "Victor Ozomoge",
    role: "CEO, Zomoge Inspired",
    instagram:"https://www.instagram.com/victorozomoge?igsh=MWQydnltZGoyeTRhbQ==",
    img: P10,
  },

  // {
  //   name: "Karen Nelson",
  //   role: "Designer",
  //   img: P7,
  // },
  // {
  //   name: "Jese Leos",
  //   role: "Logo Designer",
  //   img: P8,
  // },
  // {
  //   name: "Lana Byrd",
  //   role: "SEO Specialist",
  //   img: P9,
  // },
  // {
  //   name: "Leslie Livingston",
  //   role: "Backend Developer",
  //   img: P10,
  // },
  // {
  //   name: "Robert Brown",
  //   role: "Designer",
  //   img: P11,
  // },
  // {
  //   name: "Thomas Lean",
  //   role: "Logo Designer",
  //   img: P12,
  // },
];

const Team = () => {
  return (
    <>
      <div className="mt-8 lg:mt-24 mx-auto max-w-max">
        <h1 className="text-3xl font-extrabold text-[#3e8e65] text-center lg:text-4xl">
          Our speakers
        </h1>
        {/* <p className="text-xl text-gray-500 mb-6 mt-4 text-center max-w-[672px]">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl p-8">
        {teams.map((person, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 relative">
              {/* Use Next.js Image component for local images */}
              {typeof person.img === "string" ? (
                <img
                  src={person.img}
                  alt={person.name}
                  className="rounded-full object-cover w-full h-full"
                />
              ) : (
                <Image
                  src={person.img}
                  alt={person.name}
                  className="rounded-full object-cover h-full w-full"
                  width={128}
                  height={128}
                />
              )}
            </div>
            <h2 className="text-lg font-bold">{person.name}</h2>
            <p className="text-sm text-gray-500">{person.role}</p>
            <div className="flex justify-center gap-4 mt-2">
              {person.linkedIn&&<Link href={person.linkedIn} className="text-[#3e8e65]/[.9] hover:text-blue-800">
                <i className="fab fa-linkedin"></i>
              </Link>}
              {person.facebook&&<Link href={person.facebook} className="text-[#3e8e65]/[.9] hover:text-blue-800">
                <i className="fab fa-facebook"></i>
              </Link>}
              {person.instagram&&<Link href={person.instagram} className="text-[#3e8e65]/[.9] hover:text-blue-800">
                <i className="fab fa-instagram"></i>
              </Link>}
              {/* <Link href="#" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-dribbble"></i>
              </Link>
              <Link href="#" className="text-black hover:text-gray-800">
                <i className="fab fa-github"></i>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
