"use client";



import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 pt-6 lg:px-20 ">
        <div className="flex gap-4">
          <img
            className="w-[90px]  "
            src="/logo.png"
            alt="logo"
          />
          <div className="hidden lg:ml-4 ml-0 py-[30px] text-base font-medium text-gray-900 lg:inline-flex lg:gap-12">
            <Link className="hover:text-[#3e8e65]/[.9]" href="#company">Home</Link>
            <Link className="hover:text-[#3e8e65]/[.9]" href="#">Program Details</Link>
            <Link className="hover:text-[#3e8e65]/[.9]" href="#">Speakers</Link>
            <Link className="hover:text-[#3e8e65]/[.9]" href="#">FAQ</Link>
            {/* <Link className="hover:text-[#3e8e65]/[.9]" href="#">Contact</Link> */}
          </div>
        </div>
        <div className="hidden lg:inline-flex ">
          {/* <Link
            href="#"
            className="text-sm font-medium text-gray-900 p-[10px] lg:mr-4 mr-0"
          >
            Log In
          </Link> */}
          <button
          onClick={() => {
              window.open("https://lu.ma/cds4arxz", "_blank")
          }}
          className="bg-[#3e8e65] py-[10px] text-white text-sm px-5 rounded-lg hover:bg-[#3e8e65]/[.9] hover:cursor-pointer ">
            Register Now!
          </button>
        </div>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-gray-500 p-3">
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
