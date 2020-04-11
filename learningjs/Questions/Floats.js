import React from "react";
import { Answer, Question } from "../components";

export default () => {
  return (
    <>
      <Question
        title="What will be the output of the code below?"
        code="console.log(0.1 + 0.2 == 0.3);"
      />
      <Answer
        text="JS like other languages is bad with floating point operations."
        code={JSON.stringify(0.1 + 0.2 == 0.3)}
      >
        <span> Actual result of addition is: {0.1 + 0.2} </span>
      </Answer>
    </>
  );
};
