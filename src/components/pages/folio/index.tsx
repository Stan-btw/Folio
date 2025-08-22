"use client";
import FolioItem from "@/components/folioItem";
import React, { useState } from "react";

function Folio() {
  const items = [
    <FolioItem
      index={1}
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
    />,
    <FolioItem
      index={2}
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
    />,
    <FolioItem
      index={3}
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
    />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  const next = () =>
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-start overflow-hidden px-10 ">
      {/* Titre fixe */}
      <div className="w-full max-w-[900px] my-10">
        <h1 className="text-6xl text-white">Folio</h1>
        <p className="text-white/80 mt-2">Sorem ipsum dolor sit amet</p>
      </div>

      {/* Carousel horizontal */}

      <div
        className="flex w-full transition-transform duration-500 relative"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full flex items-center justify-center px-10"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Flèches */}
      <button
        onClick={prev}
        className="rounded-full hover:bg-gray-700 text-5xl absolute top-1/2 left-90 transform -translate-y-1/2"
      >
        ‹
      </button>
      <button
        onClick={next}
        className=" rounded-full hover:bg-gray-700 text-5xl absolute top-1/2 right-90 transform -translate-y-1/2"
      >
        ›
      </button>
    </div>
  );
}

export default Folio;
