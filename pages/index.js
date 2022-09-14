import React, { useEffect, useState } from 'react'
import { supabase } from '../server'
import AuthPage from '../components/auth'

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
        loggedIn?(<div className=''><button onClick={async()=>await supabase.auth.signOut()}>signout</button></div>):(<AuthPage/>)
      }
    </div>
  )
}

export default Head