import React from 'react'
import './login.css'
import { TypeAnimation } from "react-type-animation";
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogIn } from '../../config/firebaseMehods';
// import { signUpUser } from '../../config/firebaseMehods';

function Login() {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [model,setModel] = useState("");
  
const signinSubmit = ()=>{
  handleLogIn({email,password}).then((success)=>{
    console.log(success)
    navigate(`/${success.id}`)
  }).catch((error)=>{
    console.log(error)
  })  
}
  return (
    <>
    <div className='Login'>
        <h1>
        <TypeAnimation
            sequence={[
              "This is the Login Screen",
              1000,
              "Kindly Enter your Email & Password",
              3000,
              "You can reset your password also",
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </h1>
        <TextField onChange={(e)=>setEmail(e.target.value)} type='email' label='Email' required  sx={{ padding: 1, border: "none",margin: "16px",
          width: "60%",
          display: "inline-flex",marginLeft:'15pc' }}/>
        <TextField onChange={(e)=>setPassword(e.target.value)} type='password' label='Password' required  sx={{ padding: 1, border: "none",margin: "16px",
          width: "60%",
          display: "inline-flex",marginLeft:'15pc' }}/>
        <Button onClick={signinSubmit} sx={{marginLeft:'-25pc',marginTop:'9pc',border:'10px solid red'}}>Login</Button>
    </div>
    </>
  )
}

export default Login