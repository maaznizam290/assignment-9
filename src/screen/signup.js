import {  TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { signUpUser } from '../config/firebasemethods';
function Signup() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
let signUp =()=>{
    signUpUser({
      email:'',
      password,
      userName:'Maaz',
      contact:'3202083195'
    })
    .then(((success) => {
      console.log(success)
    })
    )
    .catch((error) => {
      console.log(error)
    })
}
  return (
    <>
    <Box>
    <h1>Signup</h1>
    <Box>
    <TextField label='Email' onChange={(e)=>e.target.value} variant='standard'/>
    </Box>
    <Box>
    <TextField label='Password' type='password' onChange={(e)=>e.target.value} variant='standard'/>
    </Box>
    </Box>
    <button onClick={signUp}>Sign Up</button>
    </>
  )
}

export default Signup;