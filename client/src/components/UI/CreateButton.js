import React from "react";
import axios from "axios";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useCurrentUser} from "../../context/UserContext.js"
import { useContext } from 'react';

const CreateButton = ({changeActive, path, user, newRecord, recordRef, masterTable})=> {
  
 /*
 create record is passed down a path user and record Refrence
ie path=contacts/create user=zane id:90, recordRef=
{
   type:account
   _id:1
}
will create a contact document with the current user and "related document" id
 */

    const createRecord = async ()=>{
        console.log('hit create', path, user, recordRef)   
        const response = await axios.post(path, 
         { user: user.currentUser,
          recordRef: recordRef._id,
           query: masterTable
          })
        console.log(response.data)
        
        //if a front end function is needed it needs to be passed down as newRecord
   if(newRecord != undefined){
   newRecord(response.data)
      changeActive(0)
   }
    }
      

   return( <FontAwesomeIcon onClick={createRecord}icon={faPlus}></FontAwesomeIcon>)
}

export default CreateButton;
