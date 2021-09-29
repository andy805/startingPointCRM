import React from "react";
import axios from "axios";

const CreateButton = ({fetchAccounts, changeActive, masterRecords})=> {
   console.log(masterRecords.data.length)
    const createRecord = async ()=>{
          
        const response = await axios.post("http://localhost:3000/accounts/create")
        
        console.log('hit fetch')
        // changeActive(masterRecords.data.length)
     console.log(response.data)
     fetchAccounts()
 changeActive(masterRecords.data[masterRecords.data.length-1])
    }


   return( <button onClick={createRecord}> +</button>)
}

export default CreateButton;
