import { Button, Grid, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { TypeAnimation } from "react-type-animation";
import Dropdown from '../../components/dropdown';
import { pushData } from '../../config/firebaseMehods';
import './studentregistration.css'

function Studentregistration() {
const [model,setModel] = useState({});

let fillModel = (key,value)=>{
   model[key] =value;
   setModel({...model})
   console.log(model)
}
let date = new Date()
let signIn = ()=>{
   let df = model.birthdate.slice(1,0);
   df = df*1;
   let year = date.getFullYear();
   let diff = year- df;
   fillModel('age', diff);
   fillModel("registrationyear",date.getFullYear());
   fillModel("registrationdate",date);
   fillModel("isapprove",true);
   fillModel("feesSubmitted",true);
   pushData(model,"Forms/").then((success)=>{
      console.log(success)
   }).catch((err)=>{
      console.log(err)
   })
}

return (
    <>
    
    <div className='Form'>
    <h1 >
    <TypeAnimation
            sequence={[
              "This is the student registration form",
              1000,
              "Student can get registered here",
              3000,
              "Study And Grow",
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
    </h1>
    <Grid >
    <TextField
          type="text"
          label="First Name"
          onChange={(e)=>fillModel("firstname",e.target.value)}
          required
          value={model.firstname}
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'1pc' }}>
          </TextField>
              </Grid>
              <Grid >
             <Dropdown
          label="Course"
          required
          value={model.course}
          onChange={(e)=>fillModel("course",e.target.value)}
          labelId='selectCourses'
          name='courses'
          datasource={[
            {
               id:'MERN',
               displayname:'MongoDb ExpressJS React Js',
            },
            {
               id:'MEAN',
               displayname:'MongoDB ExpressJs AngularJs NodeJs',
            },
            {
               id:'MEVN',
               displayname:'MongoDb ExpressJs VueJs NodeJs',
            },
            {
               id:'TS',
               displayname:'Typescript',
            },
            {
               id:'JS',
               displayname:'Javascript',
            },
            {
               id:'wma',
               displayname:'web and mobile app',
            },
            {
               id:'gd',
               displayname:'graphic designing',
            },
          ]}
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'-1px' }}/>
          </Grid>
          <Grid >
             <TextField
          type="text"
          label="Contact"
          value={model.contact}
          onChange={(e)=>fillModel("contact",e.target.value)}
          required
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'1pc' }}>
          </TextField></Grid>
          <Grid >
             <TextField
          type="text"
          label="Last Name"
          value={model.lastname}
          onChange={(e)=>fillModel("lastname",e.target.value)}
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "inline-flex",marginLeft:'49pc',marginTop:'-17pc' }}>
          </TextField></Grid>
          <Grid >
             <Dropdown
          type="text"
          label="Section"
          value={model.section}
          onChange={(e)=>fillModel("section",e.target.value)}
          required
          datasource = {[
            {
               id:'1',
               displayname:'A',
            },
            {
               id:'2',
               displayname:'B',
            },
          ]}
          sx={{ padding: 1, border: "none",margin: "16px",
          width: 33,
          display: "inline-flex",marginLeft:'49pc',marginTop:'-15pc', }}/>
          </Grid>
          <Grid >
             <TextField
          type="text"
          label="CNIC"
          value={model.cnic}
          onChange={(e)=>fillModel("cnic",e.target.value)}
          required
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "inline-flex",marginLeft:'49pc',marginTop:'-8pc' }}>
          </TextField></Grid>
          <Grid >
             <TextField
          type="text"
          label="Father Name"
          value={model.fathername}
          onChange={(e)=>fillModel("fathername",e.target.value)}
          required
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'1pc',marginTop:'-4pc' }}>
          </TextField></Grid>
          <Grid >
             <TextField
          type="text"
          label="Father Contact"
          value={model.fathercontact}
          onChange={(e)=>fillModel("fathercontact",e.target.value)}
          required
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'1pc' }}>
          </TextField></Grid>
          <Grid >
             <TextField
          type="text"
          label="Emergency Contact"
          value={model.emergencycontact}
          required
          onChange={(e)=>fillModel("emergencycontact",e.target.value)}
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "inline-flex",marginLeft:'49pc',marginTop:'-6pc' }}>
          </TextField></Grid>
          <Grid >
             <TextField
          type="text"
          label="Father Cnic"
          value={model.fathercnic}
          onChange={(e)=>fillModel("fathercnic",e.target.value)}
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "inline-flex",marginLeft:'49pc',marginTop:'-12pc' }}>
          </TextField></Grid>
          <Grid >
             <TextField
          type= 'text'
          label="Date Of Birth" 
          value={model.birthdate}
          onChange={(e)=>fillModel("birthdate",e.target.value)}
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'1pc',marginTop:'-2pc' }}>
          </TextField></Grid>
          <Grid >
             <TextField
          type="text"
          label="Age"
          value={model.age}
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "inline-flex",marginLeft:'49pc',marginTop:'-6pc' }}>
          </TextField></Grid>
      
        <Button onClick={signIn} sx={{marginLeft:'40pc',marginTop:'-2pc',border:'10px solid salmon'}}>Register</Button>   
        
    </div>
    
    </>
  )
}


export default Studentregistration