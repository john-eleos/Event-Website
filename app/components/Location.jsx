import React from "react";
import Image from "next/image";
import Venue from "../../public/location.png";

const Location = () => {
  return (
    <>
      <div className="flex-col px-4 py-8 lg:py-24 lg:px-20 lg:flex lg:flex-row lg:justify-between">
        <div className="pb-12 lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl font-extrabold text-left lg:text-4xl">
            Venue and Location
          </h1>
          <p className="text-left text-lg mt-4 font-normal">
            845 Market St, Suite 450, San Francisco, CA 94103
          </p>
          <p className="text-left text-lg my-4 font-normal text-gray-500">
            Flowbite Web Summit is a large high-tech conference space right in
            the heart of downtown San Francisco. It is easily accessible via
            BART and Muni. Bespoke is located inside the Westfield San Francisco
            Centre mall on level 4, next to Bloomingdale’s Westfield.
          </p>
          <button className="border border-gray-200 rounded-lg py-2.5 px-5 hover:bg-gray-100 hover:cursor-pointer">
            <i className="fa-solid fa-location-dot mr-2"></i>Show on google maps
          </button>
        </div>

        <div className="pb-12 lg:w-1/2 lg:pl-8">
          <Image
            src={Venue}
            alt="map"
            className="hidden lg:block h-max w-full"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Location;
