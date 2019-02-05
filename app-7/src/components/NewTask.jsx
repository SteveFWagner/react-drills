import React, {Component} from 'react'

export default class NewTask extends Component{
    constructor(){
        super()
        this.state={
            userInput:``

        }
    this.handleAddButton=this.handleAddButton.bind(this)
    }
    handleUserInput(e){
        this.setState({
            userInput: e.target.value
        })
    }
    handleAddButton(){
        this.props.add(this.state.userInput)
    }

    render(){
        return(
            <div>
                <input onChange={(e)=>this.handleUserInput(e)} value={this.state.userInput}/>
                <button onClick={this.handleAddButton}>Add Task</button>
            </div>
        )
    }
}


//NewTask should be responsible for adding a new task to a task array on the App component