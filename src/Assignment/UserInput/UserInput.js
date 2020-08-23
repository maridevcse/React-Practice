import React from 'react';
import Globe from '../Globe.css'

const UserInput=(props)=>{
    return(
        

            <input className="inputText" type="text"  placeholder="Enter Your Text here to see the state changes" onChange={props.change} />

   
    )
}


export default UserInput;