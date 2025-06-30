import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  { icon: "./1.png", label: "Accommodation" },
  { icon: "./2.png", label: "Aarti" },
  { icon: "./3.png", label: "Dining" },
  { icon: "./4.png", label: "Meditation Hall" },
  { icon: "./5.png", label: "Library" },
  { icon: "./6.png", label: "Gardens" },
  { icon: "./7.png", label: "Temple Complex" },
  { icon: "./8.png", label: "Parking" },
];

const Amenities = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".amenity-item", {
        y: 100,
        opacity:0,
        duration: 2,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="amenities" className="w-full py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8 font-GeorgiaRef">Amenities</h2>
      <div className=" amenity-item grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {amenities.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col shadow-sm shadow-red-500 items-center justify-center p-4 border border-red-100 shadow-md rounded-md hover:shadow-lg transition"
          >
            <div className="text-red-400 mb-2 flex justify-center items-center">
              <img src={item.icon} className="h-1/2" />
            </div>
            <p className="font-medium text-sm text-center">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
