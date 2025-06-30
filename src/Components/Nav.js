"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Nav = () => {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      // Slide menu in
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      // Slide menu out
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <>
      <header className="w-full h-[100px] bg-white shadow-sm fixed top-0 z-50 px-12 md:px-20">
        <nav className="px-4 py-6 flex items-center justify-between">
          <div className="text-red-600 font-bold text-lg sm:text-xl">
            Baba Neem Karori <br className="sm:hidden" /> Ashram
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-black font-semibold">
            <a href="#about">
              <li className="hover:text-red-600 cursor-pointer">Home</li>
            </a>
            <a href="#rooms">
              <li className="hover:text-red-600 cursor-pointer">Book Your Stay</li>
            </a>
            <a href="#amenities">
              <li className="hover:text-red-600 cursor-pointer">Amenities</li>
            </a>
            <a href="#testimonials">
              <li className="hover:text-red-600 cursor-pointer">Testimonials</li>
            </a>
            <a href="#footer">
              <li className="hover:text-red-600 cursor-pointer">Find Us On Map</li>
            </a>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black font-bold text-4xl"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide Menu */}
      <div
        ref={menuRef}
        style={{ transform: "translateX(100%)" }} // Initially offscreen
        className="fixed top-0 right-0 h-full w-64 pt-[100px] bg-white shadow-lg z-40 md:hidden px-6 py-10 space-y-6 text-lg font-medium text-black"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl font-bold text-black"
          aria-label="Close menu"
        >
          ×
        </button>

        {[
          { href: "#about", text: "Home" },
          { href: "#rooms", text: "Book Your Stay" },
          { href: "#amenities", text: "Amenities" },
          { href: "#testimonials", text: "Testimonials" },
          { href: "#footer", text: "Find Us On Map" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block hover:text-red-600"
          >
            {link.text}
          </a>
        ))}
      </div>
    </>
  );
};

export default Nav;
