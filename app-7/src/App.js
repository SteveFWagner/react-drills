import React, { Component } from 'react';
import './App.css';
import NewTask from "./components/NewTask"
import ToDo from "./components/ToDo"

class App extends Component {
  constructor(){
    super()
    this.state={
      list:[11,22,33,44,55,66]
    }
    this.handleAddTask=this.handleAddTask.bind(this)
  }
  handleAddTask(task){
    this.setState({
      list:[...this.state.list, task]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My To Do List:</h1>
        <NewTask add={this.handleAddTask}/>
        <ToDo listArray={this.state.list}/>
      </div>
    );
  }
}

export default App;



//Create an app similiar to question #6, except this time add a new third component called NewTask. NewTask should be responsible for adding a new task to a task array on the App component. Also add a new fourth functional component called List. List should be responsible for display the tasks inside of a task array on the App component in a list-like fashion.

//#6 The App component should be responsible for getting new tasks and storing the list of tasks. The Todo component should be responsible for display the tasks from the App component in a list-like fashion. The App component should pass down a tasks array into the Todo component as a prop.