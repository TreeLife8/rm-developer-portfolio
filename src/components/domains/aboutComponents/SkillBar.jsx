import React from "react";
import { useSprings, animated } from "react-spring";
import "./SkillBar.css";

const skillBarData = [
  {
    id: 1,
    name: "HTML & CSS",
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
    id: 2,
    name: "responsive",
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
    name: "react",
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
    id: 5,
    name: "api",
    from: {
      backgroundColor: "#eeeef1",
      width: "90px",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "480px",
    },
    config: {
      mass: 25,
      friction: 40,
    },
  },
  {
    id: 6,
    name: "animation",
    from: {
      backgroundColor: "#eeeef1",
      width: "90px",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "400px",
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
      <h4 className="subtitle">skills</h4>
      <div className="row">
        <div className="col-2">
          {skillBarData.map((skill, index) => {
            return (
              <h4 className="skill-name" key={index}>
                {skill.name}
              </h4>
            );
          })}
        </div>
        <div className="col-10">
          {spring.map((spring, index) => (
            <animated.div
              className="mt-3"
              key={spring[index]}
              style={{
                ...spring,
                height: "15px",
                margin: "10px",
              }}
            ></animated.div>
          ))}
        </div>
      </div>
    </div>
  );
}
