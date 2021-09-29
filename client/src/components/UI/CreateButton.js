import React from "react";
import axios from "axios";

const CreateButton = ()=> {
   
    const createRecord = async ()=>{
          
        const response = await axios.post("http://localhost:3000/accounts/create")
      
     console.log(response.data)
    }


   return( <button onClick={createRecord}> +</button>)
}

export default CreateButton;
