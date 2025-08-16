"use client";
import { useState } from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const images = [
  {
    src: "/peak.jpg",
    title: "สู้เพื่อฝันมาสาวเดอบี้(umamusume)",
    desc: "สนุกมากเลยอุอิคริคริอ่านแล้วฟิน",
  },
  {
    src: "/peak.jpg",
    title: "สู้เพื่อฝันมาสาวเดอบี้(umamusume)",
    desc: "หนังสือยอดนิยมตลอดกาล",
  },
  {
    src: "/peak.jpg",
    title: "สู้เพื่อฝันมาสาวเดอบี้(umamusume)",
    desc: "ตัวอย่างข้อความ",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="flex items-center justify-center gap-4 max-w-3xl mx-auto">
      {/* ปุ่มซ้าย */}
      <button
        onClick={prevSlide}
        className="bg-black/50 text-white px-4 py-2 rounded-full"
      >
        ◀
      </button>

      {/* Slider */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-lg">
        <div
          className="transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          <div className="flex w-full">
            {images.map((img, i) => (
              <div key={i} className="flex-shrink-0 w-full relative">
                <Image
                  src={img.src}
                  alt={img.title}
                  width={672}
                  height={224}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 p-3 text-white">
                  <div className="font-bold">{img.title}</div>
                  <div className="flex items-center gap-2 mt-1">
                    {img.desc}
                    <FaUserCircle />
                    ELLE 56
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ปุ่มขวา */}
      <button
        onClick={nextSlide}
        className="bg-black/50 text-white px-4 py-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}
