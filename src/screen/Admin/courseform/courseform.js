import { Button, Grid, TextField } from '@mui/material';
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import './courseform.css'
function Courseform() {
  return (
    <>
        <div className='CourseStyles'>  
            <h1>
        <TypeAnimation
            sequence={[
              "Welcome to the course form",
              1000,
              "Student can select Multiple Courses ",
              3000,
              "Kindly Fill the form",
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </h1>
        <Grid md={3}>
             <TextField
          type="text"
          label="Course Name"
          required
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "inline-flex",marginLeft:'2pc',marginTop:'3pc' }}>
          </TextField></Grid>
          <Grid md={3}>
             <TextField
          type="text"
          label="Course Duration"
          required
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'48pc',marginTop:'-6pc' }}>
          </TextField></Grid>
          <Grid md={3}>
             <TextField
          type="text"
          label="Is Form Open?"
          required
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'2pc',marginTop:'3pc' }}>
          </TextField></Grid>
          <Grid md={3}>
             <TextField
          type="text"
          label="No of quizzes which are included in the course"
          required
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'48pc',marginTop:'-6pc' }}>
          </TextField></Grid>
          <Grid md={3}>
             <TextField
          type="text"
          label="Fee in Rupees"
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'2pc',marginTop:'3pc' }}>
          </TextField></Grid>
          <Grid md={3}>
             <TextField
          type="text"
          label="Lead Trainer Id"
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'48pc',marginTop:'-6pc' }}>
          </TextField></Grid>
          <Grid md={3}>
             <TextField
          type="text"
          label="Assistant Trainers"
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "40%",
          display: "flex",marginLeft:'2pc',marginTop:'3pc' }}>
          </TextField></Grid>
        </div>
        <Button sx={{marginLeft:'37pc',marginTop:'3pc',border:'10px solid salmon'}}>Register Course</Button>

    </>
  )
}

export default Courseform;