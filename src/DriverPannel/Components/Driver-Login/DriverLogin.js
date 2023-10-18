import { useState } from "react";
import "../Driver-Login/login.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const DriverLogin = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errormsg, setError] = useState();

  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    vehical: "",
    mark: "",
    model: "",
    registration: "",
    psw: "",
    conpsw: "",
  });
  const [logdata, setLogData] = useState({
    email: "",
    psw: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
    console.log(data);
  };
  const handleLoginChange = (e) => {
    const value = e.target.value;
    setLogData({
      ...logdata,
      [e.target.name]: value,
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/driverauthcontroller.php?id=0",
        {
          params: { data: data, function: "register" },
          headers: {
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept", // this will allow all CORS requests
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET", // this states the allowed methods
            "Content-Type": "application/json", // this shows the expected content type
          },
        },
        { withCredentials: false }
      )
      .then((user_data) => {
        console.log(user_data);
        if (user_data.data !== "/") {
          setError(user_data.data);
        } else {
          document.cookie = "user_id=" + data["email"];
          navigate("/");
        }
      });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/driverauthcontroller.php?id=0",
        {
          params: { data: logdata, function: "login" },
          headers: {
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept", // this will allow all CORS requests
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET", // this states the allowed methods
            "Content-Type": "application/json", // this shows the expected content type
          },
        },
        { withCredentials: false }
      )
      .then((data) => {
        console.log(data);
        if (data.data !== "/") {
          setError(data.data);
        } else {
          document.cookie = "user_id=" + logdata["email"];
          navigate("/");
        }
      });
  };

  const handletoggleClick = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  return (
    <div>
      {!isSignUp ? (
        <div className="dauth-body">
          <div className="container auth">
            <div className="container left">
              <h1>SIGN IN</h1>
              <form className="auth-form" onSubmit={handleLoginSubmit}>
                {errormsg != null ? (
                  <div class="alert alert-danger w-100" role="alert">
                    {errormsg}
                  </div>
                ) : (
                  ""
                )}
                <div className="form-group lft">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control lform"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleLoginChange}
                    value={logdata.email}
                  />
                </div>
                <div className="form-group lft">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control lform"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="psw"
                    onChange={handleLoginChange}
                    value={logdata.psw}
                  />
                </div>
                <a href="#">Forgot your passward?</a>
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </form>
            </div>
            <div className="container right">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="btn btn-outline-light"
                id="togle-btn"
                onClick={handletoggleClick}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="dauth-body">
          <div className="container auth signin">
            <div className="container left">
              <h1>Create Accout</h1>
              <form className="auth-form" onSubmit={handleRegisterSubmit}>
                {errormsg != null ? (
                  <div class="alert alert-danger w-100" role="alert">
                    {errormsg}
                  </div>
                ) : (
                  ""
                )}
                <div className="form-group lft">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                    onChange={handleChange}
                    value={data.name}
                  />
                </div>
                <div className="form-group lft">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={data.email}
                  />
                </div>
                <div className="form-group lft">
                  <label for="exampleInputEmail1">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="contact"
                    aria-describedby="emailHelp"
                    placeholder="Contact"
                    onChange={handleChange}
                    value={data.contact}
                  />
                </div>
                <div className="form-group lft">
                  <label for="vehicaltype">Vehical Type</label>
                  <select
                    name="vehiytpe"
                    onChange={handleChange}
                    value={data.vehical}
                  >
                    <option value="car">Car</option>
                    <option value="van">Van</option>
                    <option value="suv">Suv</option>
                    <option value="bus">Bus</option>
                    <option value="other">Other</option>
                  </select>
                  {/* <input
                    type="number"
                    className="form-control"
                    name="contact"
                    aria-describedby="emailHelp"
                    placeholder="Contact"
                    onChange={handleChange}
                    value={data.contact}
                  /> */}
                </div>
                <div className="form-group lft">
                  <label for="exampleInputEmail1">Vehical Mark</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mark"
                    aria-describedby="emailHelp"
                    placeholder="Vehical Mark"
                    onChange={handleChange}
                    value={data.mark}
                  />
                </div>
                <div className="form-group lft">
                  <label for="exampleInputEmail1">Vehical Model</label>
                  <input
                    type="text"
                    className="form-control"
                    name="model"
                    aria-describedby="emailHelp"
                    placeholder="Vehical Model"
                    onChange={handleChange}
                    value={data.model}
                  />
                </div>
                <div className="form-group lft">
                  <label for="exampleInputEmail1">Registration Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="registration"
                    aria-describedby="emailHelp"
                    placeholder="ABC-1234"
                    onChange={handleChange}
                    value={data.registration}
                  />
                </div>
                <div className="form-group lft">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="psw"
                    placeholder="Password"
                    onChange={handleChange}
                    value={data.psw}
                  />
                </div>
                <div className="form-group lft">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="conpsw"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={data.conpsw}
                  />
                </div>
                {/* <a href="#">Forgot your passward?</a> */}
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </form>
            </div>
            <div className="container right">
              <h1>Hello Travelers!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="btn btn-outline-light"
                id="togle-btn"
                onClick={handletoggleClick}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverLogin;
