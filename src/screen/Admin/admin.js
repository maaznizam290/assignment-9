import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import {TextField} from "@mui/material";
import InputButton from "../../components/button";
import {handleLogIn} from '../../config/firebaseMehods'
function Admin() {
  const [model, setmodel] = useState({});

  let navigate = useNavigate();
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
  };
  let login = () => {
    handleLogIn(model)
      .then((success) => {
        console.log(success);
        navigate("/adminform");
      })
      .catch((err) => {
        console.log(err);
      });
  };
//   let locate = () => {
//     navigate("/signup");
//   };
  return (
    // <div style={{margin:10}}>
      <div className="header box">
        <Box sx={{ width: "45%", pt: 2 }}>
          <Box sx={{ border: "2px solid white", borderRadius: "25px", p: 3 }}>
            <Typography color="inherit" variant="h4">
              Login
            </Typography>
            <Grid container spacing={2} sx={{ pt: 5 }}>
              <Grid item md={12}>
                <TextField
                  label="Email"
                  required={true}
                  value={model.email}
                  type={"email"}
                  onChange={(e) => fillmodel("email", e.target.value)}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  label="Password"
                  required={true}
                  value={model.password}
                  type={"password"}
                  onChange={(e) => fillmodel("password", e.target.value)}
                />
              </Grid>
              <Grid item md={12}>
                <InputButton
                  label={"Admin"}
                  color={"success"}
                  variant={"contained"}
                  fullwidth
                  onClick={login}
                />
              </Grid>
            </Grid>
            {/* <Grid sx={{ p: 1.5 }}>
            <Typography variant="span">Dont Have An Account ? </Typography>
            <Typography variant="span" sx={{ textDecoration: "underline" ,cursor:"pointer" }}>
            Login
            </Typography>
        </Grid> */}
          </Box>
        </Box>
      </div>
    // </div>
  );
}

export default Admin;