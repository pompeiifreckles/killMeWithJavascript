import React from "react";
import { Answer, Question } from "../components";

export default () => {
  var foo = [];
  foo.push(1);
  foo.push(2);

  return (
    <>
      <Question
        title="What is the value of foo.length?"
        code={`
      var foo = [];
      foo.push(1);
      foo.push(2);
        `}
      />
      <Answer text="Should be 2, no?" code={foo.length} />
    </>
  );
};
