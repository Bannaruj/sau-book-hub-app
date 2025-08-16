import React from "react";
import Link from "next/link";
import Slider from "@/components/SliderMain";
import SliderType from "@/components/SliderType";

export default function page() {
  return (
    <>
      <div className="flex justify-center px-3 m-4 gap-2 ">
        <Slider />
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

      <SliderType />
    </>
  );
}
