import { Box, Divider, Grid, Select } from "@mui/material";
import React from "react";
import { useState } from "react";
import FormSubmit from "../Component/button";
import Input from "../Component/input";
import Selects from "../Component/select";
import SelectButton from "../Component/select";
import { setDate } from "../core/helpermethod";

function Form() {
  const [models, setModels] = useState({});
  const d2 = () => {
    new Date("Nov 11,22 10:03:20").getFullYear();
    console.log(d2);
  };
  return (
    <>
      <div className="backgroundTheme">
        <Box sx={{ backgroundColor: "#E9C46A", padding: 2, margin: 0 }}>
          <h1 style={{ color: "darkblue", textAlign: "center" }}>
            Weclome To The Registration Form
          </h1>
        </Box>
        <Box>
          <Box sx={{ padding: 1 }}>
            <Grid container>
              <Grid item md={6}>
                <Input label="firstname" />
              </Grid>
              <Grid item md={6}>
                <Input label="lastname" />
              </Grid>
              <Grid item md={2}>
                <SelectButton
                  label="Course"
                  datasource={[
                    {
                      id: "MERN",
                      fullName: "Mongo DB ExpressJS ReactJS NodeJS ",
                    },
                    {
                      id: "CP",
                      fullName: "Computer Programming ",
                    },
                    {
                      id: "GD",
                      fullName: "Graphic Designing",
                    },
                  ]}
                />
              </Grid>
              <Grid item md={8}>
                <SelectButton
                  label="section"
                  datasource={[
                    { id: "A", fullName: "A" },
                    {
                      id: "B",
                      fullName: "B",
                    },
                  ]}
                />
              </Grid>

              <Grid item md={6}>
                <Input label="Contact" />
              </Grid>
              <Grid item md={6}>
                <Input label="Cnic" />
              </Grid>
              <Grid item md={6}>
                <Input label="FatherName" />
              </Grid>
              <Grid item md={6}>
                <Input label="FatherCnic" />
              </Grid>
              <Grid item md={6}>
                <Input label="Father Contact" />
              </Grid>
              <Grid item md={6}>
                <Input label="Emergency Contact" />
              </Grid>
              <Grid md={6}>
                <SelectButton
                  label="Age"
                  datasource={[
                    {
                      id: "1",
                      fullName: "12-16",
                    },
                    {
                      id: "2",
                      fullName: "16-20",
                    },
                    {
                      id: "3",
                      fullName: "20-24",
                    },
                    {
                      id: "4",
                      fullName: "24-30",
                    },
                  ]}
                />
              </Grid>
              <Grid item md={12}>
                <FormSubmit label="submit" onClick={d2} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Form;
