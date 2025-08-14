import React from "react";
import Image from "next/image";

export default function NovelPage() {
  return (
    <div>
      <div className="flex justify-center px-3 mt-3">Recommended</div>
      <div className="flex justify-center px-3 m-4">
        <Image
          className="rounded-2xl"
          src="/บัคปาค2.jpg"
          alt="ภาพประกอบ"
          width={600}
          height={600}
        />
      </div>
      <hr />
    </div>
  );
}
