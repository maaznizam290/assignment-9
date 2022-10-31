import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import '../App.css'
import { Checkboxes } from './checkbox';
import { useState } from 'react';
import { async } from '@firebase/util';
import { SignInMethod } from 'firebase/auth';
function Form() {
    const [data,setData] = useState({
        firstName:'',
        lastName:'',
        Course:'',
        Section:'',
        Contact:'',
        Cnic:'',
        FatherName:'',
        FatherCnic:'',
        FatherContact:'',
        EmergencyContact:'',
        DateofBirth:'',
        Age:'',
    })
    let name,value;
    const postUserData = (e)=>{
     name = e.target.name;
     value = e.target.value;
     setData({...data,[name]:value}) 
    }
    const submitData = async(e)=>{
    e.preventDefault();
    const { firstName,
    lastName,
    Course,
    Section,
    Contact,
    Cnic,
    FatherName,
    FatherCnic,
    FatherContact,
    EmergencyContact,
    DateofBirth,
    Age} = data;
    if( firstName && lastName && Course && Section && Contact && Cnic && FatherName && FatherCnic && FatherContact && EmergencyContact && DateofBirth && Age){

    
    const res = fetch('https://reactadminpanel-1ec6d-default-rtdb.firebaseio.com/dataRecord.json',
    {method: "POST",
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        firstName,
        lastName,
        Course,
        Section,
        Contact,
        Cnic,
        FatherName,
        FatherCnic,
        FatherContact,
        EmergencyContact,
        DateofBirth,
        Age
    }
    )
}
)
if(res){
    setData({
        firstName:'',
        lastName:'',
        Course:'',
        Section:'',
        Contact:'',
        Cnic:'',
        FatherName:'',
        FatherCnic:'',
        FatherContact:'',
        EmergencyContact:'',
        DateofBirth:'',
        Age:'',
    })
    alert('Data is stored successfully')
}
else {
    alert('Kindly fill all the text fields before submitting this form');
}
}else {
    alert('Kindly fill all the text fields before submitting this form');
}
}
  return (
      <>
    <h1 style={{color:'darkblue',textAlign:'center'}}>Welcome to the Student Registration Form</h1>
    <div className='formApps'>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
        <TextField style={{marginRight:'60px',width:"43%"}}
          required
          id="outlined-required"
          placeholder="First Name"
          value={data.firstName}
          onChange={postUserData}
          name='firstName'
        />
          <TextField style={{marginRight:'60px',width:"43%"}}
          id="outlined-required"
          placeholder="Last Name"
          value={data.lastName}
          onChange={postUserData}
          name='lastName'
/>
        <TextField style={{marginRight:'60px',width:"43%"}}
          required
          id="outlined-required"
          name='Course'
          placeholder="Course"
          value={data.Course}
          onChange={postUserData}
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          required
          id="outlined-required"
          name='Section'
          placeholder="Section"
          value={data.Section}
          onChange={postUserData}
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          required
          id="outlined-required"
          name='Contact'
          placeholder="Contact"
          value={data.Contact}
          onChange={postUserData}
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          required
          id="outlined-required"
          name="Cnic"
          placeholder="Cnic"
          value={data.Cnic}
          onChange={postUserData}
        />
      <TextField style={{marginRight:'60px',width:"43%"}}
          required
          id="outlined-required"
          placeholder="Father Name"
          name='FatherName'
          value={data.FatherName}
          onChange={postUserData}
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          id="outlined-required"
          placeholder="Father Cnic"
          name='FatherCnic'
          value={data.FatherCnic}
          onChange={postUserData}
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          required
          id="outlined-required"
          name='FatherContact'
          placeholder="Father Contact"
          value={data.FatherContact}
          onChange={postUserData}
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          required
          id="outlined-required"
          name='EmergencyContact'
          placeholder="Emergency Contact"
          value={data.EmergencyContact}
          onChange={postUserData}
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          id="outlined-required"
          name='DateofBirth'
          placeholder="Date Of Birth"
          value={data.DateofBirth}
          onChange={postUserData}
        />
        <TextField style={{marginRight:'60px',width:"43%"}}
          required
          id="outlined-required"
          placeholder="Age"
          name='Age'
          value={data.Age}
          onChange={postUserData}
        />
        <Checkboxes />
        <Button style={{marginBottom:'-9pc',marginLeft:'36pc'}} variant='contained' onClick={submitData}>Submit</Button>
       <p style={{marginLeft:'3pc',marginTop:'-3pc'}}>I accept to the terms and conditions of this form</p>
       </Box>
      </div>
    </>
  );

}

export default Form


