import React, { lazy } from "react";
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
// const NavBar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/destinations" element={<Destinations />} />
         
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
