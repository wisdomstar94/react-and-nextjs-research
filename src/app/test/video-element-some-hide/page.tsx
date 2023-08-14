"use client"

import { useState } from "react";

export default function Page() {
  const [src, setSrc] = useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');

  return (
    <>
      <video 
        src={src}
        autoPlay={true}
        preload="auto"
        muted={true}
        className="w-full h-[200px] object-contain"
        controls={false}
        />
    </>
  );
}