import React from "react";
import { useSprings, animated } from "react-spring";
import "./SkillBar.css";

const skillBarData = [
  {
    id: 1,
    name: "responsive HTML & CSS",
    from: {
      backgroundColor: "#eeeef1",
      width: "10px",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "600px",
    },
    config: {
      mass: 15,
      friction: 40,
    },
  },
  {
    id: 1,
    name: "web developement",
    from: {
      backgroundColor: "#eeeef1",
      width: "10px",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "600px",
    },
    config: {
      mass: 15,
      friction: 40,
    },
  },
  {
    id: 3,
    name: "javascript",
    from: {
      backgroundColor: "#eeeef1",
      width: "40px",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "520px",
    },
    config: {
      mass: 20,
      friction: 40,
    },
  },
  {
    id: 4,
    name: "reactjs",
    from: {
      backgroundColor: "#eeeef1",
      width: "90px",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "490px",
    },
    config: {
      mass: 25,
      friction: 40,
    },
  },

  {
    id: 7,
    name: "data analytics",
    from: {
      backgroundColor: "#eeeef1",
      width: "90px",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "600px",
    },
    config: {
      mass: 25,
      friction: 40,
    },
  },
  {
    id: 8,
    name: "sql",
    from: {
      backgroundColor: "#eeeef1",
      width: "90px",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "200px",
    },
    config: {
      mass: 25,
      friction: 40,
    },
  },
  {
    id: 9,
    name: "node.js",
    from: {
      backgroundColor: "#eeeef1",
      width: "90px",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "150px",
    },
    config: {
      mass: 25,
      friction: 40,
    },
  },
];

export default function SkillBar() {
  const spring = useSprings(
    skillBarData.length,
    skillBarData.map(({ id, ...config }) => config)
  );
  return (
    <div className="SkillBar">
      <h4 className="subtitle mb-4">skills</h4>
      <div className="row">
        <div className="col-3">
          {skillBarData.map((skill, index) => {
            return (
              <h4 className="skill-name" key={index}>
                {skill.name}
              </h4>
            );
          })}
        </div>
        <div className="col-9">
          {spring.map((spring, index) => {
            console.log(spring);
            return (
              <animated.div
                key={spring[index]}
                className="mt-3"
                style={{
                  ...spring,
                  height: "15px",
                  margin: "10px",
                }}
              ></animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
