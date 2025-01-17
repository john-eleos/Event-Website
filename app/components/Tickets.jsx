import React from "react";

const Tickets = () => {
  return (
    <>
      <div className="flex-col justify-items-center px-4 py-8 lg:py-24 lg:px-20">
        <div className="pb-12 lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl font-extrabold text-center lg:text-4xl">
            Get your tickets
          </h1>
          <p className="text-lg text-center my-4 font-normal text-gray-500">
            Get the full Flowbite Web Summit experience by taking part in
            satellite events staged by our partners.
          </p>
          <div className="mx-auto max-w-max">
            <button className="bg-blue-700 text-white rounded-lg py-2.5 px-5 hover:bg-blue-600 hover:cursor-pointer">
              Get tickets<i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
