import React from 'react';
import UglyThing from './components/Uglything.js'

const UglyThingslist = (props) => {

  const { uglies} = props.uglies
  console.log("prosp ugos", uglies)
  const mappedUglies = uglies.map(ugly => {
    <UglyThing {...ugly} key = {UglyThing._id}/>
    //every prop of ugly spread into ugly component 
       
  })
  return (
    <div>
    
      {mappedUglies}
    </div>
  )
}

export default UglyThingslist