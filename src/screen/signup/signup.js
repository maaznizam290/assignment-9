import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { handleSignup } from "../../config/firebaseMehods";
import "./signup.css";

function Signup() {
  const [loading,setLoading] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");
  const [password,setPassword] = useState("")
  const [error,setError] = useState(false);
  const [model,setModel] = useState({});
  const navigate = useNavigate();
  
  const inputHandler = (key,value)=>{
    model[key] = value;
    setModel({...model});
    console.log(model);
  }

  const signupSubmit = ()=>{
    // setLoading(true)
    // Firebase Auth
    handleSignup(model).then((success)=>{
      // setLoading(false)
      console.log(success)
    }).catch((error)=>{
      // setError(true);
      // setLoading(false)
      console.log(error);
    })
  }
  return (
    <>
      <div className="Signup">
        <h1>
          <TypeAnimation
            sequence={[
              "This is the Signup Screen",
              1000,
              "Kindly Enter the details for Signup",
              3000,
              "On Signingup you would be Registered",
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </h1>
        <TextField
          type="text"
          label="Name"
          required
          onChange={(e)=>inputHandler("name",e.target.value)}
          sx={{
            padding: 1,
            border: "none",
            margin: "16px",
            width: "60%",
            display: "inline-flex",
            marginLeft:'15pc'
          }}
        >
          Please Enter your Name
        </TextField>
        <TextField
          type="number"
          label="Number"
          required
          onChange={(e)=>inputHandler("number",e.target.value)}
          sx={{
            padding: 1,
            border: "none",
            margin: "16px",
            width: "60%",
            display: "inline-flex",
            marginLeft:'15pc'
          }}
        >
          Please Enter your Number
        </TextField>
        <TextField
          type="email"
          label="Email"
          required
          onChange={(e)=>inputHandler("email",e.target.value)}
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "60%",
          display: "inline-flex",marginLeft:'15pc' }}
        >
          Please Enter your Email
        </TextField>
        <TextField
          type="password"
          label="Password"
          required
          onChange={(e)=>inputHandler("password",e.target.value)}
          sx={{ padding: 1, border: "none",margin: "16px",
          width: "60%",
          display: "inline-flex",marginLeft:'15pc' }}
        >
          Please Enter your Password
        </TextField>
        <Button onClick={signupSubmit}  sx={{ display:'block',marginLeft:'34pc',border:'10px solid purple' }}>Submit</Button>
      </div>
    </>
  );
}

export default Signup
