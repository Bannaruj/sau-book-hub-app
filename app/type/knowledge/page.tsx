import React from "react";
import Image from "next/image";

export default function KnowledgePage() {
  return (
    <div>
      <div className="flex justify-center px-3 ">Recommended</div>
      <div className="flex justify-center px-3 m-4">
        <Image src="/history.avif" alt="ภาพประกอบ" width={600} height={600} />
      </div>
      <hr />
    </div>
  );
}
