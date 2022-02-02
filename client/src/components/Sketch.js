import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

export default function Sketch(props) {
  const { features } = props;

  const sketchRef = useRef(null);

  const CANVAS_SIZE = 600;
  const NUM_FEATURES = 4;
  const BAR_HEIGHT = CANVAS_SIZE / NUM_FEATURES;

  const sketch = (s) => {
    s.setup = () => {
      s.createCanvas(CANVAS_SIZE, CANVAS_SIZE);
    };

    s.draw = () => {
      s.background(220);
      s.fill('red');
      s.circle(300, 300, BAR_HEIGHT);
    };
  };

  useEffect(() => {
    let canvas = new p5(sketch, sketchRef.current);
    return () => {
      canvas.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
}
