import React, {Component} from 'react'

export default class FilterList extends Component{
    constructor(){
        super()
        this.state={
            arr:["Milk", "Eggs", "Bread", "Juice", "Pasta", "BeastMode"],
            userInput:``,
            filteredArray:[]
        }
    }
    handleFilter = (value) => {
        //use the event target value to filter the state array
        const filteredArray = this.state.arr.filter((val)=> val.includes(value))
        console.log("Filtered",filteredArray)
        this.setState({
            userInput: value,
            filteredArray
        })      
    }
    handleArrToList(){
        //take in an array and convert each array element to a list item
        if(this.state.userInput != ``){
            return this.state.filteredArray.map((val)=> <h2>{val}</h2>)
        } 
        
            return this.state.arr.map((val)=> <h2>{val}</h2>)
        
    }

    render(){
        console.log("Current State:", this.state)
        return(
            <div>
                <input type="text" onChange={(e)=>this.handleFilter(e.target.value)}/>
                    {this.handleArrToList()}
            </div>
        )
    }
}