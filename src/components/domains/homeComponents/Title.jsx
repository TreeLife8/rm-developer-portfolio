import React, { useState } from "react";
import { Animate, AnimateGroup } from "react-simple-animate";

function Title(props) {
  const [state, toggle] = useState(false);
  // const title = props.title;
  // const letters = [...title];

  return (
    <div className="Title">
      <div className="d-inline-flex">
        <AnimateGroup play={state}>
          {letters.map((item, index) => {
            return (
              <Animate
                key={item}
                sequenceIndex={index}
                iterationCount="infinite"
                direction="alternate"
                duration={0.1}
                end={{
                  transform: "rotate(360deg)",
                }}
                start={{
                  transform: "rotate(0)",
                }}
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
