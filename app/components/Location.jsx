"use client";





import React from "react";
import Image from "next/image";
import Venue2 from "../../public/location1.jpg";
import Venue from "../../public/location2.jpg";

const link = "https://maps.app.goo.gl/73yL4N399tsRVjHA6"

const Location = () => {
  const openMap=()=>{
    if(typeof window !== undefined){
      window.open(link, "_blank")
    }
  }
  
  return (
    <>
      <div className="flex-col px-4 py-8 lg:py-24 lg:px-20 lg:flex lg:flex-row lg:justify-between">
        <div className="pb-12 lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl text-[#3e8e65] font-extrabold text-left lg:text-4xl">
            Venue and Location
          </h1>
          <p className="text-left text-lg mt-4 font-normal">
            CMCM Drive Way, off Ishola Bello St, Ojodu, 101233, Lagos, Nigeria
          </p>
         
          <button onClick={openMap} className="border border-gray-200 rounded-lg py-2.5 px-5 hover:bg-gray-100 hover:cursor-pointer my-8">
            <i className="fa-solid fa-location-dot mr-2"></i>Show on google maps
          </button>
        </div>

        <div className="pb-12 lg:w-1/2 lg:pl-8">
          <Image
            src={Venue}
            alt="map"
            className="hidden lg:block h-max w-full object-fill rounded h-auto w-24"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Location;
