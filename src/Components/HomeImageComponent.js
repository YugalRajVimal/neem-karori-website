import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { IoLogoWhatsapp } from "react-icons/io";

const HeroAshramSection = ({phone}) => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: -100,
        // opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(subHeadingRef.current, {
        y: -100,
        // opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
      });

      gsap.from(buttonsRef.current.children, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });
    });

    return () => ctx.revert(); // Clean-up
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[70vh] mt-[100px] text-white flex flex-col justify-end items-center px-4 text-center"
    >
      {/* Background */}
      <div className="absolute z-0 h-full w-full bg-black">
        <img src="homeImg.webp" className="h-full w-full object-cover" />
      </div>

      {/* Overlay */}
      <div className="absolute z-10 h-full w-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="z-20 flex flex-col justify-end gap-2 pb-6">
        <h2 ref={headingRef} className="text-2xl md:text-3xl mb-4">
          Welcome To
        </h2>
        <h1
          ref={headingRef}
          className="text-2xl md:text-3xl font-semibold mb-4 font-GeorgiaRef"
        >
          Kainchi Dham - Shri Neeb Karori Baba Ashram
        </h1>
        <p
          ref={subHeadingRef}
          className="max-w-2xl text-sm md:text-lg mb-6 px-4"
        >
          Kainchi Dham is a serene Himalayan ashram founded by Neem Karoli Baba,
          renowned for its spiritual energy and as a place of devotion to Lord
          Hanuman.
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-wrap justify-center gap-4 text-sm"
        >
          <a href={`tel:${phone}`}>
            <button className="bg-red-500 text-xs hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-lg transition">
              📞 CALL NOW
            </button>
          </a>
          <a href={`https://wa.me/${phone}`}>
            <button className="bg-red-500 text-xs hover:bg-red-600 flex gap-1 justify-center items-center text-white px-4 py-2 rounded-full shadow-lg transition">
              <span className="text-green-600">
                <IoLogoWhatsapp />
              </span>{" "}
              WHATSAPP NOW
            </button>
          </a>
          <a href={`https://wa.me/${phone}`}>
            <button className="bg-red-500 text-xs hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-lg transition">
              📧 MAIL NOW
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroAshramSection;
