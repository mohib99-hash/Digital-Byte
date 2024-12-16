import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const navLinks = [
  { name: "Home", path: "/", exact: true },
  { name: "About", path: "/about", exact: true },
  { name: "Services", path: "/services", exact: true },
  { name: "Contact", path: "/contact", exact: true },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="w-full border-b border-blue-400 bg-blue-950 px-4 py-2 flex justify-between items-center text-white relative">
      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-4">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 object-cover rounded-lg"
        />
        <span className="text-3xl font-bold tracking-tighter text-white capitalize font-rowdies">
          Digital Byte
        </span>
      </NavLink>
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-4">
        <ul className="flex items-center gap-4 font-semibold">
          {navLinks.map((link, idx) => (
            <li key={idx} title={link?.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-teal-400" : "hover:text-blue-200"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <NavLink
          className="bg-blue-800 py-2 px-4 hover:bg-blue-400 rounded-lg text-white font-bold"
          aria-label="Get started with us"
          title="Get started"
          to="/services"
          onClick={() => setOpenNav(false)}
        >
          Get Started
        </NavLink>
        <NavLink
          className="border-blue-800 py-2 px-4 hover:bg-blue-400 hover:text-white bg-white rounded-lg bg-none text-blue-800 font-bold"
          aria-label="Talk with us"
          title="Lets talk"
          to="/contact"
          onClick={() => setOpenNav(false)}
        >
          Lets Talk
        </NavLink>
      </div>
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-950 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
          aria-label="Toggle navigation menu"
          onClick={() => setOpenNav(!openNav)}
          title="menu"
        >
          <IoMenu size={28} />
        </button>
        {openNav && (
          <div className="absolute top-0 left-0 right-0 bg-black/90 shadow-lg flex items-start justify-between px-6 py-4">
            <ul className="w-full font-bold flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <li key={idx} title={link?.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "hover:text-blue-200"
                    }
                    onClick={() => setOpenNav(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <div className="md:hidden flex items-center gap-4">
                <NavLink
                  className="bg-blue-800 py-2 px-4 hover:bg-blue-400 rounded-lg text-white font-bold"
                  aria-label="Get started with us"
                  title="Get started"
                  to="/services"
                  onClick={() => setOpenNav(false)}
                >
                  Get Started
                </NavLink>
                <NavLink
                  className="border-blue-800 py-2 px-4 hover:bg-blue-400 hover:text-white bg-white rounded-lg bg-none text-blue-800 font-bold"
                  aria-label="Talk with us"
                  title="Lets talk"
                  to="/contact"
                  onClick={() => setOpenNav(false)}
                >
                  Lets Talk
                </NavLink>
              </div>
            </ul>
            <button
              className="flex items-center gap-2 px-4 py-2 text-white bg-blue-950 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
              aria-label="Close navigation menu"
              onClick={() => setOpenNav(!openNav)}
              title="close"
            >
              <IoClose size={28} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
