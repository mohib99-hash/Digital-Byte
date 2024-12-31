import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="w-full h-full min-h-screen bg-blue-950 text-white p-8">
      <h1 className="text-5xl font-bold tracking-tighter font-rowdies text-center mb-8">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl mb-4">
            Have questions or inquiries? Reach out to us, and we'll be happy to
            assist you!
          </p>
          <div className="flex items-center gap-4 mb-4">
            <FaPhoneAlt className="text-teal-400 text-2xl" />
            <span className="text-lg">+123 456 7890</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-teal-400 text-2xl" />
            <span className="text-lg">info@digitalagency.com</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <FaMapMarkerAlt className="text-teal-400 text-2xl" />
            <span className="text-lg">123 Digital Street, Tech City</span>
          </div>
        </div>
        {/* Contact Form */}
        <div className="w-full md:w-1/2 p-4 bg-white text-gray-900 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-teal-400">
            Send Us a Message
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="p-4 border border-gray-300 rounded-lg h-40"
            ></textarea>
            <button
              type="submit"
              className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Bing Map */}
      <div className="grid grid-cols-1 mt-8 w-full md:grid-cols-2 gap-4 p-4">
        <div className="w-full rounded-lg">
          <iframe
            src="https://www.bing.com/maps/embed?h=400&w=800&cp=-28.767659~19.577637&lvl=6&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="rounded-lg"
          ></iframe>
        </div>
        <div className="w-full md:px-8 flex flex-col gap-4 md:text-center">
          <h2 className="text-3xl font-bold text-teal-400 mb-4">
            Visit Our Location
          </h2>
          <p className="text-lg p-1 border border-white rounded-lg">
            123 Digital Street, Tech City
          </p>
          <p className="text-lg">
            Our office is conveniently located in the heart of Tech City, making
            it easy for you to find us. We welcome you to visit our office for a
            cup of coffee and a chat about how we can help your business.
          </p>
          <Link
            to="/visit-us"
            className="bg-teal-400 hover:bg-teal-600 w-fit md:mx-auto text-white font-bold px-4 py-2 rounded-lg mt-4"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
