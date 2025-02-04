import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-[#36383d] text-white py-10 px-10">
      <div className="container mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Branding */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold">AR <span className="text-yellow-600">Constructions</span> </h3>
            <p className="mt-2 text-white">We build your <span className="
            text-yellow-600">Dream Home</span>.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className=" text-white hover:text-white">About Us</a>
            <a href="#" className=" text-white hover:text-white">Services</a>
            <a href="#" className=" text-white hover:text-white">Contact</a>
            <a href="#" className=" text-white hover:text-white">Privacy Policy</a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="#" className=" text-white hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className=" text-white hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className=" text-white hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className=" text-white hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-white">
          <p>&copy; 2025 AR Constructions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
