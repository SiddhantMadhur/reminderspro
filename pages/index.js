import React, { useEffect, useState } from 'react'
import { supabase } from '../server'
import AuthPage from '../subpages/auth'

function Head() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  
  useEffect(()=>{
    const setting = localStorage.getItem("dark")
    if(setting!==null){
      if(setting.match("true")){
        setDarkMode(true)
      }else{
        setDarkMode(false)
      }
    }else{
      setDarkMode(false)
    }
  },[])
  
  useEffect(()=>{
    const user = supabase.auth.user()
    setLoggedIn(user!==null)
  },[])
  supabase.auth.onAuthStateChange((doc)=>{
    if(doc.match("SIGNED_IN")){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  })

    return (
    <div className={`${darkMode?'dark':''}`}>

      {
        loggedIn?(<div className=''>logged in</div>):(<AuthPage/>)
      }
    </div>
  )
}

export default Head