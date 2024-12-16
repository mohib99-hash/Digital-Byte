import React from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import logo from "../assets/logo.png";

const Contact = () => {
  return (
    <div className="w-full h-full min-h-[80%] p-4 bg-blue-950  text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b-2 border-gray-600 md:py-12 gap-4">
        <div className="flex flex-col gap-4 px-8">
          <h2 className="text-5xl font-bold tracking-light capitalize font-rowdies">
            Lets make something together
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-8">
          <button
            title="contact us"
            className="bg-teal-400 font-bold w-fit py-2 px-4 rounded-lg hover:bg-teal-600"
          >
            Lets talk
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-4">
        <div className="flex flex-col gap-4 px-8">
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="logo" className="h-16 w-auto" />
            <h2 className="text-3xl font-bold font-rowdies tracking-tighter">
              Digital Byte
            </h2>
          </Link>
          <div className="flex gap-4">
            <Link to="#" className="text-teal-400">
              <FaSquareXTwitter size={24} />
            </Link>
            <Link to="#" className="text-teal-400">
              <FaInstagramSquare size={24} />
            </Link>
            <Link to="#" className="text-teal-400">
              <IoLogoTiktok size={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <h2 className="text-2xl font-semibold text-gray-400 tracking-tighter">
            Contact Us
          </h2>
          <p className="text-lg tracking-normal">
            123 Main Street, City, State, Zip Code
          </p>
          <p className="text-lg tracking-normal">Phone: +1 (123) 456-7890</p>
          <p className="text-lg tracking-normal">Email: info@example.com</p>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <h2 className="text-2xl font-semibold text-gray-400 tracking-tighter">
            Quick Links
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="#" className="text-teal-400">
              Home
            </Link>
            <Link to="#" className="text-teal-400">
              About
            </Link>
            <Link to="#" className="text-teal-400">
              Services
            </Link>
            <Link to="#" className="text-teal-400">
              Work
            </Link>
            <Link to="#" className="text-teal-400">
              Projects
            </Link>
            <Link to="#" className="text-teal-400">
              Pricing
            </Link>
            <Link to="#" className="text-teal-400">
              Testimonials
            </Link>
            <Link to="#" className="text-teal-400">
              FAQs
            </Link>
            <Link to="#" className="text-teal-400">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <h2 className="text-2xl font-semibold text-gray-400 tracking-tighter">
            Company
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="#" className="text-teal-400">
              Blog
            </Link>
            <Link to="#" className="text-teal-400">
              Careers
            </Link>
            <Link to="#" className="text-teal-400">
              Press
            </Link>
            <Link to="#" className="text-teal-400">
              Team
            </Link>
            <Link to="#" className="text-teal-400">
              FAQs
            </Link>
            <Link to="#" className="text-teal-400">
              Sitemap
            </Link>
            <Link to="#" className="text-teal-400">
              Privacy Policy
            </Link>
            <Link to="#" className="text-teal-400">
              Terms & Conditions
            </Link>
            <Link to="#" className="text-teal-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8 border-t-2 border-gray-600">
        <p className="text-gray-400 tracking-normal">
          © 2024 Digital Byte. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
