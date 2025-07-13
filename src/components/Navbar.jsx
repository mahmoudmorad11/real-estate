import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 max-md:px-8">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex text-white gap-7">
          {["Home", "About", "Projects", "Testimonials"].map((item, i) => (
            <a
              href={`#${item}`}
              className="cursor-pointer hover:text-gray-400"
              key={i}
            >
              {item}
            </a>
          ))}
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
        <img
          src={assets.menu_icon}
          onClick={() => setShowMobileMenu(true)}
          alt="icon"
          className="block md:hidden"
        />
        {/* ----------------- Mobile Menu ----------------- */}
        {showMobileMenu && (
          <div className="md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all">
            <div className="flex justify-end p-6 text-right">
              <img
                src={assets.cross_icon}
                alt="cross icon"
                className="w-8"
                onClick={() => setShowMobileMenu(false)}
              />
            </div>
            <ul className="min-h-screen flex flex-col items-center  gap-2 my-5 text-lg font-medium ">
              {["Home", "About", "Projects", "Testimonials"].map((item, i) => (
                <a
                  href={`#${item}`}
                  className="px-4 py-2 rounded-full inline-block"
                  onClick={() => setShowMobileMenu(false)}
                  key={i}
                >
                  {item}
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
