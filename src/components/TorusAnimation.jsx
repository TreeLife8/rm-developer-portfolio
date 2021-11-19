import React, { useEffect } from "react";
import { initTorus } from "../animation/InitTorus";

export default function TorusAnimation() {
  useEffect(() => {
    initTorus();
  }, []);
  return <div className="TorusAnimation"></div>;
}
