import React from "react";
import { useSprings, animated } from "react-spring";
import "./SkillBar.css";

const skillBarData = [
  {
    id: 1,
    name: "responsive HTML & CSS",
    from: {
      backgroundColor: "#eeeef1",
      width: "10%",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "100%",
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
      width: "10%",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "100%",
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
      width: "20%",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "100%",
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
      width: "20%",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "85%",
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
      width: "40%",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "95%",
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
      width: "10%",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "40%",
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
      width: "5%",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "20%",
    },
    config: {
      mass: 25,
      friction: 40,
    },
  },
  {
    id: 10,
    name: "React + typescript",
    from: {
      backgroundColor: "#eeeef1",
      width: "5%",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "25%",
    },
    config: {
      mass: 25,
      friction: 40,
    },
  },
  {
    id: 11,
    name: "Animation",
    from: {
      backgroundColor: "#eeeef1",
      width: "5%",
    },
    to: {
      backgroundColor: "#7f7262",
      width: "45%",
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
        <div className="col-4">
          {skillBarData.map((skill, index) => {
            return (
              <h4 className="skill-name" key={index}>
                {skill.name}
              </h4>
            );
          })}
        </div>
        <div className="col-8">
          {spring.map((spring, index) => {
            return (
              <animated.div
                key={spring[index]}
                style={{
                  ...spring,
                  height: "18.7px",
                  margin: "17px",
                }}
              ></animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
