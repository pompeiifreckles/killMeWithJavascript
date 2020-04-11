import React from "react";
import { Answer, Question } from "../components";

export default () => {
  console.stdlog = console.log.bind(console);
  console.logs = [];

  function getConsoleLogs() {
    console.log = function() {
      console.logs.push(Array.from(arguments));
      console.stdlog.apply(console, arguments);
    };

    console.log("one");
    setTimeout(function() {
      console.log("two");
    }, 0);
    Promise.resolve().then(function() {
      console.log("three");
    });
    console.log("four");

    return console.logs;
  }

  return (
    <>
      <Question
        title="What does the following code print?"
        code={`
    console.log('one');
    setTimeout(function() {
      console.log('two');
    }, 0);
    Promise.resolve().then(function() {
      console.log('three');
    })
    console.log('four');
        `}
      />
      <Answer
        text="Know event loop and Web APIs."
        code={getConsoleLogs() + ",three,two"}
        asString
      />
      <br />
      <Question
        title=" What is the difference between these four promises?"
        code={`
1. doSomething().then(function () {
  return doSomethingElse();
});

2. doSomething().then(function () {
  doSomethingElse();
});

3. doSomething().then(doSomethingElse());

4. doSomething().then(doSomethingElse);
        `}
      />
      <Answer text="doSomething is a Promise." code="">
        <ol>
          <li key="return-function">
            Returns a function result as promise result
          </li>
          <li key="exe-function">
            Executes a function when promise is resolving
          </li>
          <li key="exe-function-return-res">
            Executes a function and returns result
          </li>
          <li key="return-func-ref">Returns a function reference</li>
        </ol>
      </Answer>
    </>
  );
};
