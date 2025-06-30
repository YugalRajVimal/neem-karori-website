"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(leftDivRef.current, {
        x: "-30%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: leftDivRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(rightDivRef.current, {
        x: "30%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: rightDivRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="w-full py-12 px-4 bg-white">
      <div className="flex flex-col md:flex-row items-center h-full gap-4">
        <div ref={leftDivRef} className="w-full md:w-[50%]">
          <img
            src="/baba.jpg"
            alt="Neem Karoli Baba"
            className="w-full object-contain rounded-md"
          />
        </div>

        <div
          ref={rightDivRef}
          className="bg-white shadow-lg shadow-black flex flex-col p-6 md:p-8 rounded-md w-full md:w-[50%]"
        >
          <h2 className="text-2xl font-semibold mb-4 font-GeorgiaRef">
            About Us
          </h2>
          <p className="text-gray-800 text-sm leading-relaxed text-center">
            Kainchi Dham, nestled in Uttarakhand's Kumaon Hills near Nainital,
            is a revered spiritual retreat established by the mystic saint Neem
            Karoli Baba in the 1960s. The ashram's name, meaning "scissors,"
            reflects the two sharp bends in the road near its location.
            <br />
            Dedicated to Lord Hanuman, the site embodies Baba's teachings of
            love, service, and devotion. The serene environment, surrounded by
            lush forests and a flowing river, offers a tranquil setting for
            meditation and reflection.
            <br />
            Notably, tech luminaries like Steve Jobs and Mark Zuckerberg have
            visited the ashram seeking spiritual insight.
            <br />
            Every year on June 15th, a grand Bhandara (community feast)
            commemorates Baba's legacy, drawing thousands of devotees.
            <br />
            The ashram continues to be a beacon of peace and spiritual
            inspiration for visitors worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
