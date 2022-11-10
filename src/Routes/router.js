import React from 'react'
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom';
import Courseform from '../screen/courseform';
import Form from '../screen/form';
import LogoutModal from '../Component/modal';
import Sidebar from '../Component/sidebar';
import Home from '../screen/home';
import Login from '../screen/login';
import Signup from '../screen/signup';
function AppRouter() {
  return (
    <>

    
    <Router>
        <Routes>
          <Route path='/:id' element={<Home/>}/>
            <Route path='home' element={<Sidebar/>}/>
            <Route path='login' element = {<Login/>} />
            <Route path='signup' element = {<Signup/>}/>
            <Route path='form' element= {<Form/>}/>
            <Route path='courseform' element={<Courseform/>}/>
            <Route path='logout' element={<LogoutModal/>}/>
        </Routes>
    </Router>
    </>
  )
}
export default AppRouter;


