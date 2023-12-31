import React, { lazy, useEffect, useState } from "react";
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
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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
import DriverLogin from "./DriverPannel/Components/Driver-Login/DriverLogin";
import TourDetails from "./DriverPannel/DriverPages/TourDetails";
import ChatHome from "./components/Chat/ChatHome";
import DriverChat from "./DriverPannel/Components/Driver-Chat/DriverChat";
import ChatRoom from "./components/Chat/ChatRoom";
import UserChatRoom from "./components/Chat/UserChat";
import ConfirmTour from "./components/PaymentProseed/ConfirmTour";
import DriverProfile from "./DriverPannel/DriverPages/DriverProfile";
import UserProfile from "./pages/EditProfile";
import GuideLogin from "./GuidePannel/components/Guide-Login/GuideLogin";
import AllDestinations from "./pages/AllDestinations";

// const NavBar = lazy(() => import("./components/Navbar"));

function App() {
  // axios.defaults.headers.post["Content-Type"] = "application/json";
  // axios.defaults.withCredentials = true;
  // axios.defaults.crossDomain = true;
  const [auth, setAuth] = useState(false);
  const [authstate, setAuthState] = useState(0);

  const [cookie, setcookiedata] = useState("");

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  useEffect(() => {
    const ck = getCookie("user_type");
    if (ck) {
      if (ck === "driver") {
        setAuth(true);
        setAuthState(1);
      } else if (ck === "user") {
        setAuth(true);
        setAuthState(0);
      } else if (ck === "guide") {
        setAuth(true);
        setAuthState(2);
      }
      setcookiedata(true);
    } else {
      setAuth(false);
      // navigate("/");
    }
  }, []);

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
      <Route path="/d-login" element={<DriverLogin />} />
      <Route path="/g-login" element={<GuideLogin />} />
      <Route path="/chatRoom" element={<UserChatRoom />} />
      <Route path="/tour-confirm" element={<ConfirmTour />} />
      <Route path="/EditProfile" element={<UserProfile />} />
      <Route path="/alldestinations" element={<AllDestinations />} />
    </Routes>,
    <Routes>
      <Route path="/" element={<DiverHomePage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/d-login" element={<DriverLogin />} />
      <Route path="/tour-details" element={<TourDetails />} />
      <Route path="/d-chat" element={<DriverChat />} />
      <Route path="/d-chatRoom" element={<ChatRoom />} />
      <Route path="/d-profile" element={<DriverProfile />} />
    </Routes>,
    <Routes>
      <Route path="/" element={<DiverHomePage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/g-login" element={<GuideLogin />} />
      <Route path="/tour-details" element={<TourDetails />} />
      <Route path="/d-chat" element={<DriverChat />} />
      <Route path="/d-chatRoom" element={<ChatRoom />} />
      <Route path="/d-profile" element={<DriverProfile />} />
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
