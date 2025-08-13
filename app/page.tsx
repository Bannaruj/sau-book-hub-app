import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <>
      <div className="flex justify-center px-3 ">Recommended</div>
      <div className="flex justify-center px-3 m-4">
        <Image
          className="rounded-lg"
          src="/peak.jpg"
          alt="ภาพประกอบ"
          width={600}
          height={600}
        />
      </div>
      <hr />

      <div className="p-10 font-bold text-2xl py-20 ">
        <div className="m-3">หมวดหมู่</div>

        <button
          type="button"
          className="py-3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          นิยาย
        </button>

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
      <div className="flex justify-between m-4 p-10">
        <div>
          <Link href="/writing">
            <Image
              className="rounded-lg"
              src="/peak.jpg"
              alt="ภาพประกอบ"
              width={150}
              height={150}
            />
            สู้เพื่อฝันมาสาวเดอบี้
          </Link>
        </div>
        <div>
          <Link href="/writing">
            <Image
              className="rounded-lg"
              src="/harry.jpg"
              alt="ภาพประกอบ"
              width={150}
              height={150}
            />
            แฮรี่พอตเตอร์
          </Link>
        </div>

        <div>
          <Link href="/writing">
            <Image
              className="rounded-lg"
              src="/history.avif"
              alt="ภาพประกอบ"
              width={150}
              height={150}
            />
            ประวัติศาสตร์ของอดอฟ
          </Link>
        </div>

        <div>
          <Link href="/writing">
            <Image
              className="rounded-lg"
              src="/พรี่ซอง.jpg"
              alt="ภาพประกอบ"
              width={150}
              height={150}
            />
            ไอราชามดนั้นคง....
          </Link>
        </div>
      </div>
    </>
  );
}
