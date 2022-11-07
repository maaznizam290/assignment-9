import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { Checkboxes } from '../Component/checkbox';
import Dropdown from '../Component/dropdown';
function Courseform() {
  return (
    <>
    <h1 style={{color:'darkcyan',textAlign:'center',backgroundColor:'darkgrey'}}>Welcome to the Course Form </h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '25ch' ,backgroundColor:'cyan'},
      }}
      novalidate
      autoComplete="off"
      >
    <TextField style={{marginRight:'60px',width:"43%"}}
          required
          id="outlined-required"
          label="Course Name"
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          id="outlined-required"
          label="Course Duration"
          select='options'
          type={<Dropdown/>}
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          id="outlined-required"
          label="Is Form Open"
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          id="outlined-required"
          label='No Of Quiz'
          select='options'
          type={<Dropdown/>}
          
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          id="outlined-required"
          label="Fee In Rupees"
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          id="outlined-required"
          label="Lead Trainer Id"
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          id="outlined-required"
          label="Assistant Trainers"
        />
        <Checkboxes />
        <Button style={{marginBottom:'-4pc',marginLeft:'40pc'}} variant='contained'>Submit</Button>
       <p style={{marginLeft:'3pc',marginTop:'-3pc'}}>I accept to the terms and conditions of this form</p>
        </Box>
    </>
  )
}

export default Courseform;