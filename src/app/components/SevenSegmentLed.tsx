'use client'

import React, { useState, FC } from 'react';

interface SevenSegmentLedProps {
  enableColor: string
  disableColor: string
}

const SevenSegmentLed: FC<SevenSegmentLedProps> = ({enableColor, disableColor}) => {
  const [isEnableA, setIsEnableA] = useState(false);
  const [isEnableB, setIsEnableB] = useState(false);
  const [isEnableC, setIsEnableC] = useState(false);
  const [isEnableD, setIsEnableD] = useState(false);
  const [isEnableE, setIsEnableE] = useState(false);
  const [isEnableF, setIsEnableF] = useState(false);
  const [isEnableG, setIsEnableG] = useState(false);

  const getColor = (enable: boolean) =>{
    return enable ? enableColor : disableColor
  }

  const onClickA = () => {
    setIsEnableA(!isEnableA)
  }
  const onClickB = () => {
    setIsEnableB(!isEnableB)
  }
  const onClickC = () => {
    setIsEnableC(!isEnableC)
  }
  const onClickD = () => {
    setIsEnableD(!isEnableD)
  }
  const onClickE = () => {
    setIsEnableE(!isEnableE)
  }
  const onClickF = () => {
    setIsEnableF(!isEnableF)
  }
  const onClickG = () => {
    setIsEnableG(!isEnableG)
  }

  const colorA = getColor(isEnableA)
  const colorB = getColor(isEnableB)
  const colorC = getColor(isEnableC)
  const colorD = getColor(isEnableD)
  const colorE = getColor(isEnableE)
  const colorF = getColor(isEnableF)
  const colorG = getColor(isEnableG)

  return <svg xmlns="http://www.w3.org/2000/svg" width="192" height="320" viewBox="-1 -1 12 20" stroke="#FFF" stroke-width=".25">
    <polygon id="a" fill={colorA} onClick={onClickA} points="1, 1  2, 0  8, 0  9, 1  8, 2  2, 2" />
    <polygon id="b" fill={colorB} onClick={onClickB} points="9, 1 10, 2 10, 8  9, 9  8, 8  8, 2" />
    <polygon id="c" fill={colorC} onClick={onClickC} points="9, 9 10,10 10,16  9,17  8,16  8,10" />
    <polygon id="d" fill={colorD} onClick={onClickD} points="9,17  8,18  2,18  1,17  2,16  8,16" />
    <polygon id="e" fill={colorE} onClick={onClickE} points="1,17  0,16  0,10  1, 9  2,10  2,16" />
    <polygon id="f" fill={colorF} onClick={onClickF} points="1, 9  0, 8  0, 2  1, 1  2, 2  2, 8" />
    <polygon id="g" fill={colorG} onClick={onClickG} points="1, 9  2, 8  8, 8  9, 9  8,10  2,10" />
  </svg>
};

export default SevenSegmentLed
