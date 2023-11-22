import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
// import { useCookies } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import { EyeFill } from "react-bootstrap-icons"; 

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);
  const [alldata, setAllData] = useState([]);
  const [content, setContent] = useState(0);
  const navigate = useNavigate();

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
    // Using a public API for demonstration purposes
    axios.get("https://restcountries.com/v2/all").then((response) => {
      // Extracting unique languages from the country data
      const allLanguages = response.data.reduce((acc, country) => {
        const countryLanguages = country.languages.map((language) => ({
          code: language.iso639_1,
          name: language.name,
        }));
        return [...acc, ...countryLanguages];
      }, []);

      // Deduplicating languages based on language code
      const uniqueLanguages = Array.from(
        new Map(allLanguages.map((lang) => [lang.code, lang])).values()
      );

      setLanguages(uniqueLanguages);
    });

    axios.get("https://restcountries.com/v2/all").then((response) => {
      const countryList = response.data.map((country) => ({
        code: country.alpha2Code,
        name: country.name,
      }));
      setCountries(countryList);
    });

    axios
      .post(
        "http://localhost:80/guide_me/src/server/api/gettouristData.php?id=0",
        {
          params: {
            // id: props.props,
            userId: getCookie("user_id"),
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        setAllData(data.data);
      });
  }, []);

  const updateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);
      formData.append("name", document.getElementById("fname").value);
      formData.append("contact", document.getElementById("mobile").value);
      formData.append("email", document.getElementById("email").value);
      formData.append("country", document.getElementById("province").value);
      formData.append("languages", document.getElementById("district").value);

      await axios.post("http://localhost:80/guide_me/src/server/api/updateTouristProfile.php", formData);

      // Redirect or provide feedback upon successful update
      navigate("/");
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error (e.g., show an error message)
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Update the selected image state
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
    <NavBar />
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-primary">
          <div className="row">
            <div className="col-12 bg-body mt-4 mb-4">
              <div className="row g-2">
                <div className="col-md-3 border-end">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
          src={selectedImage || "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"}
          className="rounded mt-5"
          style={{ width: "150px" }}
          alt="Profile"
        />
                    <br />
                    <span className="fw-bold">{alldata.tourist_name}</span>
                    <span className="fw-bold text-black-50">{alldata.email}</span>
                    <input
                      type="file"
                      className="d-none"
                      id="profileImage"
                      accept="image/*"
                      onChange={handleImageChange}
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
                    <div className="d-flex justify-content-center align-items-center mb-3">
                      <h4 className="fw-bold">Profile Settings</h4>
                    </div>

                    <div className="row mt-4">
                      <div className="col-12">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          id="fname"
                          className="form-control"
                          name="name"
                          defaultValue={alldata.tourist_name}
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Mobile Number</label>
                        <input
                          type="text"
                          id="mobile"
                          className="form-control"
                          name="contact"
                          defaultValue={alldata.contact_number}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Email</label>
                        <input
                          type="text"
                          id="email"
                          className="form-control"
                          name="email"
                          defaultValue={alldata.email}
                        />
                      </div>

                      <div className="col-6">
                        <label className="form-label">Country</label>
                        <select className="form-select" id="province">
                          <option value="0">Select Country</option>
                          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
                        </select>
                      </div>

                      <div className="col-6">
                        <label className="form-label">Languages</label>
                        <select className="form-select" id="district">
                          <option value="0">Select Languages</option>
                          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
                        </select>
                      </div>

                      <div className="col-12">
                        <label className="form-label">Gender</label>
                        <input
                          type="text"
                          className="form-control"
                          readonly
                          defaultValue={alldata.tourist_gender}
                        />
                      </div>

                      <div className="col-12 d-grid mt-2">
                        <button
                          className="btn btn-primary"
                          onClick={updateProfile}
                        >
                          Update My Profile
                        </button>
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
    <Footer />
    </>
  );
};

export default EditProfile;
