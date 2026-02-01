
import { useState } from "react";
import React from 'react'
import  AuthContext from './AuthContext.jsx'



function AuthProvider({children}) {

    const [islogginedin , setislogginedin] = useState(false)


  return (
    <AuthContext.Provider value={{islogginedin,setislogginedin}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
