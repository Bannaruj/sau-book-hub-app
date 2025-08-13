import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="flex items-center justify-end px-5 py-7 relative">
        <div className="absolute left-1/2 -translate-x-1/2 font-bold text-black text-4xl">
          <Link href="/">ELLE56</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/auth/login">เข้าสู่ระบบ/สมัครสมาชิก</Link>
        </div>
      </nav>
      <hr />
    </div>
  );
}
