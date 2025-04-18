"use client";




import React from "react";

const Features = () => {
  return (
    <>
      <div className="flex-col mt-8 px-4 lg:pt-12 lg:px-20 lg:flex lg:flex-row lg:justify-between">
        <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px]">
          <i className="fa-solid fa-chart-line text-xl text-[#3e8e65] p-3 bg-[#3e8e65]/[.1] rounded-lg"></i>

          <h1 className="text-xl text-[#3e8e65] font-bold mt-2">
          Games & Sports
          </h1>

          <p className="text-gray-500 text-base font-normal mt-2">
            Bring your A-game! From friendly competitions to high-energy matches, get ready for fun, teamwork, and an adrenaline rush like never before.
          </p>
        </div>
        <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px] lg:mt-40 mt-1">
          <i className="fa-solid fa-briefcase text-xl text-[#3e8e65] p-3 bg-[#3e8e65]/[.1] rounded-lg"></i>

          <h1 className="text-xl text-[#3e8e65] font-bold mt-2">AI Exposition & Teaching</h1>

          <p className="text-gray-500 text-base font-normal mt-2">
          The future is now! Explore cutting-edge tech, learn how AI is shaping industries, and discover how to leverage it for career and kingdom impact. 
          </p>
        </div>
        <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px]">
          <i className="fa-solid fa-palette text-xl text-[#3e8e65] p-3 bg-[#3e8e65]/[.1] rounded-lg"></i>

          <h1 className="text-xl text-[#3e8e65] font-bold mt-2">
          Prophetic Impartation
          </h1>

          <p className="text-gray-500 text-base font-normal mt-2">
          Step into your next level! Experience deep encounters, divine direction, and a fresh outpouring of grace as anointed ministers release prophetic blessings.
          </p>
        </div>
      </div>

      <div className="flex-col px-4 lg:pb-12 lg:px-20 lg:flex lg:flex-row lg:justify-between">
        <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px]">
          <i className="fa-solid fa-wallet text-xl text-[#3e8e65] p-3 bg-[#3e8e65]/[.1] rounded-lg"></i>

          <h1 className="text-xl text-[#3e8e65] font-bold mt-2">Panel Sessions</h1>

          <p className="text-gray-500 text-base font-normal mt-2">
          Real talk, real impact! Hear from industry experts and leaders as they share wisdom on faith, business, career, and life. Get answers, get inspired!
          </p>
        </div>
        <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px]">
          <i className="fa-solid fa-database text-xl text-[#3e8e65] p-3 bg-[#3e8e65]/[.1] rounded-lg"></i>

          <h1 className="text-xl text-[#3e8e65] font-bold mt-2">Worship Experience</h1>

          <p className="text-gray-500 text-base font-normal mt-2">
          Pure worship, deep encounters! Immerse yourself in powerful worship, lifting your heart to God in an atmosphere of freedom, joy, and transformation.
          </p>
        </div>
        {/* <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px]">
          <i className="fa-solid fa-scale-balanced text-xl text-[#3e8e65] p-3 bg-[#3e8e65]/[.1] rounded-lg"></i>

          <h1 className="text-xl text-[#3e8e65] font-bold mt-2">Make new connections</h1>

          <p className="text-gray-500 text-base font-normal mt-2">
            We bring the community back together in person! It’s something
            magical about bringing hundreds of people together in the same
            location.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Features;
