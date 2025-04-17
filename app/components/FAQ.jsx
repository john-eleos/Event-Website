"use client";


import React, { useState } from "react";



const faq = [
  {
    title:"HOW DO I REGISTER?",
    response:[
      "1. Scan the barcode on the flyer or poster.",
       "2. A registration form will pop up — fill it out with your details.",
       "3. Once completed, a confirmation barcode will be sent to your email.",
       "4. Save that barcode! You’ll need it to gain access to the convention."
    ]
  },
  {
    title:"IS REGISTRATION FREE?",
    response:[
      "Yes! Registration is absolutely FREE, but it is compulsory. You must be registered to attend."
    ]
  },
  {
    title:"WILL THERE BE CAMPING?",
    response:[
      "Yes, there will be provisions for camping throughout the duration of the convention."
    ]
  },
  {
    title:"IS CAMPING COMPULSORY?",
    response:[
      "No, camping is not compulsory. You are encouraged to do whatever you’re most comfortable with—whether it’s staying on-site or commuting daily."
    ]
  },
  {
    title:"WILL THERE BE FEEDING?",
    response:[
      "Yes! Feeding will be provided, but you are also welcome to come with your own snacks and drinks for personal satisfaction."
    ]
  },
  {
    title:"ARE THERE SECURITY AND SAFETY MEASURES IN PLACE?",
    response:[
      "Absolutely! Robust security and safety arrangements have been made to ensure all participants are well-protected throughout the convention."
    ]
  },
]

const FAQ = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="flex-col justify-items-center px-4 py-8 lg:pb-24 lg:px-20">
        <div className="mb-12">
          <h1 className="text-4xl text-[#3e8e65] font-extrabold text-center">
          FREQUENTLY ASKED QUESTIONS – ILLUMINATION 2025
          </h1>
        </div>

        <div className="max-w-[695px] flex-col bg-white">
          {faq.map((e,i)=>
          <div key={i} className=" rounded-md border border-gray-200">
            <div className={`${active===i?"bg-gray-100":"bg-white"} py-4 hover:cursor-pointer`} onClick={()=>setActive(i)}>
              <div className="flex items-center justify-between px-3">
                <div className="flex flex-shrink-0 items-center">
                  <i className="fa-solid fa-circle-question pr-2 text-base"></i>
                  <p className="text-base">{e.title}</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <i className="fa-solid fa-angle-up text-base"></i>
                </div>
              </div>
            </div>
           {active === i && <div>
              {e.response.map((s,w)=><p key={w} className="p-4 text-base text-gray-500">{s}</p>)}
            </div>}
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FAQ;
