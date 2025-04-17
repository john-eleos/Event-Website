"use client";



import React from "react";
import Link from "next/link";

export const programs = "https://docs.google.com/spreadsheets/d/1YCygUltH7xpepHDVmN3SIYVfpk4AgDFAHK_TDCQvSYQ/edit?usp=drivesdk";

const Footer = () => {
  return (
    <>
      <div className="w-screen flex-col lg:justify-items-center border-t border-gray-100 bg-gray-50">
        <div className="flex-col justify-items-center px-4 pt-8 lg:mt-24 lg:mb-8 lg:px-20 lg:py-0">
          <div className="pb-4">
            <h1 className="text-center text-[#3e8e65] text-3xl font-extrabold lg:text-4xl">
              Be a part of the convention!
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-4 lg:mx-0 lg:inline-flex lg:flex-row">
          {/* <div className="w-full lg:w-auto">
            <Link
              href="#"
              className="block w-full lg:w-auto text-center text-black text-sm py-2.5 px-10 border border-gray-200 rounded-lg hover:bg-gray-100 whitespace-nowrap"
            >
              RECEIVE NEWS
            </Link>
          </div> */}
          <div className="w-full lg:w-auto">
            <button
            onClick={() => {
              window.open(programs, "_blank")
          }}
              
              className="block w-full lg:w-auto text-center text-sm bg-[#3e8e65] rounded-lg text-white py-2.5 px-10 hover:bg-[#3e8e65]/[.9] whitespace-nowrap"
            >
              Programs Details
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex-col bg-gray-50 px-4 lg:px-20 lg:pt-12 lg:flex lg:flex-row lg:justify-between">
        <div className="mt-4">
          <h1 className="text-base text-[#3e8e65] font-semibold pt-4 ">COMPANY</h1>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            About
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Premium
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Blog
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Affiliate Program
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Get Coupon
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-base text-[#3e8e65] font-semibold pt-4 ">HELP AND SUPPORT</h1>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Contact Us
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Knowledge Center
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Premium Support
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Sponsorships
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-base text-[#3e8e65] font-semibold pt-4 ">RESOURCES</h1>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Third-Party Tools
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Illustrations
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Themesberg
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Bluehost
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Stock Photos
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-base text-[#3e8e65] font-semibold pt-4 ">LEGAL</h1>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            Terms & Conditions
          </p>
          <p className="text-base font-normal text-gray-500 mt-3 hover:cursor-pointer">
            EULA
          </p>
        </div>
      </div> */}
      <div className="border-b-2 bg-gray-50 border-gray-100 p-4 md:px-20"></div>
      <div className="flex-col bg-gray-50 justify-items-center px-4 py-6 lg:px-20">
        <div className="flex gap-4">
          <img
            className="w-[70px]"
            src="/logo.png"
            alt="logo"
          />
        </div>
        <div>
          <p className="pt-4 text-base font-normal text-gray-500 md:pt-0">
            © 2025 CMCM Youth for Christ, All rights reserved.
          </p>
        </div>
        {/* <div className="text-2xl text-gray-500">
          <i className="fa-brands fa-github mx-2"></i>
          <i className="fa-brands fa-x-twitter mx-2"></i>
          <i className="fa-brands fa-dribbble mx-2"></i>
          <i className="fa-brands fa-instagram mx-2"></i>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
