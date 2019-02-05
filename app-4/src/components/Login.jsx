import React, {Component} from 'react'

export default class Login extends Component{
    constructor(){
        super()
        this.state={
            username:``,
            password:``,
        }

    }
    handleUserInputUN(value){
        this.setState({
            username: value
        })
    }
    handleUserInputPW(e){
        this.setState({
            password: e.target.value 
        })
    }
    handleLoginButton(){
        alert(`UserName:${this.state.username} Password: ${this.state.password}`)
    }
    render(){
        console.log("Current State:", this.state)
        return(
            <div>
                <input placeholder="UserName" onChange={(e)=>this.handleUserInputUN(e.target.value)} value={this.state.username}/>
                <input placeholder="Password" onChange={(e)=>this.handleUserInputPW(e)} value={this.state.password}/>
                <button onClick={()=>this.handleLoginButton()}>Login</button>
            </div>
        )
    }
}