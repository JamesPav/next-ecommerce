"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "NEW SS'24 COLLECTION",
    description:
      "All it takes are a few simple outfits. And there's one secret - the simplier the better.",
    img: "https://www.topcloset.gr/wp-content/uploads/2024/04/slider_ss24.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 2,
    title: "NEW SS'24 COLLECTION",
    description:
      "All it takes are a few simple outfits. And there's one secret - the simplier the better.",
    img: "https://www.topcloset.gr/wp-content/uploads/2024/04/slider_ss24.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="md:h-[calc(100vh-144px)] h-[calc(50vh-144px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div className={` relative flex w-screen`} key={slide.id}>
            <Image
              src={slide.img}
              alt=""
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 flex bottom-8 gap-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Slider;
