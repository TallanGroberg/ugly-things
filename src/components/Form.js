import React from 'react'

const Form = (props) =>{
    const {title, description, imgURL, handleChange, handleSubmit} = props
    return(
        <div>
           <form onSubmit={handleSubmit}>
              <input  
                type='text'
                value={title}
                name='title'
                onChange=(handleChange)
                placeholder='Title'/>
            
                </form>
        </div>
    )
}
export default Form