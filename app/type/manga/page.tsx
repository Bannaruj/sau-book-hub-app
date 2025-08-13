import React from "react";
import Image from "next/image";

export default function MangaPage() {
  return (
    <div>
      <div className="flex justify-center px-3 ">Recommended</div>
      <div className="flex justify-center px-3 m-4">
        <Image src="/peak.jpg" alt="ภาพประกอบ" width={600} height={600} />
      </div>
      <hr />
    </div>
  );
}
