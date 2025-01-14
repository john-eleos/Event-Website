import React from "react";
import Image from "next/image";
import HeroImg from "../../public/hero.png";

const Hero = () => {
  return (
    <>
      <div className="flex-col w-screen mb-9 lg:inline-flex lg:flex-row">
        <div className="flex-col lg:w-2/3 lg:my-28 px-4">
          <div className="flex-col lg:py-0 lg:px-20 px-4 py-8">
            <div className="pb-4">
              <h1 className="text-4xl font-extrabold text-left lg:text-6xl">
                Discover inovative products and possibilities
              </h1>
            </div>
            <div className="pb-8">
              <p className="text-base font-light text-gray-500 lg:text-xl">
                Flowbite Web Summit will bring together 70,000+ people, and the
                companies redefining the tech industry.
              </p>
            </div>

            <div className=" flex-col lg:flex lg:justify-between lg:flex-row">
              <div className="lg:pr-6 pb-11">
                <i className="fa-solid fa-calendar-days text-3xl text-gray-500"></i>

                <h1 className="text-xl font-bold mt-2">October 27, 2023</h1>

                <p className="text-gray-500 text-base font-normal mt-2">
                  Join us at FlowBite 2023 to understand what’s next as the
                  global tech and startup ecosystem reimagines, rebuilds, and
                  rethinks the future of everything.
                </p>
                <button className="block w-full lg:w-auto text-center text-sm bg-blue-700 rounded-lg text-white mt-4 py-2.5 px-3 hover:bg-blue-600 whitespace-nowrap">
                  Buy tickets now
                  <i className="fa-solid fa-arrow-right pl-2"></i>
                </button>
              </div>

              <div className="hidden border w-px border-gray-200 mx-4 lg:block"></div>

              <div className="lg:pl-6">
                <i className="fa-solid fa-users text-3xl text-gray-500"></i>

                <h1 className="text-xl font-bold mt-2">
                  25+ top notch speakers
                </h1>

                <p className="text-gray-500 text-base font-normal mt-2">
                  Here you will find keynote speakers, who all are able to talk
                  about Recruiting. Click on the individual keynote speakers and
                  read more about them and their keynotes.
                </p>
                <button className="block w-full lg:w-auto text-center text-sm rounded-lg mt-4 py-2.5 px-3 border border-gray-200 hover:bg-gray-100 whitespace-nowrap">
                  <i className="fa-solid fa-clipboard-list pr-2"></i>
                  View list
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden flex-col lg:w-1/3 lg:block">
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
