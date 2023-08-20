import { useState } from "react";
import "../SignIn-SignUp/login.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const TouristAuth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errormsg, setError] = useState();

  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
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
        "http://localhost:80/guide_me/src/server/api/authcontroller.php?id=0",
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
      .then((data) => {
        console.log(data);
        if (data.data !== "/") {
          setError(data.data);
        } else {
          navigate("/");
        }
      });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:80/guide_me/src/server/api/authcontroller.php?id=0",
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
          navigate("/");
        }
      });
  };

  const handletoggleClick = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  // return <div>{!isSignUp ? <Login /> : <SignIn />}</div>;
  return (
    <div>
      {!isSignUp ? (
        <div className="auth-body">
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
                    className="form-control"
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
                    className="form-control"
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
        <div className="auth-body">
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
                    type="number"
                    className="form-control"
                    name="contact"
                    aria-describedby="emailHelp"
                    placeholder="Contact"
                    onChange={handleChange}
                    value={data.contact}
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

export default TouristAuth;
