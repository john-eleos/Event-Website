import React from "react";

const Features = () => {
  return (
    <>
      <div className="flex-col mt-8 px-4 lg:pt-12 lg:px-20 lg:flex lg:flex-row lg:justify-between">
        <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px]">
          <i className="fa-solid fa-chart-line text-xl text-blue-700 p-3 bg-blue-100 rounded-lg"></i>

          <h1 className="text-xl font-bold mt-2">
            First rate devs & designers
          </h1>

          <p className="text-gray-500 text-base font-normal mt-2">
            We bring the community back together in person! It’s something
            magical about bringing hundreds of people together in the same
            location.
          </p>
        </div>
        <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px]">
          <i className="fa-solid fa-briefcase text-xl text-blue-700 p-3 bg-blue-100 rounded-lg"></i>

          <h1 className="text-xl font-bold mt-2">Affordable</h1>

          <p className="text-gray-500 text-base font-normal mt-2">
            We want anyone in the industry to be able to come, which means
            keeping tickets reasonably priced (thanks largely to our generous
            sponsors).
          </p>
        </div>
        <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px]">
          <i className="fa-solid fa-palette text-xl text-blue-700 p-3 bg-blue-100 rounded-lg"></i>

          <h1 className="text-xl font-bold mt-2">
            For everyone in the community
          </h1>

          <p className="text-gray-500 text-base font-normal mt-2">
            Our community is dedicated to providing an inclusive, enjoyable
            experience for everyone in the tech and design industry.
          </p>
        </div>
      </div>

      <div className="flex-col px-4 lg:pb-12 lg:px-20 lg:flex lg:flex-row lg:justify-between">
        <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px]">
          <i className="fa-solid fa-wallet text-xl text-blue-700 p-3 bg-blue-100 rounded-lg"></i>

          <h1 className="text-xl font-bold mt-2">Money prizes</h1>

          <p className="text-gray-500 text-base font-normal mt-2">
            Amazing cash prizes can often be included in prize bundles where you
            win prizes including items, or courses, holidays and more.
          </p>
        </div>
        <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px]">
          <i className="fa-solid fa-database text-xl text-blue-700 p-3 bg-blue-100 rounded-lg"></i>

          <h1 className="text-xl font-bold mt-2">Level-up</h1>

          <p className="text-gray-500 text-base font-normal mt-2">
            Take your skills up a notch by attending one of the in-person
            workshops from the best experts in the tech and design industry.
          </p>
        </div>
        <div className="flex-col items-center text-center pb-11 mx-8 lg:w-[405.33px]">
          <i className="fa-solid fa-scale-balanced text-xl text-blue-700 p-3 bg-blue-100 rounded-lg"></i>

          <h1 className="text-xl font-bold mt-2">Make new connections</h1>

          <p className="text-gray-500 text-base font-normal mt-2">
            We bring the community back together in person! It’s something
            magical about bringing hundreds of people together in the same
            location.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
