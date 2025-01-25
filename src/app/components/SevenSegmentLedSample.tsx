'use client';

import React, { ReactNode, useRef } from 'react'
import Image from "next/image";

// [File:7-segment none.svg - Wikimedia Commons](https://commons.wikimedia.org/wiki/File:7-segment_none.svg?uselang=ja)

const CustomHeader = () => {
  const textRef = useRef(null)
  const titileStyle = {
    margin: "0px",
    color: "#3d84a8"
  };

  const testStyle = {
    normal: {
      "#a svg": {
        fill: "#1470cc"
      }
    },
  }

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
