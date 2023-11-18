import './App.css'

//Header Footer imports
import Header from './Components/HeaderComponent/Header'
import Footer from './Components/FooterComponent/Footer'

//React Router Imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importing all pages
import Login from './Components/LoginComponent/Login'
import Dashboard from './Components/DashboardComponents/Dashboard'
import Home from './Components/HomePageComponent/Home'
import Signup from './Components/SignupComponent/Signup'
import Assignments from './Components/DashboardComponents/Assignments';
import Courses from './Components/DashboardComponents/Courses';
import Results from './Components/DashboardComponents/Results';
import Attendance from './Components/DashboardComponents/Attendance';


const routes = [<Route path="/login" element={<Login />} />,
                <Route path = "/dashboard" element = {<Dashboard />} />,
                <Route path = "/" element = {<Home />} />,
                <Route path = "/signup" element = {<Signup />} />,
                <Route path = "/dashboard/assignments" element = {<Assignments/>} />,
                <Route path = "/dashboard/courses" element = {<Courses/>} />,
                <Route path = "/dashboard/attendance" element = {<Results/>} />,
                <Route path = "/dashboard/results" element = {<Attendance/>} />,
                ]
                
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>{routes}</Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
