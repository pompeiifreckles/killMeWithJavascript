import React from "react";
import ReactDOM from "react-dom";

const styles = {
  textAlign: 'center',
  fontFamily: 'sans-serif',
};

const style2 = {
  textAlign: 'left',
  fontFamily: 'sans-serif',
};

const Todo = props =>(
  <li>
    <input type="checkbox" />
    <button>delete</button>
    <span> {props.todo.text}</span>
  </li>
)



class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: [],
    }
  }
  
  addToDo() {
    const text = prompt("Enter the text please!")
    this.setState({
      todos: [...this.state.todos, {text: text}]
    })
  }

  render(){
  return(
    <div style={styles}>
      <h1>CodeSandbox</h1>
      <button onClick={() => this.addToDo()}>Add TODO</button>
      <div style={style2}>
      <ul>
        {this.state.todos.map(todo => <Todo todo={todo} />)}
      </ul>
      </div>
    </div>
  )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

