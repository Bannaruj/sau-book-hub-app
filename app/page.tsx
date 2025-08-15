import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function page() {
  return (
    <>
      <div className="flex justify-center px-3 mt-3">Recommended</div>
      <div className="flex justify-center px-3 m-4 gap-2">
        <Image
          className="rounded-lg"
          src="/peak.jpg"
          alt="ภาพประกอบ"
          width={600}
          height={600}
        />
        <div className="w-80 border rounded-lg p-4 bg-gray-100 text-gray-700">
          จากผู้รีวิว : skibidisigma
          <br />
          สนุกมากครับ
        </div>
      </div>

      <hr className="border-gray-200 border-t-2" />

      <div className="p-70 font-bold text-2xl py-20 ">
        <div className="m-3">หมวดหมู่</div>
        <Link href="/type/novel">
          <button
            type="button"
            className="py-3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            นิยาย
          </button>
        </Link>
        <Link href="/type/fiction">
          <button
            type="button"
            className="py-3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Fiction
          </button>
        </Link>
        <Link href="/type/knowledge">
          <button
            type="button"
            className="py-3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            หนังสือความรู้
          </button>
        </Link>
        <Link href="/type/manhwa">
          <button
            type="button"
            className="py-3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            มังฮวา
          </button>
        </Link>
        <Link href="/type/manga">
          <button
            type="button"
            className="py-3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            มังงะ
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-6 m-2 p-2">
        <div>
          <Link href="/writing">
            <Image
              className="rounded-lg shadow-md w-36 h-36 object-cover mb-2 transition-transform duration-200 hover:scale-105"
              src="/peak.jpg"
              alt="ภาพประกอบ"
              width={150}
              height={150}
            />
            <div>สู้เพื่อฝันมาสาวเดอบี้</div>
            <br />
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
        <div>
          <Link href="/writing">
            <Image
              className="rounded-lg shadow-md w-36 h-36 object-cover mb-2 transition-transform duration-200 hover:scale-105"
              src="/harry.jpg"
              alt="ภาพประกอบ"
              width={150}
              height={150}
            />
            <div>แฮรี่พอตเตอร์</div>
            <br />
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

        <div>
          <Link href="/writing">
            <Image
              className="rounded-lg shadow-md w-36 h-36 object-cover mb-2 transition-transform duration-200 hover:scale-105"
              src="/history.avif"
              alt="ภาพประกอบ"
              width={150}
              height={150}
            />
            <div>ประวัติศาสตร์ฮิตเลอร์</div>
            <br />
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

        <div>
          <Link href="/writing">
            <Image
              className="rounded-lg shadow-md w-36 h-36 object-cover mb-2 transition-transform duration-200 hover:scale-105"
              src="/พรี่ซอง.jpg"
              alt="ภาพประกอบ"
              width={150}
              height={150}
            />
            <div>ไอราชามดนั้นคง</div>
            <br />
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
        <div>
          <Link href="/writing">
            <Image
              className="rounded-lg shadow-md w-36 h-36 object-cover mb-2 transition-transform duration-200 hover:scale-105"
              src="/บัคปาค2.jpg"
              alt="ภาพประกอบ"
              width={150}
              height={150}
            />
            <div>Lookism</div>
            <br />
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
        <div>
          <Link href="/writing">
            <Image
              className="rounded-lg shadow-md w-36 h-36 object-cover mb-2 transition-transform duration-200 hover:scale-105"
              src="/youtuber.png"
              alt="ภาพประกอบ"
              width={150}
              height={150}
            />
            <div>นักสู้ทูปเบอร์</div>
            <br />
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
      </div>
    </>
  );
}
