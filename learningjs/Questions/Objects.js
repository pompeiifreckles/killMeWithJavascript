import React from "react";
import { Answer, Question } from "../components";

export default () => {
  var foo = { n: 1 };
  var bar = foo;
  foo.x = foo = { n: 2 };

  return (
    <>
      <Question
        title="What is the value of foo.x?"
        code={`
      var foo = {n: 1};
      var bar = foo;
      foo.x = foo = {n: 2};
        `}
      />
      <Answer
        text={`
          { n: 2 } ??
          
        `}
        code={`${JSON.stringify(foo.x)}`}
      >
        <div> No! assignments are right associative. </div>
        <span>
          Equivalent to foo.x = ( window.foo = &#123; n : 2 &#125; ) )
        </span>
      </Answer>
    </>
  );
};
