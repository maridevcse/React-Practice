import React from 'react';
import ReactDOM from 'react-dom';


const Validation=(props)=>{
let markUp;
if(props.length===0){
    markUp=(<p>Enter a text</p>)
}
else if(props.length<5){
    markUp=(
        <p>Text is Too Short</p>
    )
}
else{
    markUp=(<p>Text is Long Enough</p>)
}
return(
<div>
{markUp}
</div>
);
}


export default Validation;