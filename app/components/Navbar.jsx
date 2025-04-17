"use client";



import React from "react";
import Link from "next/link";
import { programs } from "./Footer";

import { useState } from "react";

const Navbar = ({ routeScroll }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 pt-6 lg:px-20">
        <div className="flex gap-4">
          <img className="w-[90px]" src="/logo.png" alt="logo" />
          <div className="hidden lg:ml-4 ml-0 py-[30px] text-base font-medium text-gray-900 lg:inline-flex lg:gap-12">
            <button onClick={() => routeScroll("about")} className="hover:text-[#3e8e65]/[.9]">Home</button>
            <button
              onClick={() => window.open("programs", "_blank")}
              className="hover:text-[#3e8e65]/[.9]"
            >
              Program Details
            </button>
            <button onClick={() => routeScroll("speakers")} className="hover:text-[#3e8e65]/[.9]">Speakers</button>
            <button onClick={() => routeScroll("faq")} className="hover:text-[#3e8e65]/[.9]">FAQ</button>
          </div>
        </div>

        <div className="hidden lg:inline-flex">
          <button
            onClick={() => window.open("https://lu.ma/cds4arxz", "_blank")}
            className="bg-[#3e8e65] py-[10px] text-white text-sm px-5 rounded-lg hover:bg-[#3e8e65]/[.9] hover:cursor-pointer"
          >
            Register Now!
          </button>
        </div>

        {/* Hamburger menu */}
        <div className="lg:hidden">
        <button onClick={toggleMobileMenu} className="flex items-center text-gray-500 p-3 focus:outline-none">
            {isMobileMenuOpen ? (
              // Close icon
              <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20">
                <title>Close menu</title>
                <path d="M14.348 14.849a1 1 0 0 1-1.414 0L10 11.914l-2.935 2.935a1 1 0 1 1-1.414-1.414l2.935-2.935-2.935-2.935a1 1 0 1 1 1.414-1.414L10 9.086l2.935-2.935a1 1 0 0 1 1.414 1.414L11.414 10l2.935 2.935a1 1 0 0 1 0 1.414z" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 space-y-4 text-base font-medium text-gray-900 bg-white shadow-md">
          <div className="h-8"></div>
          <button onClick={() => { routeScroll("about"); toggleMobileMenu(); }} className="block w-full text-left hover:text-[#3e8e65]/[.9]">Home</button>
          <button onClick={() => { window.open("programs", "_blank"); toggleMobileMenu(); }} className="block w-full text-left hover:text-[#3e8e65]/[.9]">Program Details</button>
          <button onClick={() => { routeScroll("speakers"); toggleMobileMenu(); }} className="block w-full text-left hover:text-[#3e8e65]/[.9]">Speakers</button>
          <button onClick={() => { routeScroll("faq"); toggleMobileMenu(); }} className="block w-full text-left hover:text-[#3e8e65]/[.9]">FAQ</button>
          <button
            onClick={() => { window.open("https://lu.ma/cds4arxz", "_blank"); toggleMobileMenu(); }}
            className="block w-full bg-[#3e8e65] text-white text-sm px-5 py-2 rounded-lg hover:bg-[#3e8e65]/[.9]"
          >
            Register Now!
          </button>
          <div className="h-3"></div>
        </div>
      )}
    </>
  );
};

export default Navbar;



// const Navbar = ({routeScroll}) => {
//   return (
//     <>
//       <div className="flex items-center justify-between px-4 pt-6 lg:px-20 ">
//         <div className="flex gap-4">
//           <img
//             className="w-[90px]  "
//             src="/logo.png"
//             alt="logo"
//           />
//           <div className="hidden lg:ml-4 ml-0 py-[30px] text-base font-medium text-gray-900 lg:inline-flex lg:gap-12">
//             <button onClick={()=>routeScroll("about")} className="hover:text-[#3e8e65]/[.9]" href="#about">Home</button>
//             <button onClick={() => {
//               window.open(programs, "_blank")
//               }} className="hover:text-[#3e8e65]/[.9]" href="#programs">Program Details</button>
//             <button onClick={()=>routeScroll("speakers")} className="hover:text-[#3e8e65]/[.9]" href="#speakers">Speakers</button>
//             <button onClick={()=>routeScroll("faq")} className="hover:text-[#3e8e65]/[.9]" href="#faq">FAQ</button>
//             {/* <Link className="hover:text-[#3e8e65]/[.9]" href="#">Contact</Link> */}
//           </div>
//         </div>
//         <div className="hidden lg:inline-flex ">
//           <button
//           onClick={() => {
//               window.open("https://lu.ma/cds4arxz", "_blank")
//           }}
//           className="bg-[#3e8e65] py-[10px] text-white text-sm px-5 rounded-lg hover:bg-[#3e8e65]/[.9] hover:cursor-pointer ">
//             Register Now!
//           </button>
//         </div>
//         <div className="lg:hidden">
//           <button className="navbar-burger flex items-center text-gray-500 p-3">
//             <svg
//               className="block h-6 w-6 fill-current"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <title>Mobile menu</title>
//               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
