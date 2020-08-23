import React ,{useEffect,useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../Context/auth-context';

const cockpit =(props)=>{

    const clickitBtnRef=useRef(null);
   
    let styleArray=[];
    let Btnclasses;
    if(props.display){
        Btnclasses=classes.Red;
    }
    if(props.personLength<=2){
      styleArray.push(classes.bold);
    }
    if(props.personLength<=1){
      styleArray.push(classes.red);
    }


    useEffect(()=>{
       console.log("cock");

    //  const mm= setTimeout(()=>{alert("Mass")},1000)
      
    //  clickitBtnRef.current.click();
     
     return ()=>{
      //  clearTimeout(mm)
       console.log("cleaned");
     }


    },[])
    
       return(
    
        <div className={classes.Cockpit}>
           
            <p  className={styleArray.join(" ")}>{props.title} </p>
            <button ref={clickitBtnRef} className={Btnclasses} onClick={props.click}>Click It</button>
            <AuthContext.Consumer>
            {(context)=><button onClick={context.login}>LogIn</button>}
            </AuthContext.Consumer>
            
    
        </div>
    
       )

}

export default   React.memo(cockpit);