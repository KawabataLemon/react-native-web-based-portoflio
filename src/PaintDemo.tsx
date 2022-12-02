
import { Canvas, Circle, Paint, vec } from '@shopify/react-native-skia';
import React from 'react';

const BOX_SIZE = 50;
const width = BOX_SIZE;
const height = BOX_SIZE;

export const PaintDemo = () => {
  const strokeWidth = 10;
  const c = vec(width / 2, height / 2);
  const r = (width - strokeWidth) / 2;
  return (
    <Canvas style={{ width, height}}>
      <Circle c={c} r={r} color="yellow">
        <Paint color="orange" />
      </Circle>
      <Circle cx={width * 0.7} cy={height * 0.3} r={4} color="yellow">
          <Paint color="yellow" />
      </Circle>
    </Canvas>
  );
};

export default PaintDemo;