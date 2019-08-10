import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

import "./styles.css";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',

}

class App extends React.Component {
  constructor() {
    super()
      this.state = {
        count: 0,

      }
  }

  increaseCount()  {
    this.setState(prevState => ({count: prevState.count +1 }))
    this.setState(prevState => ({count: prevState.count +1 }))
    console.log(this.state.count)    
  }

  render() {
    return( 
      <div style={styles}>
      <h1>Hello CodeSandbox</h1>
      <div>
        <button onClick={() => this.increaseCount()}>BUTTON</button>
      </div>
      <h2>{this.state.count}</h2>
      </div>
    )
}
}


//let count = 0;

const rootElement = document.getElementById("root");
render(<App />, rootElement)
