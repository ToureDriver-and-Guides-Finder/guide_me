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
import DestinationsCategory from "./pages/DestinationsCategory";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/404";
import DestinationDetail from "./components/Destination-ShowDetails/distinationDetails";
import AboutUs from "./components/aboutus/aboutus";
import DiverHomePage from "./DriverPannel/DriverPages/Home";
import DashBoard from "./Admin/pages/Dashboard";

// const NavBar = lazy(() => import("./components/Navbar"));

function App() {
  // axios.defaults.headers.post["Content-Type"] = "application/json";
  // axios.defaults.withCredentials = true;
  // axios.defaults.crossDomain = true;
  const [auth, setAuth] = useState(true);
  const [authstate, setAuthState] = useState(1);

  const routesdata = [
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/gig" element={<Form />} />
      <Route path="/tour" element={<TourMain />} />
      <Route path="/destination-category" element={<DestinationsCategory />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/destination_details" element={<DestinationDetail />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/login" element={<TouristAuth />} />
    </Routes>,
    <Routes>
      <Route path="/" element={<DiverHomePage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/gig" element={<Form />} />
      <Route path="/tour" element={<TourMain />} />
      <Route path="/destination-category" element={<DestinationsCategory />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/destination_details" element={<DestinationDetail />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/login" element={<TouristAuth />} />
    </Routes>,
    <Routes>
      <Route path="/" element={<DashBoard />} />
    </Routes>,
  ];
  return (
    <div>
      <BrowserRouter>{routesdata[authstate]}</BrowserRouter>
    </div>
  );
}

export default App;
