import React from 'react'

export default function ToDo(props){
    const displayList = props.listArray.map((val)=> <h2>{val}</h2>)
    return(
        <div>{displayList}</div>
    )
}


//The Todo component should be responsible for display the tasks from the App component in a list-like fashion.
//The App component should pass down a tasks array into the Todo component as a prop.