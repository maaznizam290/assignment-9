import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Courseform from '../Component/courseform';
import Form from '../Component/form';
import Home from '../screen/home';
import Login from '../screen/login';
import Signup from '../screen/signup';
function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element = {<Login/>} />
            <Route path='/signup' element = {<Signup/>}/>
            <Route path='/form' element= {<Form/>}/>
            <Route path='/courseform' element={<Courseform/>}/>
        </Routes>
    </Router>
    </>
  )
}
export default AppRouter;


