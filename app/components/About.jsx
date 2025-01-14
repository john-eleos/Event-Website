import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex-col px-4 lg:py-12 lg:px-20 lg:flex lg:flex-row lg:justify-between">
        <div className="pb-12 lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl font-extrabold text-left lg:text-4xl">
            What is Flowbite Web Summit?
          </h1>
          <p className="text-left text-xl mt-4 font-normal text-gray-500">
            Empower Developers, IT Ops, and business teams to collaborate at
            high velocity. Respond to changes and deliver great customer and
            employee service experiences fast.
          </p>
          <div className="mb-6 mt-4">
            <Link
              href="#"
              className=" text-base font-medium text-blue-700 hover:cursor-pointer"
            >
              Learn more
              <i className="fa-solid fa-angle-right pl-1"></i>
            </Link>
          </div>
        </div>

        <div className="pb-12 lg:w-1/2 lg:pl-8">
          <p className="text-left text-xl mt-4 font-normal text-gray-500">
            Track work across the enterprise through an open, collaborative
            platform. Link issues across Jira and ingest data from other
            software development tools, so your IT support and operations teams
            have richer contextual information to rapidly respond to requests,
            incidents, and changes.
          </p>
          <p className="text-left text-xl mt-4 font-normal text-gray-500">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.Accelerate critical development work,
            eliminate toil, and deploy changes with ease, with a complete audit
            trail for every change.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
