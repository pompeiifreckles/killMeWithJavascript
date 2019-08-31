import React from "react";
import {View, Button, Text, Scrollview} from 'react-native'


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
  <View>
   // <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle}/>
    <Button onPress={props.onDelete} title="delete" />
    <Text> {props.todo.text}</Text>
  </View>
)



export default class App extends React.Component{
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
    <View style={styles}>
      <h1>CodeSandbox</h1>
      <Text>Total ToDo: {this.state.todos.length}</Text>
      <Text>Unchecked ToDo: {this.state.todos.filter(todo => !todo.checked).length}</Text>
      <Button onPress={() => this.addToDo()} title="Add ToDo" />
      <View style={style2}>
      <ScrollView>
        {this.state.todos.map(todo => (<Todo 
          onToggle={() => this.toggleTodo(todo.id)}
          onDelete={() => this.removeTodo(todo.id)}
          todo={todo} />))}
      </ScrollView>
      </View>
    </View>
  )
  }
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

