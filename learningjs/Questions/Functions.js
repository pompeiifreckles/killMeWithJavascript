import React from "react";
import { Answer, Question } from "../components";

export default () => {
  const handleClick = e => {
    var foo = "Hello";
    (function() {
      var bar = " World";
      alert(foo + bar);
    })();
    alert(foo + "bar");
  };

  return (
    <React.Fragment>
      <Question
        title="What is the outcome of the two alerts below?"
        code={`
    var foo = "Hello";
    (function() {
      var bar = " World";
      alert(foo + bar);
    })();
    alert(foo + bar);"
      `}
      />
      <Answer text="Know a bit or two about IIFE functions.">
        <div>
          <input type="button" onClick={handleClick} value="Run code" />
        </div>
      </Answer>
    </React.Fragment>
  );
};
