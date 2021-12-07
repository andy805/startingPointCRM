import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios'
import { Link } from 'react-router-dom';
const Login = ()=>{

    // const basePath = "https://shielded-oasis-43540.herokuapp.com/"
 const basePath = "http://localhost:5000"

    const responseGoogle = (ev) => {
       ev.preventDefault()
       window.open("http://localhost:3000/auth/google", '_self')
        
      }
return(

   <button onClick={responseGoogle}>Sign in with Google</button>
)}

export default Login