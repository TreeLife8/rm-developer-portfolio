import React from "react";
import Footer from "../../../Footer";
import TodoHero from "./TodoHero";

const Todo = (props) => {
  return (
    <div className="Todo">
      <TodoHero projects={props.projects} />
      <Footer />
    </div>
  );
};

export default Todo;
