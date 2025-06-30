import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    image: "/room1.webp",
    title: "Ac Room",
    price: "₹2050/-",
  },
  {
    image: "/room2.webp",
    title: "Non Ac Room",
    price: "₹1850/-",
  },
  {
    image: "/room3.webp",
    title: "Family Stay",
    price: "₹2250/-",
  },
  {
    image: "/room4.jpg",
    title: "Delux Room",
    price: "₹2500/-",
  },
  {
    image: "/room5.jpg",
    title: "Super Delux Room",
    price: "₹3000/-",
  },
];

const Rooms = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".room-card img", {
        scale: 0.8,
        opacity: 0,
        duration: 3,
        ease: "power2.out",
        // stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".room-card button", {
        scale: 0,
        opacity: 0,
        duration: 3.4,
        ease: "back.out(1.7)",
        // stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".room-card .price", {
        scale: 0,
        opacity: 0,
        duration: 3.4,
        ease: "back.out(1.7)",
        // stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="rooms" className="w-full py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8 font-GeorgiaRef">
        Rooms
      </h2>
      <div className="flex flex-wrap justify-center gap-6  ">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="room-card shrink-0 bg-[#fdf5dc] w-[370px] rounded-md shadow-md p-2 overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center flex flex-col items-center gap-2">
              <h3 className="text-lg font-semibold mb-1">{room.title}</h3>
              <p className="price text-base font-bold text-black">
                <span className="font-GeorgiaRef">Price:</span>{" "}
                <span>{room.price}</span>
              </p>
              <a href="https://wa.me/+919521623715">
                <button className="px-4 py-1 bg-orange-600 w-fit text-white rounded-full font-mono text-xs font-bold">
                  Book Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
