import React from 'react'
import List from "./List"

export default function ToDo(props){

    return(
        <div>
            <List listArray={props.listArray}/>
        </div>
    )

}



//