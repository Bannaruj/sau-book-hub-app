import React from "react";
import Image from "next/image";

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
      <div className="container mx-auto px-4">
        <div className="text-3xl font-bold">ความคิดเห็น</div>
        <div className="text-gray-500">
          <textarea
            className="w-300 h-100"
            name="comment"
            id="comment"
            defaultValue="แสดงความคิดเห็น"
          />
        </div>
      </div>
    </>
  );
}
