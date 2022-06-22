import React from "react";
import axios from "axios";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useCurrentUser} from "../../context/UserContext.js"
import { useContext } from 'react';

const CreateButton = ({fetchAccounts, changeActive, masterRecords, newAccount, path, user})=> {
   

   console.log(user)
    const createRecord = async ()=>{
      
        const response = await axios.post(path, user)
        console.log(response.data)
     newAccount(response.data)
      changeActive(0)
    }
      

   return( <FontAwesomeIcon onClick={createRecord}icon={faPlus}></FontAwesomeIcon>)
}

export default CreateButton;
