import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800  border-t-2 border-teal-400">
      <div className="hidden lg:block">
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
        <div className="flex justify-center py-8 border-t-2 bg-blue-950">
          <p className="text-white tracking-normal">
            © {new Date().getFullYear()} Digital Byte. All rights reserved.
          </p>
        </div>
      </div>
      <div className="lg:hidden bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Site Name */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Digital Byte Logo"
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-xl font-bold font-rowdies">Digital Byte</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-4 text-center mt-4 md:mt-0">
            <a href="/" className="hover:text-teal-400 transition">
              Home
            </a>
            <a href="/about" className="hover:text-teal-400 transition">
              About Us
            </a>
            <a href="/services" className="hover:text-teal-400 transition">
              Services
            </a>
            <a href="/contact" className="hover:text-teal-400 transition">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-teal-400 text-white rounded-full hover:bg-teal-200 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-teal-400 text-white rounded-full hover:bg-teal-200 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-teal-400 text-white rounded-full hover:bg-teal-200 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-teal-400 text-white rounded-full hover:bg-teal-200 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-blue-950 text-white text-center py-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Digital Byte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
