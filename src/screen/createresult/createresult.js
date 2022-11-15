import React from 'react'
import { useState } from 'react'

function CreateResult() {
    const [model,setModel] = useState({});
    const [courseStatus,setCourseStatus] = useState(false);
    const [resultData,setResultData] = useState([ 
       {
        name: "ABC",
        marks: 80,
        rollNum: "ABC100",
        result: "Pass",
      },
      {
        name: "ABC",
        marks: 80,
        rollNum: "ABC101",
        result: "Pass",
      },
      {
        name: "ABC",
        marks: 80,
        rollNum: "ABC102",
        result: "Pass",
      },
      {
        name: "ABC",
        marks: 80,
        rollNum: "ABC103",
        result: "Pass",
      },
      {
        name: "ABC",
        marks: 80,
        rollNum: "ABC104",
        result: "Pass",
      },
      {
        name: "ABC",
        marks: 80,
        rollNum: "ABC105",
        result: "Pass",
      },
      {
        name: "ABC",
        marks: 80,
        rollNum: "ABC106",
        result: "Pass",
      },
      {
        name: "ABC",
        marks: 80,
        rollNum: "ABC107",
        result: "Pass",
      },
      {
        name: "ABC",
        marks: 80,
        rollNum: "ABC108",
        result: "Pass",
      },
      {
        name: "ABC",
        marks: 80,
        rollNum: "ABC109",
        result: "Pass",
      },]); 
      const [loader,setLoader] = useState(false);

      let submitForm =()=>{
        setLoader(true);
        model.isShowResult = courseStatus;
        model.result = resultData
      }
  return (
    <>
      
    </>
  )
}

export default CreateResult
