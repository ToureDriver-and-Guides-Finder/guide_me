import React, { lazy, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import "./components/nav.css";
import HomeMain from "./components/Home-MainSection/HomeMain";
import CreateTour from "./components/Home-CreateTour/CreateTour";
import DestinationCategory from "./components/Home-Destination/destination";
import Comment from "./components/Home-comment/comment";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Gig-Form/form";
import SignUp from "./components/SignIn-SignUp/SigninUp";
import TouristAuth from "./components/SignIn-SignUp/login";
import axios from "axios";
import TourMain from "./pages/Tour";
// const NavBar = lazy(() => import("./components/Navbar"));

function App() {
  // axios.defaults.headers.post["Content-Type"] = "application/json";
  // axios.defaults.withCredentials = true;
  // axios.defaults.crossDomain = true;
  const [auth,setAuth]=useState(true);
  return (

    
    <div>
      {auth?<div><NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/gig" element={<Form />} />
          <Route path="/tour" element={<TourMain />} />
          
        </Routes>
      </BrowserRouter>
      
      <Footer /></div>:<TouristAuth/>}
      
    
   
      
    </div>
  );
}

export default App;
