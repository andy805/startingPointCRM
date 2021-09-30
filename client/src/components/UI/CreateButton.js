import React from "react";
import axios from "axios";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateButton = ({fetchAccounts, changeActive, masterRecords, newAccount})=> {
   console.log(masterRecords.data.length)
    const createRecord = async ()=>{
      
        const response = await axios.post("http://localhost:3000/accounts/create")
        console.log(response.data)
     newAccount(response.data)
      changeActive(0)
    }
      

   return( <FontAwesomeIcon onClick={createRecord}icon={faPlus}></FontAwesomeIcon>)
}

export default CreateButton;
