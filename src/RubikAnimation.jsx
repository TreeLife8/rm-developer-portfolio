import React, { useEffect } from "react";
import { init } from "./animation/initRubik";

export default function RubikAnimation() {
  useEffect(() => {
    init();
  }, []);
  return <div className="RubikAnimation"></div>;
}
