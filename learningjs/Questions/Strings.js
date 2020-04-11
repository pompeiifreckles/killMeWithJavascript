import React from "react";
import { Answer, Question } from "../components";

export default () => {
  return (
    <>
      <Question
        title="What value is returned from the following statement?"
        code={`
    I\'m a lasagna hog"
    .split("")
    .reverse()
    .join("");
        `}
      />
      <Answer
        text="Should be a reversed string?"
        code={"I'm a lasagna hog"
          .split("")
          .reverse()
          .join("")}
      />
    </>
  );
};
