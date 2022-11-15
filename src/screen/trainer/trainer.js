import { TextField } from '@mui/material'
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import Dropdown from '../../components/dropdown';


function Trainer() {
  return (
    <>
    <div>

    <h1>
          <TypeAnimation
            sequence={[
                "This is the Trainer Screen",
                1000,
                "Here are the details of trainers",
                3000,
                "Every Trainer has a course",
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
            />
            </h1>
            <TextField
          type="text"
          label="FirstName"
          required
          sx={{
            padding: 1,
            border: "none",
            margin: "16px",
            width: "60%",
            display: "inline-flex",
            marginLeft:'15pc'
          }}
             />
             <TextField
          type="text"
          label="lastname"
          required
          sx={{
            padding: 1,
            border: "none",
            margin: "16px",
            width: "60%",
            display: "inline-flex",
            marginLeft:'15pc'
          }}
             />
             <TextField
          type="text"
          label="cnic"
          required
          sx={{
            padding: 1,
            border: "none",
            margin: "16px",
            width: "60%",
            display: "inline-flex",
            marginLeft:'15pc'
          }}
             />
             <TextField
          type='text'
          label="qualification"

          required
          sx={{
            padding: 1,
            border: "none",
            margin: "16px",
            width: "60%",
            display: "inline-flex",
            marginLeft:'15pc'
          }}
             />
             <TextField
          type="text"
          label="Contacts"
          required
          sx={{
            padding: 1,
            border: "none",
            margin: "16px",
            width: "60%",
            display: "inline-flex",
            marginLeft:'15pc'
          }}
             />
             <Dropdown
          type="text"
          label="Courses Allowed"
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
          required
        //   sx={{
        //     padding: 1,
        //     border: "none",
        //     margin: "16px",
        //     width: "60%",
        //     display: "inline-flex",
        //     // marginLeft:'10pc'
        //   }}
             />
                <TextField
          type="text"
          label="Contacts"
          required
          sx={{
            padding: 1,
            border: "none",
            margin: "16px",
            width: "60%",
            display: "inline-flex",
            marginLeft:'15pc'
          }}
             />
            </div>
    </>
  )
}

export default Trainer