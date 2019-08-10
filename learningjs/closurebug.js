function makeFunctionArray() {
  const arr = []

var i = 10
  for (var i = 0; i < 5; i++) {
    arr.push( ((x) => {return () => console.log(x)})(i))
  }

  return arr
}

const functionArr = makeFunctionArray()

// we expect this to log 0, but it doesn't
functionArr[0]()

