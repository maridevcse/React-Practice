import React from 'react';
import Validation from '../Validation/Validation'
class App extends React.Component{
  state={
    input:"Rakita"
  }

 changeHandler=(e)=>{
   const InputBoxValue=e.target.value;

   this.setState({
     input:InputBoxValue
   })
  }














  render(){






    return(
    <div className="App">

      <input type="text" onChange={this.changeHandler} value={this.state.input}></input> 
      <p>{this.state.input}</p>
      <Validation length={this.state.input.length}>The Length of the text is</Validation>

    </div>

   




    );







  }
}






export default App;
