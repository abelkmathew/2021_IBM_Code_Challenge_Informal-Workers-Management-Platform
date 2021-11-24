import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import CustomerSignUp from './pages/CustomerSignUp/CustomerSignUp';
import WorkerSignUp from './pages/WorkerSignUp/WorkerSignUp'
import CustomerHome from './pages/CustomerHome/CustomerHome'
import CreatePost from './pages/CreatePost/CreatePost'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/custsignup' element={<CustomerSignUp/>} />
          <Route path='/workersignup' element={<WorkerSignUp/>} />
          <Route path='/customerhome' element={<CustomerHome/>} />
          <Route path='/customerhome/createpost' element={<CreatePost/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
