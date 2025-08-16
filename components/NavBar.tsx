import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <nav className="flex items-center justify-between px-5 py-7 relative bg-gray-100">
        <div className="flex items-center gap-2">
          <Link href="/user/userdata">
            <Image
              className="rounded-lg"
              src="/user.png"
              alt="user"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 font-bold text-black text-4xl">
          <Link href="/">ELLE</Link>
        </div>
        <div>
          <Link href="/auth/login">เข้าสู่ระบบ/สมัครสมาชิก</Link>
        </div>
      </nav>
      <hr className="border-gray-200 border-t-2" />
    </div>
  );
}
