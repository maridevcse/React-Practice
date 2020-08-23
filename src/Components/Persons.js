import React,{PureComponent} from 'react';
import Person from './Persons/Person/Person';
import PropTypes from 'prop-types';


class Persons extends PureComponent{



  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps Persons.js");
    return state;
   
  };
  
  
   getSnapshotBeforeUpdate(prevprop,prevstate){
     console.log("getSnapshotBeforeUpdate Persons.js");
     return {getUpdate:"Yes Snapshotted Dude"};
    
   }


  
  //  shouldComponentUpdate(nextProps,nextState){
     
  //  const val=nextProps.person!==this.props.person ? true :false ;

  //   return val;
 
  //thisfunction ===Purecomponent }

  componentDidMount(){
    console.log("Component Mounted Succesfuly Persons.js");
  
  }

  componentDidUpdate(prevProps,nextProps,snapshot){

    console.log("Component Updated in Persons.js");
    console.log(snapshot);

  }
  















  
    render(){

     
     
      console.log("Persons.js Rendering")

      return( this.props.person.map((el,i)=>
      <Person name={el.username} key={el.id}
       change={(event)=>(this.props.change.bind('',event,el.id)())} len={el.username.length} 
       click={this.props.click.bind(this,i)}/>)
     )
    }
    
  ;}


  
Person.propTypes={
  name:PropTypes.string,
  change:PropTypes.func,
  click:PropTypes.func,
  len:PropTypes.number
}


export default Persons;