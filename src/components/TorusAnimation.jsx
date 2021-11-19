import React, { useEffect } from "react";
import { init } from "../animation/InitTorus";

export default function TorusAnimation() {
  useEffect(() => {
    init();
  }, []);
  return <div className="TorusAnimation"></div>;
}
