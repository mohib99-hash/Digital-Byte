import React from "react";
import { useLocation } from "react-router-dom";
import { servicesList } from "../config/data";

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
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg mb-4">{service.description}</p>
        <img src={service.image} alt={service.title} className="w-1/2 h-auto" />
      </div>
    </div>
  );
};

export default ServicePage;
