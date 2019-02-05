import React, {Component} from 'react'

export default class ListCreator extends Component{
    constructor(){
        super()
        this.state={
            arr:["Milk", "Eggs", "Bread", "Juice", "Pasta", "BeastMode"]
        }
    }
    handleArrToList =() =>{
        //take in an array and convert each array element to a list item
        console.log(this.state.arr)
        const listArr = this.state.arr.map((val)=> <h2>{val}</h2>)
        console.log(listArr)
        return listArr
    }

    render(){
        console.log("Current State:", this.state)
        return(
            <div>
                    {this.handleArrToList()}
            </div>
        )
    }
}