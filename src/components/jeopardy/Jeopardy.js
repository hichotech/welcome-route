import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
import Display from '../display/Display';

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {category:{}},
      score: 0,
      formData: {
        
      }
      
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0],
        
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  handleChange = (event) => {
    const formData = {...this.state.formData};
        formData[event.target.name] = event.target.value;

    this.setState({ formData });

  }
  UserSubmit = (event) => {
    event.preventDefault();
    let UserInput =document.getElementById("input")
    if (UserInput.value === this.state.data.answer){
        UserInput.value=""
        this.state.score += this.state.data.value
        this.getNewQuestion()
      
    }else{
        
        this.state.score -= this.state.data.value
        this.getNewQuestion()
        UserInput.value=""
  
    }
    this.setState({
        submitted: true
      });
   
    }

  //display the results on the screen
  render() {
    


      let category ="loading"
      if (this.state.data.category && this.state.data.category.title){
          category =this.state.data.category.title
      }
     
      
      
    return (
       
       <Display
       question ={this.state.data.question}
       value ={this.state.data.value}
       answer={this.state.data.answer}
       score={this.state.score}
       Useranswer={this.state.formData.name}
       handleChange={this.handleChange}
       UserSubmit={this.UserSubmit}
       category={category}

       
       
       
       />
    );
  }
}
export default Jeopardy;