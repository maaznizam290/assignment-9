import {useState} from 'react';
import {Box,Button,TextField} from '@mui/material';
import {loginUser} from '../config/firebasemethods';
function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  let login = ()=>{
    loginUser({
      email,
      password
    })
  }
  return (
    <>
    <h1>Login</h1>
    <Box>
      <Box>
        <TextField label='Email' variant='standard' onChange={(e)=>setEmail(e.target.value)}/>
      </Box>
      <Box>
        <TextField label='Password'
        variant='standard'
        type='password' 
        onChange={(e)=>setPassword(e.target.value)}/>
      </Box>
      <Button onClick={login} variant='contained' >
        Login
      </Button>
    </Box>
    </>
  )
}

export default Login;