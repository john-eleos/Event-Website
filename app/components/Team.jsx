import React from "react";
import Link from "next/link";
import Image from "next/image";
import P1 from "../../public/people/p1.jpg";
import P2 from "../../public/people/p2.jpg";
import P3 from "../../public/people/p3.jpg";
import P4 from "../../public/people/p4.jpg";
import P5 from "../../public/people/p5.jpg";
import P6 from "../../public/people/p6.jpg";
import P7 from "../../public/people/p7.jpg";
import P8 from "../../public/people/p8.jpg";
import P9 from "../../public/people/p9.jpg";
import P10 from "../../public/people/p10.jpg";
import P11 from "../../public/people/p11.jpg";
import P12 from "../../public/people/p12.jpg";

const Team = () => {
  return (
    <>
      <div className="mt-8 lg:mt-24 mx-auto max-w-max">
        <h1 className="text-3xl font-extrabold text-center lg:text-4xl">
          Our speakers
        </h1>
        <p className="text-xl text-gray-500 mb-6 mt-4 text-center max-w-[672px]">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl p-8">
        {[
          {
            name: "Bonnie Green",
            role: "Senior Front-end Developer",
            img: P1,
          },
          {
            name: "Micheal Gough",
            role: "Front-end Developer",
            img: P2,
          },
          {
            name: "Helene Engels",
            role: "Designer",
            img: P3,
          },
          {
            name: "Neil Sims",
            role: "CEO & React Developer",
            img: P4,
          },
          {
            name: "Roberta Casas",
            role: "SEO Specialist",
            img: P5,
          },
          {
            name: "Joseph McFall",
            role: "Backend Developer",
            img: P6,
          },
          {
            name: "Karen Nelson",
            role: "Designer",
            img: P7,
          },
          {
            name: "Jese Leos",
            role: "Logo Designer",
            img: P8,
          },
          {
            name: "Lana Byrd",
            role: "SEO Specialist",
            img: P9,
          },
          {
            name: "Leslie Livingston",
            role: "Backend Developer",
            img: P10,
          },
          {
            name: "Robert Brown",
            role: "Designer",
            img: P11,
          },
          {
            name: "Thomas Lean",
            role: "Logo Designer",
            img: P12,
          },
        ].map((person, index) => (
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
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="#" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-dribbble"></i>
              </Link>
              <Link href="#" className="text-black hover:text-gray-800">
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
