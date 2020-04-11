import React from "react";
import { Answer, Question } from "../components";

export default () => {
  const add = num1 => num2 => num1 + num2;
  return (
    <>
      <Question
        title="How would you make this work?"
        code={`
    add(2, 5); // 7
    add(2)(5); // 7
          `}
      />
      <Answer text="Use a curry function -" code={add.toString()} asString />
    </>
  );
};
