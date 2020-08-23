import React from 'react';

const authContext=React.createContext({
  isAuthendicate:false,
  login:()=>{},

})

export default authContext;