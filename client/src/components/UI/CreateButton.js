import React from "react";
import axios from "axios";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useCurrentUser} from "../../context/UserContext.js"
import { useContext } from 'react';

const CreateButton = ({changeActive, path, user, newRecord})=> {
   
    const createRecord = async ()=>{
        console.log('hit create', path)   
        const response = await axios.post(path, user)
        console.log(response.data)
   //   newAccount(response.data)
   if(newRecord != undefined){
   newRecord(response.data)
      changeActive(0)
   }
    }
      

   return( <FontAwesomeIcon onClick={createRecord}icon={faPlus}></FontAwesomeIcon>)
}

export default CreateButton;
