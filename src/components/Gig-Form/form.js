import React, { useEffect, useState } from "react";
import "../Gig-Form/form.css";
import LanguageDropdown from "../Languages-Dropdrown/Languages";
import CountriesDropdown from "../countries-dropdown/Countries";
import DistrictsDropdown from "../districts-dropdown/Districts";
import axios from "axios";
import AddNewTour from "../AddToFavModel/AddNewTour";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Nav } from "react-bootstrap";
import NavBar from "../Navbar";
import Footer from "../Footer";

export default function Form() {
  const [districts, setdistricts] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const [formStepsNum, setFormStepsNum] = useState(0);
  const [value, setValue] = useState();
  const [cookie, setcookiedata] = useState(false);
  const [userdata, setAllData] = useState([]);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    contactNo: "",
    startdate: "",
    finishdate: "",
    no_of_passengers: "",
    duration: "",
    country: "",
    language: "",
  });
  // const [destinations, setDestinations] = useState([]);

  // const navigate = useNavigate();
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
  const destinationchange = (e) => {
    setDestinations([...destinations, e.target.value]);
  };

  useEffect(() => {
    axios.get("districts.json").then((data) => {
      // console.log(data.data);
      setdistricts(data.data);
    });
    const ck = getCookie("user_id");
    if (ck) {
      setcookiedata(true);
      axios
        .post(
          "http://localhost:80/guide_me/src/server/api/gettouristData.php?id=0",
          {
            params: {
              // id: props.props,
              userId: ck,
            },
          }
        )
        .then((data) => {
          // console.log(data.data);
          setData({
            fname: data.data["tourist_name"],
            lname: "",
            email: data.data["email"],
            contactNo: data.data["contact_number"],
            startdate: "",
            finishdate: "",
            no_of_passengers: "",
            duration: "",
          });
          setAllData(data.data);
        });
    } else {
      setcookiedata(false);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:80/guide_me/src/server/api/addTour.php?id=0", {
        params: { data: data },
      })
      .then((data) => {
        // console.log(data);
        // if (user_data.data !== "/") {
        //   setError(user_data.data);
        // } else {
        //   document.cookie = "user_id=" + data["email"];
        //   navigate("/");
        // }
      });
    // console.log("ok");
  };
  // console.log(data);

  const getCountry = () => {
    let doc = document.getElementById("country");
    // console.log(doc.value)
    return doc.value;
  };
  const getLanguage = () => {
    let doc = document.getElementById("language");
    return doc.value;
  };

  const removeDestination = (e) => {
    // let doc=document.getElementById()
    console.log(e.target.id);
    setDestinations(
      destinations.filter((item) => {
        return item !== e.target.id;
      })
    );
  };

  const languageCallback = (message) => {
    setData({
      ...data,
      ["language"]: message,
    });
    //  return message;
  };
  const countryCallback = (message) => {
    setData({
      ...data,
      ["country"]: message,
    });
    //  return message;
  };

  const formSteps = [
    // Define your form steps as JSX here
    // Each step should have a unique key and contain the corresponding form fields
    <div
      key={0}
      className={
        formStepsNum === 0 ? "form-step form-step-active" : "form-step"
      }
    >
      {/* Step 1 Form Fields */}
      <div className="row">
        <div className="col-sm">
          <div className="input-group">
            <lable>Full Name</lable>
            <input
              type={"text"}
              name="fname"
              id="fname"
              placeholder="Full Name"
              onChange={handleChange}
              value={data.fname}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="input-group">
            <lable>Email</lable>
            <input
              type={"email"}
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              value={data.email}
              required
            />
          </div>
        </div>
        <div className="col-sm">
          <div className="input-group">
            <lable>Contact Number</lable>
            <PhoneInput
              placeholder="Enter phone number"
              name="contactNo"
              value={data.contactNo}
              onChange={setValue}
              limitMaxLength={13}
            />
          </div>
        </div>
        <div className="col-sm">
          <div className="input-group">
            <lable>Country</lable>
            <CountriesDropdown countryCallback={countryCallback} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="input-group">
            <lable>Native Language</lable>
            <LanguageDropdown languageCallback={languageCallback} />
            {/* <select id="lan">
              <option value="language">Language</option>
            
            </select> */}
          </div>
        </div>
      </div>

      <div className="btns-group">
        <div></div>
        <button
          onClick={() => handleNextStep()}
          className="btn btn-next width-50 ml-auto fbtn"
        >
          Next
        </button>
      </div>
    </div>,
    // Define other form steps here
    // Example for Step 2
    <div
      key={1}
      className={
        formStepsNum === 1 ? "form-step form-step-active" : "form-step"
      }
    >
      {/* Step 2 Form Fields */}
      <div className="row border">
        <div className="col-sm-4">
          {" "}
          <div className="input-group">
            <div className="package">
              <select
                id="districts"
                name="district"
                onChange={destinationchange}
              >
                {districts.map((data, key) => (
                  <option value={data["district"]} key={key}>
                    {data["district"]}{" "}
                  </option>
                ))}

                {/* Add other options */}
              </select>
            </div>
          </div>
        </div>
        <div className="col-sm-8 d-flex align-items-center">
          <div className="row">
            {destinations.map((data) => (
              <div className="col mb-4 w-100" id={data}>
                <span className="destination-label">
                  {data}
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                    id={data}
                    onClick={(e) => {
                      removeDestination(e);
                    }}
                  ></button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <div className="input-group">
            <label htmlFor="sdate">Start Date</label>
            <input
              type={"date"}
              name="startdate"
              id="s-date"
              onChange={handleChange}
              value={data.startdate}
            />
          </div>
        </div>
        <div className="col-sm">
          <div className="input-group">
            <label htmlFor="fdate">Finish Date</label>
            <input
              type={"date"}
              name="finishdate"
              id="f-date"
              onChange={handleChange}
              value={data.finishdate}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <div className="input-group">
            <label>Duration</label>
            <input
              type={"text"}
              name="duration"
              id="duration"
              placeholder="Duration"
              onChange={handleChange}
              value={data.duration}
            />
          </div>
        </div>
        <div className="col-sm">
          <div className="input-group">
            <label htmlFor="no">No of passengers</label>
            <input
              type={"number"}
              name="no_of_passengers"
              id="no"
              placeholder="No of Passengers"
              onChange={handleChange}
              value={data.no_of_passengers}
            />
          </div>
        </div>
      </div>

      {/* Add your form fields */}
      <div className="btns-group">
        <button onClick={() => handlePrevStep()} className="btn btn-prev">
          Previous
        </button>
        <button
          className="btn icon-button"
          type="submit"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Next
        </button>
        <AddNewTour props={{ data: data, destinations: destinations }} />
      </div>
    </div>,
    // Add more form steps as needed
    // <div
    //   key={2}
    //   className={
    //     formStepsNum === 2 ? "form-step form-step-active" : "form-step"
    //   }
    // >
    //   {/* Step 2 Form Fields */}
    //   <div className="input-group">
    //     <label htmlFor="pay">Payment Range</label>
    //     <input type={"range"} name="pay" id="pay" min="100000" max="10000000" />
    //   </div>
    //   <div className="input-group">
    //     <div className="package">
    //       <select id="vehical">
    //         <option value="vechical">Vehical Type</option>
    //         {/* Add other options */}
    //       </select>
    //     </div>
    //   </div>
    //   <div className="input-group">
    //     <input type={"text"} name="age-d" id="age-d" placeholder="Age" />
    //   </div>
    //   <div className="input-group">
    //     <label htmlFor="gender">Gender</label>
    //     <div className="gender-inputs">
    //       <input type="radio" name="gender" id="male" value="male" />
    //       <label htmlFor="male">Male</label>
    //       <input type="radio" name="gender" id="female" value="female" />
    //       <label htmlFor="female">Female</label>
    //     </div>
    //   </div>
    //   <div className="input-group">
    //     <div className="package">
    //       <select id="lan">
    //         <option value="language">Language</option>
    //         {/* Add other options */}
    //       </select>
    //     </div>
    //   </div>
    //   {/* Add your form fields */}
    //   <div className="btns-group">
    //     <button onClick={() => handlePrevStep()} className="btn btn-prev">
    //       Previous
    //     </button>
    //     <button onClick={() => handleNextStep()} className="btn btn-next">
    //       Next
    //     </button>
    //   </div>
    // </div>,

    // <div
    //   key={3}
    //   className={
    //     formStepsNum === 3 ? "form-step form-step-active" : "form-step"
    //   }
    // >
    //   {/* Step 2 Form Fields */}
    //   <div className="input-group">
    //     <label htmlFor="pay">Payment Range</label>
    //     <input type={"range"} name="pay" id="pay" min="100000" max="10000000" />
    //   </div>
    //   <div className="input-group">
    //     <div className="package">
    //       <select id="exp">
    //         <option value="exp">Year Of Experience</option>

    //       </select>
    //     </div>
    //   </div>
    //   <div className="input-group">
    //     <input type={"text"} name="age-d" id="age-d" placeholder="Age" />
    //   </div>
    //   <div className="input-group">
    //     <label htmlFor="gender">Gender</label>
    //     <div className="gender-inputs">
    //       <input type="radio" name="gender" id="male" value="male" />
    //       <label htmlFor="male">Male</label>
    //       <input type="radio" name="gender" id="female" value="female" />
    //       <label htmlFor="female">Female</label>
    //     </div>
    //   </div>

    //   <div className="btns-group">
    //     <button onClick={() => handlePrevStep()} className="btn btn-prev">
    //       Previous
    //     </button>
    //     <button onClick={() => handleNextStep()} className="btn btn-next">
    //       Add Gig
    //     </button>
    //   </div>
    // </div>,
  ];

  const progressSteps = ["Personal Information", "Tour Details"];

  const handleNextStep = () => {
    setFormStepsNum((prev) => Math.min(prev + 1, formSteps.length - 1));
  };

  const handlePrevStep = () => {
    setFormStepsNum((prev) => Math.max(prev - 1, 0));
  };

  const updateProgressbar = () => {
    return `${(formStepsNum / (progressSteps.length - 1)) * 100}%`;
  };

  return (
    <main>
      <NavBar />
      <div className="formb">
        <form className="form-con" onSubmit={handleSubmit}>
          <h1 className="text-center">Plan Your Trip</h1>
          <p className="small">
            <small className="text-center">
              <span className="bold">Within few clicks.</span>
            </small>
          </p>
          <div className="progressbar">
            <div
              className="progress"
              style={{ width: updateProgressbar() }}
            ></div>
            {progressSteps.map((step, idx) => (
              <div
                key={idx}
                className={`progress-step ${
                  idx <= formStepsNum ? "progress-step-active" : ""
                }`}
                data-title={step}
              ></div>
            ))}
          </div>
          {formSteps[formStepsNum]}
        </form>
      </div>
      <Footer />
    </main>
  );
}
