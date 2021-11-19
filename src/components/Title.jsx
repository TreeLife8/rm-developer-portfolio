import React, { useState } from "react";
import { Animate, AnimateGroup } from "react-simple-animate";

function Title() {
  const [state, toggle] = useState(false);
  const title = ["D", "E", "V", "E", "L", "O", "P", "E", "R"];

  return (
    <div className="Title">
      <div className="d-inline-flex">
        <AnimateGroup play={state}>
          {title.map((item, index) => {
            return (
              <Animate
                key={item}
                sequenceIndex={index}
                iterationCount="infinite"
                direction="alternate"
                duration={0.1}
                end={{ opacity: 0.7, transform: "rotate(90deg)" }}
                start={{ opacity: 1, transform: "rotate(0)" }}
              >
                <h1
                  className="title"
                  key={index}
                  onMouseEnter={() => toggle(!state)}
                >
                  {item}
                </h1>
              </Animate>
            );
          })}
        </AnimateGroup>
      </div>
    </div>
  );
}

export default Title;
