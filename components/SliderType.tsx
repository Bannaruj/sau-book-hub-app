"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import { FaEye, FaHeart } from "react-icons/fa";

const books = [
  { src: "/peak.jpg", title: "สู้เพื่อฝันมาสาวเดอบี้" },
  { src: "/harry.jpg", title: "แฮรี่พอตเตอร์" },
  { src: "/history.avif", title: "ประวัติศาสตร์ฮิตเลอร์" },
  { src: "/พรี่ซอง.jpg", title: "ไอราชามดนั้นคง" },
  { src: "/บัคปาค2.jpg", title: "Lookism" },
  { src: "/youtuber.png", title: "นักสู้ทูปเบอร์" },
];

export default function SliderType() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % books.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + books.length) % books.length);

  return (
    <div className="flex items-center justify-center gap-4">
      {/* ปุ่มซ้าย */}
      <button
        onClick={prevSlide}
        className="bg-black/50 text-white px-4 py-2 rounded-full"
      >
        ◀
      </button>

      {/* Slider */}
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 200}px)` }}
        >
          {books.map((book, i) => (
            <div key={i} className="w-[200px] flex-shrink-0 p-2">
              <Link href="/writing">
                <Image
                  className="rounded-lg shadow-md w-36 h-36 object-cover mb-2 transition-transform duration-200 hover:scale-105"
                  src={book.src}
                  alt="ภาพประกอบ"
                  width={150}
                  height={150}
                />
                <div>{book.title}</div>
                <div className="flex gap-2 items-center text-gray-600 mt-1">
                  <div className="flex items-center gap-1">
                    <IoIosMenu />
                    <span>0</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaEye />
                    <span>0</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaHeart />
                    <span>0</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
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
