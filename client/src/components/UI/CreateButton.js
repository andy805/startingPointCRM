import React from "react";
import axios from "axios";

const CreateButton = ({fetchAccounts, changeActive, masterRecords, newAccount})=> {
   console.log(masterRecords.data.length)
    const createRecord = async ()=>{
          
        const response = await axios.post("http://localhost:3000/accounts/create")
        console.log(response.data)
     newAccount(response.data)
      changeActive(0)
    }
      

   return( <button onClick={createRecord}>+</button>)
}

export default CreateButton;
