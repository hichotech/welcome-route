import React from 'react';


function Display(props){
 
    
       
         
      


   

   return (
    <form onSubmit={props.UserSubmit}>
    <div>
     <strong>Question :</strong>{props.question}<br />
     <strong>Points :</strong>{props.value}<br />
     <strong>Category :</strong>{props.category}<br/>
     <strong>Answer :</strong>{props.answer}<br/>
     <strong>Users score :</strong>{props.score}<br/>
     <label><strong>Enter answer here :</strong></label>
     <input  id="input"
              type="text" 
              name="answer"
              value={props.Useranswer}
              onChange={props.handleChange}
              /><br/>
              <br/>
          <button >submit</button>
         
    </div>
     </form>
   )

}
 

export default Display