import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EyeFill } from 'react-bootstrap-icons'; // Import EyeFill from react-bootstrap-icons
import './style.css'; // Import your custom styles here

const UserProfile = () => {
  const [cookies, setCookie] = useCookies(['user']);
  const [profileData, setProfileData] = useState({
    fname: '',
    lname: '',
    mobile: '',
    pw: '',
    email: '',
    // Add other profile fields as needed
  });

  useEffect(() => {
    // Fetch user profile data from cookies or an API
    const userFromCookies = cookies.user || {};
    setProfileData(userFromCookies);
  }, [cookies.user]);

  const updateProfile = () => {
    // Add your logic for updating the profile here
    // You can use the 'profileData' state to access form data
    // Update the 'cookies.user' accordingly
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-primary">
          <div className="row">
            <div className="col-12 bg-body mt-4 mb-4">
              <div className="row g-2">
                {/* ... (Your existing HTML code) */}
                <div className="col-md-3 border-end">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img
                      src="resourses/profile_img.svg"
                      className="rounded mt-5"
                      style={{ width: '150px' }}
                      alt="Profile"
                    />
                    <br />
                    <span className="fw-bold">Full Name</span>
                    <span className="fw-bold text-black-50">Email</span>
                    <input
                      type="file"
                      className="d-none"
                      id="profileImage"
                      accept="image/*"
                    />
                    <label
                      htmlFor="profileImage"
                      className="btn btn-outline-primary mt-5"
                    >
                      Update Profile Image
                    </label>
                  </div>
                </div>

                <div className="col-md-5 border-end">
                  <div className="p-3 py-5">
                    {/* ... (Your existing form code) */}
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <h4 className="fw-bold">Profile Settings</h4>
                    </div>

                    <div className="row mt-4">
                     <div className="col-6">
                        <label className="form-label">First Name</label>
                        <input type="text" id="fname" className="form-control" value="" />
                      </div>

                      <div className="col-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" id="lname" className="form-control" value="" />
                      </div>

                       <div className="col-12">
                          <label className="form-label">Mobile Number</label>
                          <input type="text" id="mobile" className="form-control" value="" />
                        </div>
                    <div className="col-12">
                      <label className="form-label">Password</label>
                      <div className="input-group">
                        <input
                          type="password"
                          id="pw"
                          value={profileData.pw}
                          className="form-control"
                          aria-describedby="basic-addon2"
                        />
                        <span className="input-group-text" id="basic-addon2">
                          <EyeFill />
                        </span>
                      </div>
                    </div>
                    {/* ... (Your existing form code) */}
                    <div className="col-12">
                                                <label className="form-label">Email</label>
                                                <input type="text" id="email" className="form-control" value="" />
                                            </div>

                                            
                                            <div className="col-6">
                                                <label className="form-label">Country</label>
                                                <select className="form-select" id="province">
                                                    <option value="0">Select Country</option>
                                                    <option value=""> </option>
                                                </select>
                                            </div>

                                            <div className="col-6">
                                                <label className="form-label">Languages</label>
                                                <select className="form-select" id="district">
                                                    <option value="0">Select Languages</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>

                                            <div className="col-12">
                                                <label className="form-label">Gender</label>
                                                <input type="text" className="form-control" readonly value="" />
                                            </div>

                                            <div className="col-12 d-grid mt-2">
                                                <button className="btn btn-primary" onclick="updateProfile();">Update My Profile</button>
                                            </div>
                                            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
