import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

class App extends React.Component
{
  constructor(){
    super()
    this.state = {
      count: 0,
    }
  }

  increaseCount() {
    this.setState(({count: this.state.count +1}))
  }

  render(){
    return(
      <div style={styles}>
        <h1>Hello Codesandbox</h1>
        <div>
          <button onClick={() => this.increaseCount()}>Increase Count</button>
        </div>
        <h2>{this.state.count}</h2>
      </div> 
    )
  }
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

