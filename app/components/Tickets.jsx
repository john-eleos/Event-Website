"use client";





import React from "react";

const Tickets = () => {
  return (
    <>
      <div className="flex-col justify-items-center px-4 py-8 lg:py-24 lg:px-20">
        <div className="pb-12 lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl font-extrabold text-[#3e8e65] text-center lg:text-4xl">
            Get your tickets
          </h1>
          <p className="text-lg text-center my-4 font-normal text-gray-500">
            Get the full Flowbite Web Summit experience by taking part in
            satellite events staged by our partners.
          </p>
          <div className="mx-auto max-w-max">
            <button onClick={() => {
              window.open("https://lu.ma/cds4arxz", "_blank")
          }} className="bg-[#3e8e65] text-white rounded-lg py-2.5 px-5 hover:bg-[#3e8e65]/[.9] hover:cursor-pointer">
              Get tickets<i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
