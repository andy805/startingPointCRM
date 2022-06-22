import axios from 'axios'
import {createContext, useState, useEffect} from 'react'
import React from "react"


// const basePath = "https://shielded-oasis-43540.herokuapp.com/"
 const basePath = "http://localhost:3000"


 export const CurrentUserContext = createContext()
 
 export const CurrentUserProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = React.useState(null)
 

  const fetchCurrentUser = async () => {
    let test = basePath + "/auth/api/current_user"
    
     let response = await axios.get(basePath + "/auth/api/current_user", {withCredentials: true})
    setCurrentUser(response.data)
   }
   useEffect(()=>{
    const fetchCurrentUser = async () => {
      let test = basePath + "/auth/api/current_user"
   
       let response = await axios.get(basePath + "/auth/api/current_user", {withCredentials: true})
      setCurrentUser(response.data)
    };
     fetchCurrentUser()},
   [])
 
   return (
     <CurrentUserContext.Provider value={{ currentUser, fetchCurrentUser }}>
       {children}
     </CurrentUserContext.Provider>
   )
 }
 
 export const useCurrentUser = () => React.useContext(CurrentUserContext)