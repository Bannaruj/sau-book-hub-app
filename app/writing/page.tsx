import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WritingPage() {
  return (
    <>
      <div className="flex justify-center px-3  bg-black">
        <Image src="/history.avif" alt="ภาพประกอบ" width={800} height={700} />
      </div>
      <br />
      <div className="flex justify-center px-3">
        <Image
          src="/adolf write.png"
          alt="ภาพประกอบ"
          width={800}
          height={700}
        />
      </div>
      <br />
      <div className="container mx-auto px-4  shadow-lg mb-4">
        <div className="text-3xl font-bold">แสดงความคิดเห็นหรือคำแนะนำ</div>
        <div className="text-gray-500">
          <textarea
            className="w-full h-100 border-1"
            name="comment"
            id="comment"
            defaultValue="แสดงความคิดเห็นหรือคำแนะนำของหนังสือเล่มนี้"
          />
          <br />
          <div className="flex justify-center">
            <button
              type="button"
              className="w-100 py-3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-4xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              ส่งความคิดเห็น
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="container mx-auto px-4 shadow-lg mt-4 pl-6
      "
      >
        <div className="flex justify-between items-start">
          <div className="flex gap-10">
            <div>
              <Link href="/user/userdata">
                <Image
                  className="rounded-lg"
                  src="/user.png"
                  alt="user"
                  width={50}
                  height={50}
                />
              </Link>
              <h1 className="mt-2">พี่ต้อย</h1>
            </div>
            <br />
            <div>หนังสือเล่มนี้ ทำให้ผมอยากเป็นแบบพี่บริโซ่เลยครับ</div>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <span style={{ textDecoration: "underline" }}>ตอบกลับ</span>
        </div>
      </div>
    </>
  );
}
