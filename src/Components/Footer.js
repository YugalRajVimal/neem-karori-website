import React, { useEffect, useRef } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Form - slide up + fade in
      gsap.from(".contact-form", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
      });

      // Animate Map iframe - pop scale + fade
      gsap.from(".contact-map", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contact-map",
          start: "top 80%",
        },
      });

      // Animate Contact Info texts - fade + stagger
      gsap.from(".contact-info > p", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 80%",
        },
      });

      // Animate Footer fade in
      gsap.from(".footer-text", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-text",
          start: "top 95%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="footer" className=" ">
      <h2 className="text-center text-2xl font-semibold mb-10 pt-10 font-GeorgiaRef">
        Map & Contact Details
      </h2>

      <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-6xl mx-auto px-5 pb-10">
        {/* Contact Form */}
        <div className="contact-form border border-[3px] border-red-200 p-5 w-full lg:w-1/2">
          <div className="border border-[3px] border-red-300 p-5">
            <form className="space-y-5">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full border px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full border px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full border px-3 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#de5b38] text-white px-5 py-2 font-medium hover:bg-[#c74c2e]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Map and Contact Info */}
        <div className="bg-[#fff4d4] p-5 w-full lg:w-1/2">
          <iframe
            title="map"
            className="contact-map w-full h-60 mb-4"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13900.853017654406!2d79.512409!3d29.422563000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a3ab1b8ec5d9%3A0xea7786fa26ed7dd0!2sKainchi%20Dham%20-%20Shri%20Neeb%20Karori%20Baba%20Ashram!5e0!3m2!1sen!2sin!4v1747482502442!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="contact-info space-y-3 text-base">
            <p>
              📍 <strong>Kainchi dham, Uttarakhand 263132</strong>
            </p>
            <p>
              📞 <span className="text-[#de5b38]">+919521623715</span>
            </p>
            <p className="flex gap-1 items-center">
              <span className="text-green-600">
                <IoLogoWhatsapp />
              </span>{" "}
              <span className="text-[#de5b38]">+919521623715</span>
            </p>
            <p>
              📧{" "}
              <span className="text-[#de5b38]">
                contact@shrineemkaroriibabaashram.com
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-text bg-[#2c2c2c] mt-10 py-4 text-center text-white font-semibold text-sm px-16">
        All Right Are Reserved By Kainchi Dham - Shri Neeb Karori Baba Ashram
      </div>
    </div>
  );
};

export default ContactSection;
