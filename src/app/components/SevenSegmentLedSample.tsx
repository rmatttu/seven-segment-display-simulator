'use client';

import React from 'react'
import Image from "next/image";

// [File:7-segment none.svg - Wikimedia Commons](https://commons.wikimedia.org/wiki/File:7-segment_none.svg?uselang=ja)

const CustomHeader = () => {
  return (
    <div>
      <p>hello.</p>
        <Image
          src="/SevenSegmentLedSvg.svg"
          alt="Seven Segment LED"
          width={180}
          height={38}
          priority
          onClick={(e) => {
            console.log(e);
          }}
        />
    </div>
  )
}

export default CustomHeader
