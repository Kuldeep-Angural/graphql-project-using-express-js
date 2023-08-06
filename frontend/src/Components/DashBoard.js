import React from 'react'
import { isLoggedIn } from '../Service/AuthService'
import MiniDrawer from './MiniDrawer'
import SignIn from '../Pages/Authentication/Signin'

export const DashBoard = () => {
 
  const goPage=()=>{
    const res=isLoggedIn().valueOf();
    if(res){
        return<MiniDrawer/>
    }
    else{
      return<SignIn/>
    }
  }
  
  return (
    <div>
    {
      goPage()
    }
    
  </div>
  )
}
