import React from 'react';
import Checking from '../UserInput/checking'


const UserOutput=(props)=>{
   const paraStlye={
       padding:'20px 30px',
       border:'1px solid #777',
       margin:'10px',
       minWidth:'50%',
       cursor:'pointer',
   }
    return(
        <div style={paraStlye}>
            <p style={{width:'50%'}}>Username:{props.name}</p>
            <p>Maathiruven da</p>
            <Checking/>
        </div>
    )
}

export default UserOutput;