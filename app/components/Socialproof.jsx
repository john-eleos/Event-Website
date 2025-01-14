import React from "react";
import Link from "next/link";
import Image from "next/image";
import Img1 from "../../public/img1.png";
import Img2 from "../../public/img2.png";

const Socialproof = () => {
  return (
    <>
      <div className="mx-auto max-w-max">
        <h1 className="text-3xl font-extrabold text-centre lg:text-4xl">
          Why attend?
        </h1>
        <div className="mb-6 mt-4 mx-auto max-w-max">
          <Link
            href="#"
            className="text-base font-medium text-blue-700 hover:cursor-pointer"
          >
            Get your tickets today
            <i className="fa-solid fa-angle-right pl-1"></i>
          </Link>
        </div>
      </div>
      <div className="flex items-center flex-row gap-8 justify-between px-4 lg:py-12 lg:px-20">
        <div className="text-3xl text-gray-500">
          <i className="fa-solid fa-circle-chevron-left"></i>
        </div>
        <div>
          <Image src={Img1} alt="img1" className="rounded-lg"></Image>
        </div>
        <div className="hidden lg:block">
          <Image src={Img2} alt="img2" className="rounded-lg"></Image>
        </div>
        <div className="text-3xl">
          <i className="fa-solid fa-circle-chevron-right"></i>
        </div>
      </div>
      <div className="grid gap-8 mx-8 lg:py-12 grid-cols-2 lg:grid-cols-6">
        {[
          { number: "20", label: "Speakers" },
          { number: "40k+", label: "Attendees" },
          { number: "50+", label: "Market stands" },
          { number: "$80k", label: "Prizes" },
          { number: "2k+", label: "Professionals" },
          { number: "200%", label: "Creativity" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <h1 className="leading-tight text-4xl font-extrabold">
              {item.number}
            </h1>
            <p className="text-base font-normal text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Socialproof;
