'use client';

import React from 'react';

function MyButton() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <button
      color="primary"
      onClick={() => setIsActive(!isActive)}
    >
      <svg>
        <path id="myIcon" className="fillColor" />
      </svg>
    </button>
  );
}

export default MyButton
