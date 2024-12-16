import React from "react";
import { packages } from "../config/data";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="w-full h-full min-h-screen p-4 mt-8 md:mt-16 bg-blue-950 text-white flex items-center justify-start flex-col">
      <div className="flex flex-col gap-4 text-center mt-4 md:mt-8 w-full md:max-w-4xl">
        <h3 className="text-3xl font-semibold text-gray-400 tracking-tighter">
          Our Pricing
        </h3>
        <h2 className="text-5xl font-bold tracking-light capitalize font-rowdies">
          Choose your <span className="text-teal-400">Package</span>
        </h2>
        <p className="text-xl tracking-normal">
          We offer a variety of pricing plans to suit your needs and budget. Our
          pricing is based on your project scope, complexity, and client
          preferences.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-8 py-5 pt-8">
        {packages.map((packageData, index) => (
          <div
            key={packageData.id}
            className={`flex flex-col justify-between gap-2 p-6 rounded-xl ${
              index === 1 ? "border-2 border-teal-400" : ""
            } w-full max-w-xs mx-auto bg-gradient-to-tr from-black to-teal-400/25`}
          >
            <div className="">
              <h3 className="text-xl py-2 font-semibold text-gray-400">
                {packageData.title}
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-white">
                  ${packageData.price}
                </span>
                <span className="text-gray-400 text-xs tracking-normal">
                  /mo
                </span>
              </div>
              <p className="text-lg text-white tracking-normal py-4">
                {packageData.description}
              </p>
              <div className="flex flex-col gap-2 py-6">
                {packageData.benefits.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <TiTick size={16} className="text-teal-400" />
                    <span className="text-xs tracking-normal text-gray-400">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button className="flex justify-center items-center gap-2 px-4 py-2 text-lg font-semibold text-white border-gray-600 border-2 rounded-lg hover:bg-teal-600 text-center">
              Choose This Package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
