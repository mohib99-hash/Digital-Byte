import React from "react";
import { FaUsers, FaBriefcase, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
import hookpic from "../assets/services/s-close.jpg";
import img2 from "../assets/services/services-hero.avif";
import { servicesList } from "../config/data";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="w-full h-full min-h-screen bg-blue-950 text-white p-8">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter font-rowdies text-center mb-8">
        <span className="text-teal-400"> Our</span> Services
      </h1>

      {/* Services Section */}
      <div className="w-full flex flex-col md:flex-row gap-4 p-4">
        <img
          src={img2}
          alt="Our Story"
          className="w-full h-full  max-h-[25rem] md:max-h-[30rem] object-cover rounded-lg mb-4"
        />
        <div className="flex flex-col gap-4 mb-4 border-b-2 border-l-2 border-teal-400 rounded-lg p-4">
          <h2 className="text-3xl font-bold mb-4">
            We're <span className="text-teal-400"> Dedicated</span>
          </h2>
          <p className="text-xl">
            At Digital Byte, we don't just provide services; we craft tailored
            digital solutions that elevate your brand. Whether it's strategic
            social media management to grow your online presence, cutting-edge
            software and website development that fuses innovation with
            functionality, or impactful branding and advertising that captures
            your audience's attention, we are here to help you thrive in a
            digital-first world. With a relentless dedication to creativity,
            technology, and results, we transform your ideas into measurable
            success.
          </p>
          <Link
            to={"/contact"}
            className="px-4 py-2 my-6 w-fit rounded-lg bg-teal-400 hover:bg-teal-200"
          >
            Talk to Us
          </Link>
        </div>
      </div>
      {/* Our Services */}
      <div className="my-6">
        <h2 className="text-3xl font-bold font-rowdies text-teal-400 mb-4 text-center">
          What we offer
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      {/* Hook Picture*/}
      <div className="w-full flex flex-col md:flex-row gap-4 p-4">
        <img
          src={hookpic}
          alt="Hook Picture"
          className="w-full h-full max-h-[25rem] md:max-h-[30rem] object-cover rounded-lg mb-4"
        />
      </div>
      {/* Achievements Section */}
      <div className="w-full flex flex-col gap-4 p-4">
        <h2 className="text-3xl font-bold font-rowdies text-teal-400 mb-4 text-center">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 bg-white shadow-teal-400 shadow-md text-gray-900 rounded-lg flex flex-col items-center gap-4">
            <FaBriefcase className="text-teal-400 text-5xl" />
            <h3 className="text-2xl font-bold">Projects</h3>
            <p className="text-lg text-center">
              We have successfully completed over 100 projects for clients
              worldwide, delivering outstanding results every time.
            </p>
            <Link
              //to={"/portfolio"}
              className="px-4 py-2 my-6 w-fit rounded-lg bg-teal-400 hover:bg-teal-200"
            >
              View Portfolio
            </Link>
          </div>
          <div className="p-4 bg-white shadow-teal-400 shadow-md text-gray-900 rounded-lg flex flex-col items-center gap-4">
            <FaUsers className="text-teal-400 text-5xl" />
            <h3 className="text-2xl font-bold">Clients</h3>
            <p className="text-lg text-center">
              We have worked with over 200 clients from around the world,
              helping them achieve their business goals.
            </p>
            <Link
              //to={"/clients"}
              className="px-4 py-2 my-6 w-fit rounded-lg bg-teal-400 hover:bg-teal-200"
            >
              View Clients
            </Link>
          </div>
          <div className="p-4 bg-white shadow-teal-400 shadow-md text-gray-900 rounded-lg flex flex-col items-center gap-4">
            <FaAward className="text-teal-400 text-5xl" />
            <h3 className="text-2xl font-bold">Awards</h3>
            <p className="text-lg text-center">
              Our work has been recognized with numerous awards for innovation
              and excellence in digital design and development.
            </p>
            <Link
              //to={"/awards"}
              className="px-4 py-2 my-6 w-fit rounded-lg bg-teal-400 hover:bg-teal-200"
            >
              View Awards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
