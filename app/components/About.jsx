"use client";

import React from "react";

const About = ({routeToFeatures}) => {
  return (
    <>
      <div className="flex-col px-4 lg:py-12 lg:px-20 lg:flex lg:flex-row lg:justify-between">
        <div className="pb-12 lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl font-extrabold text-left lg:text-4xl text-[#3e8e65]">
           About the 20th Annual International Youth Convention
          </h1>
          <p className="text-left text-xl mt-4 font-normal text-gray-500">
          The Youth for Christ (YFC) Convention is a dynamic gathering designed to inspire, equip, 
          and empower young believers for both spiritual and personal growth. This year’s theme, 
          "Illumination," focuses on stepping into divine wisdom, clarity, and purpose.  
          </p>
          <div className="mb-6 mt-4" >
            <button
              // href="#"
              onClick={routeToFeatures}
              className=" text-base font-medium text-[#3e8e65] hover:cursor-pointer"
            >
              Learn more
              <i className="fa-solid fa-angle-right pl-1"></i>
            </button>
          </div>
        </div>

        <div className="pb-12 lg:w-1/2 lg:pl-8">
          <p className="text-left text-xl mt-4 font-normal text-gray-500">
            The convention features impactful worship and teaching sessions, 
            entrepreneurship masterclasses, and panel discussions with seasoned 
            professionals and spiritual leaders. Attendees will also experience an AI 
            exposition, exploring the role of technology in today’s world.  
          </p>
          <p className="text-left text-xl mt-4 font-normal text-gray-500">
          Beyond learning, the convention offers a time for connection and relaxation, 
          including a dinner night, sports and games, 
          and a grand thanksgiving service to conclude the event.  

          </p>
          <p className="text-left text-xl mt-4 font-normal text-gray-500">
          Get ready for a transformative experience that blends faith, innovation, leadership, and fellowship!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
