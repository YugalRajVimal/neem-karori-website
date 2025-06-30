import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    text: `"Visiting Kainchi Dham was a life-changing experience. The peace I felt there cannot be described in words. I could feel Baba's presence all around. The aarti in the evening brought to my eyes."`,
    name: "Sandeep Chauhan",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    text: `"Kainchi Dham is not just a place; it’s an emotion. Baba’s grace is everywhere — in the trees, the air, and the smiles of the devotees. I’ve started seeing life from a new lens after my visit."`,
    name: "Meena Joshi",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/236/236831.png",
    text: `"I went there during the June Bhandara and the entire atmosphere was divine. Despite the huge crowd, everything was organized with love and devotion. I felt blessed to be part of it."`,
    name: "Rajeev Menon",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card img", {
        scale: 0,
        opacity: 0,
        duration: 2.5,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".testimonial-card p.text-gray-700", {
        y: 30,
        opacity: 0,
        duration: 2.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".testimonial-card p.font-bold", {
        opacity: 0,
        duration: 2.4,
        delay: 0.2,
        stagger: 0.2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="w-full bg-[#fdf5dc] py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-10 font-GeorgiaRef">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="testimonial-card bg-white border border-gray-300 border-black border-[2px] shadow-md p-6 flex flex-col items-center justify-between text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 text-sm mb-4">{item.text}</p>
            <p className="font-bold text-md">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
