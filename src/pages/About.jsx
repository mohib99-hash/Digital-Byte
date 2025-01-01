import React from "react";
import { FaUsers, FaBriefcase, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/about/c-1.jpg";
import img2 from "../assets/about/c-2.jpg";

const About = () => {
  return (
    <div className="w-full h-full min-h-screen bg-blue-950 text-white p-8">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter font-rowdies text-center mb-8">
        <span className="text-teal-400"> About</span> Us
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* About Section */}
        <div className="w-full flex flex-col gap-4 md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-xl mb-4 border-b-2 border-l-2 border-teal-400 rounded-lg p-4">
            We are a creative digital agency with a passion for designing and
            developing innovative digital solutions. Since our establishment in
            2010, we have been committed to helping businesses thrive in the
            digital world.
          </p>
          <img
            src={img2}
            alt="Our Story"
            className="w-full h-full  max-h-[25rem] md:max-h-[30rem] object-cover rounded-lg mb-4"
          />
        </div>
        {/* Team Section */}
        <div className="w-full md:w-1/2 p-4 bg-white text-gray-900 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-teal-400">
            Meet Our Team
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 mb-4">
              <FaUsers className="text-teal-400 text-3xl" />
              <span className="text-lg font-bold">Creative Minds</span>
            </div>
            <p className="text-lg mb-4">
              Our team consists of talented designers, developers, and
              strategists who work together to create exceptional digital
              experiences.
            </p>
            <img
              src={img1}
              alt="Team"
              className="w-full h-full max-h-[25rem] md:max-h-[30rem] object-cover rounded-lg mb-4"
            />
            <Link
              to={"/services"}
              className="bg-teal-400 hover:bg-teal-600 text-white font-bold px-4 py-2 rounded-lg w-fit"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/* Achievements Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-teal-400 mb-4 text-center">
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
          </div>
          <div className="p-4 bg-white  shadow-teal-400 shadow-md text-gray-900 rounded-lg flex flex-col items-center gap-4">
            <FaAward className="text-teal-400 text-5xl" />
            <h3 className="text-2xl font-bold">Awards</h3>
            <p className="text-lg text-center">
              Our work has been recognized with numerous awards for innovation
              and excellence in digital design and development.
            </p>
          </div>
          <div className="p-4 bg-white  shadow-teal-400 shadow-md text-gray-900 rounded-lg flex flex-col items-center gap-4">
            <FaUsers className="text-teal-400 text-5xl" />
            <h3 className="text-2xl font-bold">Clients</h3>
            <p className="text-lg text-center">
              We have built strong relationships with over 60 trusted clients
              who rely on us for their digital needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
