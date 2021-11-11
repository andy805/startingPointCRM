import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios'
const Login = ()=>{

    // const basePath = "https://shielded-oasis-43540.herokuapp.com/"
 const basePath = "http://localhost:3000"

    const responseGoogle = async (response) => {
        axios({
            method: "GET",
            url: basePath + "/auth/google",
            data:{response}
        }).then(response =>{
            console.log(response)
        })
      }
return(

    <GoogleLogin
        clientId = "500461040639-pk88u5ga6vttpfam2gjonmjd0dh62ogi.apps.googleusercontent.com"
        buttonText="Log in with Google"
        cookiePolicy={'single_host_origin'}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
    />
)}

export default Login