import React from "react";
import { Answer, Question } from "../components";

export default () => {
  return (
    <>
      <Question
        title="What is the value of window.foo?"
        code={`( window.foo || ( window.foo = "bar" ) );`}
      />
      <Answer
        text="Remember the comparison operators?"
        code={(function() {
          window.foo || (window.foo = "bar");

          return window.foo;
        })()} // IIFE
      />
    </>
  );
};
