import React from 'react';
import Persons from '../Components/Persons';
import classes from'./App.css';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass'; 
import AuthContext from '../Components/Context/auth-context';




class App extends React.Component{
  constructor(props)
  {
      super(props);

      this.state={
            

        person:[{
          username:"Maarish",
          id:"A"
        },
         {
           username:"Ragul",
           id:"B"
         },
         {username:"Mr.Pro",
          id:"C"
        },{
          username:"Makkal selvan",
          id:"D",
        },
        {
          username:"Ragava Lawrence",
          id:"E"
        },
        {
          username:"Robo",
          id:"F"
        },
        {
          username:"Raj",
          id:"M"
        },
        {
          username:"maa",
          id:"Hgi"
        },
        {
          username:'Naan Pollathavannn',
          id:"ok"
        }
      ],
        displayContent:false,
        displayCockpit:true,
        isAuth:false,
        changeCount:0,
       
      }

  }




userNamechanger=(event,id)=>{


const enteredValue=event.target.value;
const personIndex=this.state.person.findIndex(p=>p.id===id);
const copyState=[...this.state.person]
copyState[personIndex].username=enteredValue;


this.setState((prevState,props)=>{
 return{
  person:copyState,
  changeCount:++(prevState.changeCount),
 }
});

console.log(this.state.changeCount);


}


displayHandler=()=>{

  const person =this.state.displayContent;
  this.setState({
     displayContent:!person
  })
}


deleteUser=(i)=>{
  
  // this.state.person.splice(i,1);
  const person=[...this.state.person]
  person.splice(i,1);
  this.setState({
   person:person
 })
//  setTimeout(()=>{console.log(this.state.person)},2000);

}

loginHandler=()=>{
  const val=this.state.isAuth;
  this.setState({
    isAuth:!val

 })
}


// componentWillMount(){
//   console.log("Component Will be Mounted");
  
// }




  render(){
  
    console.log("App js Rendered");
  
   let person=null;
  

  if(this.state.displayContent){
    
    person=(
     
 <div class={classes.autofit}>

   <Persons person={this.state.person} click={this.deleteUser} change={this.userNamechanger}/>    

 </div>


 

  
    );
    
  }
 

  
  return( 
    
    <Aux>
    
    

  
      <button className={classes.togglecockpit} onClick={()=>{
        this.setState({displayCockpit:!this.state.displayCockpit});
      }}>Toggle Cockpit</button>

      <AuthContext.Provider 

       value={{isAuthendicate:this.state.isAuth,

       login:this.loginHandler}}>

      {this.state.displayCockpit ?

        <Cockpit  title={this.props.name} display={this.state.displayContent} 

        personLength={this.state.person.length} click={this.displayHandler}/>

        :null
      }
     
      {person}
    
      </AuthContext.Provider>

    </Aux>
   
  )


  }

 

}



export default withClass(App,classes.App);