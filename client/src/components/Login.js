import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = ()=>{
const onSucess = (res)=>{
    console.log(res.profileObj)
}
const onFaluire = (res) =>{
    console.log(res)
}
return(

    <GoogleLogin
clientId = "500461040639-pk88u5ga6vttpfam2gjonmjd0dh62ogi.apps.googleusercontent.com"
buttonText="Log in with Google"
cookiePolicy={'single_host_origin'}
onSucess={onSucess}
onFailure={onFaluire}
isSignedIn={true}
/>
)}

export default Login