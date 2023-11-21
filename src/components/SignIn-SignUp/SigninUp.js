import React, { useState } from "react";
import "../SignIn-SignUp/signinUp.css";

export default function SignUp() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleOverlayClick = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  return (
    <div className="body-con">
      <div className={`container-sign ${isSignUp ? "right-panel-active" : ""}`}>
        <div className="form-container sign-up-container">
          <form action="#" className="form-con">
            <h1>Create Account</h1>
            <div class="infield">
              <input type="text" placeholder="Name" />
              <label></label>
            </div>
            <div class="infield">
              <input type="email" placeholder="Email" name="email" />
              <label></label>
            </div>
            <div class="infield">
              <input type="text" placeholder="Contact No" name="contactNo" />
              <label></label>
            </div>
            <div class="infield">
              <input type="password" placeholder="Password" />
              <label></label>
            </div>
            <div class="infield">
              <input type="password" placeholder="Confirm Password" />
              <label></label>
            </div>
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" className="form-con">
            <h1>Sign in</h1>
            <div class="infield">
              <input type="email" placeholder="Email" name="email" />
              <label></label>
            </div>
            <div class="infield">
              <input type="password" placeholder="Password" />
              <label></label>
            </div>
            <a href="#" class="forgot">
              Forgot your password?
            </a>
            <button>Log In</button>
          </form>
        </div>
        <div className="overlay-container" onClick={handleOverlayClick}>
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button id="overlayBtn">Log In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button id="overlayBtn">Sign Up</button>
            </div>
          </div>
          {/* <button className="overlay-btn" id="overlayBtn"></button> */}
        </div>
      </div>
    </div>
  );
}
