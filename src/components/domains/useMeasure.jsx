import { useState, useLayoutEffect, useRef } from "react";
import useWindowDimensions from "./useWindowDimension";

function useMeasure() {
  const { height, width } = useWindowDimensions();

  const [rect, setRect] = useState(window.current);
  const rectRef = useRef();

  useLayoutEffect(() => {
    setRect(rectRef.current.getBoundingClientRect());
  }, rectRef);
  return [rect, rectRef, width, height];
}

export default useMeasure;
