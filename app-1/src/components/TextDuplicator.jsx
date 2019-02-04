import React, {Component} from 'react'

export default class TextDuplicator extends Component{
    constructor(){
        super()
        this.state={
            text:``
        }
    }
    handleTextChange(e){
        this.setState({
            text: e.target.value
        })
    }

    render(){
        return(
            <div>
                <input placeholder="Input Text Here" onChange={(e)=>this.handleTextChange(e)}/>
                <div><span>{this.state.text}</span></div>
                
            </div>
        )
    }
}
