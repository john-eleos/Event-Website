"use client";


import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="flex-col justify-items-center px-4 py-8 lg:pb-24 lg:px-20">
        <div className="mb-12">
          <h1 className="text-4xl text-[#3e8e65] font-extrabold text-center">
            Frequently asked questions
          </h1>
        </div>

        <div className="max-w-[695px] flex-col bg-white">
          <div className=" rounded-md border border-gray-200">
            <div className="bg-gray-100 py-4">
              <div className="flex items-center justify-between px-3">
                <div className="flex flex-shrink-0 items-center">
                  <i className="fa-solid fa-circle-question pr-2 text-base"></i>
                  <p className="text-base">What is "Flowbite library"?</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <i className="fa-solid fa-angle-up text-base"></i>
                </div>
              </div>
            </div>
            <div>
              <p className="p-4 text-base text-gray-500">
                Generally, it is accepted to use FlowBite in open-source
                projects, as long as it is not a Ul library, a theme, a
                template, a page-builder that would be considered as an
                alternative to FlowBite itself. With that being said, feel free
                to use this design kit for your open-source projects. Find out
                more information by{" "}
                <span className="text-[#3e8e65]/[.9] font-medium">
                  {" "}
                  reading the license.
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-md border border-gray-200 bg-white py-4 text-gray-500">
            <div className="flex items-center justify-between px-3">
              <div className="flex flex-shrink-0 items-center">
                <i className="fa-solid fa-circle-question pr-2 text-base"></i>
                <p className="text-base">
                  Where can I access my download files?
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <i className="fa-solid fa-angle-down text-base"></i>
              </div>
            </div>
          </div>
          <div className=" rounded-md border border-gray-200 bg-white py-4 text-gray-500">
            <div className="flex items-center justify-between px-3">
              <div className="flex flex-shrink-0 items-center">
                <i className="fa-solid fa-circle-question pr-2 text-base"></i>
                <p className="text-base">
                  Can I use FlowBite for commercial purposes?
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <i className="fa-solid fa-angle-down text-base"></i>
              </div>
            </div>
          </div>
          <div className=" rounded-md border border-gray-200 bg-white py-4 text-gray-500">
            <div className="flex items-center justify-between px-3">
              <div className="flex flex-shrink-0 items-center">
                <i className="fa-solid fa-circle-question pr-2 text-base"></i>
                <p className="text-base">What about browser support?</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <i className="fa-solid fa-angle-down text-base"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
