import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function UserDataPage() {
  return (
    <div>
      <div className="flex items-center justify-center h-150">
        <div className="container max-w-md mx-auto px-4 py-6 rounded-2xl shadow-lg bg-white">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">ข้อมูลส่วนตัว</h1>
          </div>
          <div className="flex justify-center">
            <Image
              className="rounded-lg"
              src="/user.png"
              alt="user"
              width={100}
              height={100}
            />
          </div>
          <div className="text-center mt-6">
            <h2>คุณ......</h2>
          </div>
          <div className="flex justify-end">
            <Link href="/user/useredit">
              <button
                type="button"
                className="py-3 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                แก้ไขข้อมูล
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
