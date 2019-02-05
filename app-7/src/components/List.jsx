import React from 'react'

export default function List(props){
    const listIt = props.listArray.map((val)=> <h2>{val}</h2>)
    return(
        <div>{listIt}</div>
    )
}



//List should be responsible for display the tasks inside of a task array on the App component in a list-like fashion.