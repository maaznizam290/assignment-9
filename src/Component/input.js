import { InputLabel, TextField } from '@mui/material';
import React from 'react'
// import '../App.css';
function Input(props) {
    const {value,text,onChange,required,type,helperText,disable,label} = props
  return (
    <>
    <InputLabel id='Full Name' style={{marginLeft:'13px',position:'relative',display:'flex'}}>{label}</InputLabel>
    <TextField   value={value}
    text={text} 
    onChange={onChange}
    required={required}
    type={type}
    fullWidth={true}
    helperText={helperText}
    disabled={disable}
    />
    </>
        
    
  )
}

export default Input;