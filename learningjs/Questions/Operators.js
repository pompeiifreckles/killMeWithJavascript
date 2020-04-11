import React from "react";
import { Answer, Question } from "../components";

export default () => {
  return (
    <>
      <Question title="What is the value of foo?" code="var foo = 10 + '20';" />
      <Answer
        text="Remember arithmatic and concat operators?"
        code={10 + "20"}
      />
    </>
  );
};
