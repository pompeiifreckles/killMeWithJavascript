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

let id = 0;

const Todo = props =>(
  <li>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle}/>
    <button onClick={props.onDelete}>delete</button>
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
      todos: [
        ...this.state.todos, 
        {text: text, id: id++, checked: false},
      ]
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return{
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render(){
  return(
    <div style={styles}>
      <h1>CodeSandbox</h1>
      <div>Total ToDo: {this.state.todos.length}</div>
      <div>Unchecked ToDo: {this.state.todos.filter(todo => !todo.checked).length}</div>
      <button onClick={() => this.addToDo()}>Add TODO</button>
      <div style={style2}>
      <ul>
        {this.state.todos.map(todo => (<Todo 
          onToggle={() => this.toggleTodo(todo.id)}
          onDelete={() => this.removeTodo(todo.id)}
          todo={todo} />))}
      </ul>
      </div>
    </div>
  )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

