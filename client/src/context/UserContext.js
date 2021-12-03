import axios from 'axios'
import {createContext} from 'react'
import React from "react"


// const basePath = "https://shielded-oasis-43540.herokuapp.com/"
 const basePath = "http://localhost:3000"


 export const CurrentUserContext = React.createContext()
 
 export const CurrentUserProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = React.useState(null)
 
   const fetchCurrentUser = async () => {
     let response = await fetch(basePath + "/auth/api/current_user")
     response = await response.json()
     console.log(response)
     setCurrentUser(response)
   }
 
   return (
     <CurrentUserContext.Provider value={{ currentUser, fetchCurrentUser }}>
       {children}
     </CurrentUserContext.Provider>
   )
 }
 
 export const useCurrentUser = () => React.useContext(CurrentUserContext)