import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-6 lg:px-20 ">
        <div className="flex gap-4">
          <img
            className="w-[144px]  "
            src="https://flowbite.s3.amazonaws.com/brand/logo-light/type/flowbite-logo.png"
            alt="logo"
          />
          <div className="hidden py-[8.5px] text-base font-medium text-gray-900 lg:inline-flex lg:gap-4">
            <Link href="#company">Company</Link>
            <Link href="#">Marketplace</Link>
            <Link href="#">Features</Link>
            <Link href="#">Team</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>
        <div className="hidden lg:inline-flex ">
          <Link
            href="#"
            className="text-sm font-medium text-gray-900 p-[10px] "
          >
            Log In
          </Link>
          <button className="bg-blue-700 text-white text-sm px-5 rounded-lg hover:bg-blue-600 hover:cursor-pointer ">
            Get started
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
