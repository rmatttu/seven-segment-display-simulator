'use client'

import React, { FC, useState } from 'react';

interface CircleProps {
  color1: string;
  color2: string;
}

const CircleSvg: FC<CircleProps> = ({ color1, color2 }) => {
  const [clickCount, setClickCount] = useState(0);
  const currentColor = clickCount % 2 === 0 ? color1 : color2

  const onClick = () => {
    setClickCount(clickCount + 1)
  }

  return <svg width="100" height="100">
    <circle
      cx="50"
      cy="50"
      r="40"
      fill={currentColor}
      onClick={onClick}
    />;
  </svg>
};

export default CircleSvg
