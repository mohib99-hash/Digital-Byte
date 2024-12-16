import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { servicesList } from "../config/data";
import { gsap } from "gsap";

const ServicePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const serviceType = params.get("type");

  const service = servicesList.find(
    (service) =>
      service.title.toLowerCase().replace(/\s+/g, "-") === serviceType
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="w-full h-full min-h-screen p-4 bg-blue-950 text-white">
      <div className="service-content flex flex-col items-center justify-center h-full gap-8">
        <h1 className="text-5xl font-bold mb-4 text-teal-400">
          {service.title}
        </h1>
        <p className="text-lg mb-4 text-center max-w-2xl">
          {service.description}
        </p>
        <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex-1 p-4">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-lg">
              {service.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 p-4 bg-blue-600 rounded-lg shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4 text-teal-400">Our Process</h2>
          <p className="text-lg mb-4 text-center max-w-3xl">
            Our team follows a structured process to ensure the best outcomes
            for our clients. We start with a thorough understanding of your
            needs, followed by meticulous planning and execution. Our goal is to
            deliver solutions that exceed your expectations.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-8">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="flex-1 p-4 bg-black rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-2 text-teal-400">{`${
                  index + 1
                }. ${step}`}</h3>
                <p>Detailed explanation about the step...</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4 text-teal-400">
            Testimonials
          </h2>
          <p className="text-lg mb-4 text-center max-w-3xl">
            Hear from our satisfied clients who have seen tremendous growth and
            success with our services.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-8">
            {service.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-1 p-4 bg-blue-600 rounded-lg shadow-lg"
              >
                <p className="text-lg">{`"${testimonial.feedback}"`}</p>
                <p className="mt-2 text-teal-400">- {testimonial.client}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
