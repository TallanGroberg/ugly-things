import React, {Component} from 'react';
import axios from 'axios';
import UglyThingslist from './components/UglyThingslist'
import Form from './components/Form.js'



class App extends Component {
  constructor(){
    super()
    this.state ={
      uglies: [],
      title: '',
      description: '',
      imgURL: ''
    }
  }
  componentDidMount(){
    this.getUglythings()
  }
  getUglythings =()=>{
    axios.get('https://api.vschool.io/lynnknapp/todo')
        .then(response => {
          this.setState({
            uglies: response.data
          
          }, () => console.log(this.state))
        })
        .catch(error => console.log(error)) 
  } 
  handlechange = event => {
     this.setState({
       [event.target.name]: event.target.value
     })
  }
  handleSubmit = event =>{
    event.preventDefault()
    this.setState({
        uglies: [...prevState...]
    })
  }
  handleDelete = ()=>{
    axios.delete('', + _id)
    .then(response => {
      console.log(response)
      this.setState(prevState =>{
         const filteredArr = prevState.uglies.filter(thang =>{
           return id !== thang._id 
             
           })
          return{uglies: filteredArr}
      })
    }) 
  }


//componentDidMount fires right after render, so render is called twice
  render(){
    
    return(
      <div>
        <Form/>     
        <UglyThingslist uglies={this.state.ugly} />
      </div>
    )
  }
  
};

export default App;
