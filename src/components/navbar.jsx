import React, { useState } from "react";
import Logo from "../../public/images/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/service" },
    { name: "Projects", link: "/project" },
    { name: "Contact us", link: "/contact" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
      <div className="md:flex items-center justify-between py-3 md:px-10 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="w-10 h-10 md:w-14 md:h-14 object-contain"
            src={Logo}
            alt="Company Logo"
          />
          <span className=" text-yellow-600 text-xl font-bold">Constructions</span>
        </div>

        {/* Hamburger Menu */}
        <div
          className="text-2xl absolute right-6 top-4 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* Menu Links */}
        <ul
          className={`md:flex md:items-center justify-center absolute md:static bg-white w-full md:w-auto left-0 md:pl-0 pl-8 transition-all duration-300 ease-in-out ${
            open ? "top-14 opacity-100" : "top-[-490px] opacity-0"
          } md:opacity-100`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:mx-4 text-sm md:text-base font-medium font-serif my-6 md:my-0"
            >
              <a
                href={link.link}
                className="text-gray-700 hover:text-indigo-500 transition duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;








