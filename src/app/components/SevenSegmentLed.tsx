import React from 'react';

interface CircleProps {
  fill: string;
}

const MyCircle: React.FC<CircleProps> = ({ fill }) => {
  return <circle cx="50" cy="50" r="40" fill={fill} />;
};

interface SevenSegmentLedProps {
  a: boolean;
  b: boolean;
  c: boolean;
  d: boolean;
  e: boolean;
  f: boolean;
  g: boolean;
  dot: boolean;
}

const SevenSegLed: React.FC<SevenSegmentLedProps> = ({ a, b, c, d, e, f, g }) => {
  const offColor = "#DDD"
  const onColor = "#F00"
  const fillColorA = a ? onColor : offColor
  const fillColorB = b ? onColor : offColor
  const fillColorC = c ? onColor : offColor
  const fillColorD = d ? onColor : offColor
  const fillColorE = e ? onColor : offColor
  const fillColorF = f ? onColor : offColor
  const fillColorG = g ? onColor : offColor
  return <svg xmlns="http://www.w3.org/2000/svg" width="192" height="320" viewBox="-1 -1 12 20" stroke="#FFF" stroke-width=".25">
    <polygon id="a" fill={fillColorA} points="1, 1  2, 0  8, 0  9, 1  8, 2  2, 2" />
    <polygon id="b" fill={fillColorB} points="9, 1 10, 2 10, 8  9, 9  8, 8  8, 2" />
    <polygon id="c" fill={fillColorC} points="9, 9 10,10 10,16  9,17  8,16  8,10" />
    <polygon id="d" fill={fillColorD} points="9,17  8,18  2,18  1,17  2,16  8,16" />
    <polygon id="e" fill={fillColorE} points="1,17  0,16  0,10  1, 9  2,10  2,16" />
    <polygon id="f" fill={fillColorF} points="1, 9  0, 8  0, 2  1, 1  2, 2  2, 8" />
    <polygon id="g" fill={fillColorG} points="1, 9  2, 8  8, 8  9, 9  8,10  2,10" />
  </svg>
}

const SevenSegmentLed: React.FC = () => {
  return (
    <div>
      <svg width="192" height="320">
        <SevenSegLed
          a
          b
          c={false}
          d
          e
          f
          g
          dot={false}
        />
      </svg>

      <svg width="100" height="100">
        <MyCircle fill="blue" />
      </svg>

    </div>
  );
};

export default SevenSegmentLed
