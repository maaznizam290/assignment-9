import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Signup from "../screen/signup/signup";
import Login from "../screen/Login/Login";
import Studentregistration from "../screen/studentregistration/studentregistration";
import Courseform from "../screen/admin/courseform/courseform";
import Admin from "../screen/admin/admin";
import { useState } from "react";
import { getData } from "../config/firebaseMehods";
import Quiz from "../screen/quiz/quiz";
import CreateResult from "../screen/createresult/createresult";
import Trainer from "../screen/trainer/trainer";
import Cities from "../screen/admin/cities/cities";
import Dashboard from "../screen/admin/dashboard/dashboard";

function AppRouter() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login/>}/>
          <Route path ='registration' element={<Studentregistration/>}/>
          <Route path='course' element={<Courseform/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path="quiz" element={<Quiz/>}/>
          <Route path='result' element={<CreateResult/>}/>
          <Route path='trainer' element={<Trainer/>}/>
          <Route path='cities' element={<Cities/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
