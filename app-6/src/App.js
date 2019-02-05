import React, { Component } from 'react';
import './App.css';
import ToDo from "./components/ToDo"

class App extends Component {
  constructor(){
    super()
    this.state={
      userInput:``,
      tasks:[]
    }
    this.handleAddButton=this.handleAddButton.bind(this)
  }
  handleUserInput(e){
    this.setState({
      userInput:e.target.value
    })
  }
  handleAddButton(){
    this.setState({
      tasks: [...this.state.tasks,this.state.userInput],
      userInput: ``
    })
  }



  render() {
    console.log("Current State:",this.state)
    return (
      <div className="App">
        <h1>My To Do List:</h1>
        <input onChange={(e)=>this.handleUserInput(e)} value={this.state.userInput}/>
        <button onClick={()=>this.handleAddButton()}>Add Task</button>
        <ToDo listArray={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
//The App component should be responsible for getting new tasks and storing the list of tasks. 
//The App component should pass down a tasks array into the Todo component as a prop.