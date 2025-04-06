"use client";


import React from "react";
import Image from "next/image";
import HeroImg from "../../public/hero2.png";
import { teamsCount } from "./Team";

const Hero = ({routeToTeams}) => {
  return (
    <>
      <div className="flex-col w-screen mb-9 lg:inline-flex lg:flex-row">
        <div className="flex-col lg:w-2/3 lg:my-28 px-4">
          <div className="flex-col lg:py-0 lg:px-20 px-4 py-8">
            <div className="pb-4">
              <h1 className="text-3xl text-[#3e8e65] font-extrabold text-left lg:text-5xl">
                20th Annual International Youth Convention
              </h1>
            </div>
            <div className="pb-8">
              <p className="text-base font-light text-gray-500 lg:text-base">
              The Youth for Christ (YFC) Convention by CMCM Worldwide unites young believers for spiritual growth and impactful service. Through worship, teachings, workshops, and fellowship, it fosters unity, revival, and a renewed commitment to Christ. This year’s event promises a transformative experience, deepening faith and purpose in God’s kingdom.
              </p>
            </div>

            <div className=" flex-col lg:flex lg:justify-between lg:flex-row">
              <div className="lg:pr-6 pb-11">
                <i className="fa-solid fa-calendar-days text-3xl text-gray-500"></i>

                <h1 className="text-lg font-bold mt-2 text-[#3e8e65]">April 17th to 21st, 2025</h1>

                <p className="text-gray-500 text-sm font-normal mt-2">
                Join us for the YFC Convention! <br/>We invite you to be part of the Youth for Christ (YFC) Convention at 1 CMCM Drive Way Akiode, Lagos, Nigeria on 17th April, 2025 to 21st April, 2025—a powerful gathering of young believers from across CMCM Worldwide.
                </p>
                <button 
                onClick={() => {
                  window.open("https://lu.ma/cds4arxz", "_blank")
                }}
                className="block w-full lg:w-auto text-center text-sm bg-[#3e8e65] rounded-lg text-white mt-4 py-2.5 px-3 hover:bg-[#3e8e65]/[.9] whitespace-nowrap">
                  Register Now!
                  <i className="fa-solid fa-arrow-right pl-2"></i>
                </button>
              </div>

              <div className="hidden border w-px border-gray-200 mx-4 lg:block"></div>

              <div className="lg:pl-4">
                <i className="fa-solid fa-users text-3xl text-gray-500"></i>

                <h1 className="text-lg font-bold mt-2 text-[#3e8e65]">
                  {teamsCount}+ impactful speakers
                </h1>

                <p className="text-gray-500 text-sm font-normal mt-2">
                Our speakers are seasoned professionals and spiritual leaders, excelling in business, entrepreneurship, leadership, and ministry. They are industry experts and kingdom ambassadors who have successfully bridged corporate and spiritual realms.
                </p>
                <button onClick={routeToTeams} className="block w-full lg:w-auto text-center text-sm rounded-lg mt-4 py-2.5 px-3 border border-gray-200 hover:bg-gray-100 whitespace-nowrap">
                  <i className="fa-solid fa-clipboard-list pr-2"></i>
                  Meet Our Speakers!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden flex-col lg:w-3/5 lg:block">
          <Image
            src={HeroImg}
            alt="map"
            className="hidden lg:block h-max w-full pt-6"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
