import React from 'react'

const UglyThing =(props)=>{
    return(
        
        <div key={ugly._id}>
            <p>{ugly.title}</p>
            <p>{ugly.description}</p>
            <p>{ugly.imgURL}</p>
            <button onClick ={()=> props.handleDelete(props._id)}>Delete</button>
        </div>
    )
}
export default UglyThing

function func1(){
    handleDelete("")
}