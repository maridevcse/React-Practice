import React, { Component } from 'react';
import classes from '../Person.css';
// import Aux from '../../../hoc/Aux';
// import withClass from '../../../hoc/withClass';
import AuthContext from '../../Context/auth-context';
// import Radium from 'radium'; 
// import styled from 'styled-components';

class Person extends Component{
    constructor(props){
        super(props);
       this.refElement=React.createRef();
    }

    componentDidMount(){
        
        const Mass=this.refElement.current.value;
        console.log(Mass)
    }
    render(){
        console.log("Person.js Rendering");
         return(
 
        
          <div className={classes.Person}>
              <AuthContext.Consumer>
             {(context)=>context.isAuthendicate?<p>Succesfully Login</p> :<p>Please Login in</p> }
              </AuthContext.Consumer>
              <p onClick={this.props.click}>My Name is {this.props.name}</p>
              <input ref={this.refElement} type="text" className={classes.strech} onChange={this.props.change} value={this.props.name}/>
              <p>{this.props.children}</p>
              <p>Length of the text is {this.props.len}</p>

          </div>

      
         
    )
    }
    
   
   
}

export default Person;