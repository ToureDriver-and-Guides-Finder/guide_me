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
// import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";

export default function Form() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

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
    displayImage: "",
    vehical: "",
    ac: true,
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
    let des = [];
    data.displayImage = e[0]["img"];
    e.forEach((element) => {
      des.push(element["value"]);
    });
    // console.log(des);

    setDestinations(des);
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:80/guide_me/src/server/api/getdestinations.php?id=0",
        {
          params: { function: "all" },
        }
      )
      .then((data) => {
        let desdata = [];
        for (let i = 0; i <= data.data.length - 1; i++) {
          console.log(data.data[i]["name"]);
          let item = {
            value: data.data[i]["name"],
            label: data.data[i]["name"],
            img: data.data[i]["image"],
          };
          desdata.push(item);
        }
        console.log(desdata);
        setdistricts(desdata);
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
            displayImage: "",
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
    // data.displayImage = destinations[0]["img"];
    console.log(data);
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
  const vehicalSelect = (e) => {
    setData({
      ...data,
      ["vehical"]: e.value,
    });
    //  return message;
  };
  const changeAc = (e) => {
    setData({
      ...data,
      ["ac"]: e.target.value,
    });
    //  return message;
  };
  const vehicals = [
    { label: "Car", value: "Car" },
    { label: "Van", value: "Van" },
    { label: "Bus", value: "Bus" },
  ];
  const formSteps = [
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
      <div className="row">
        <CreatableSelect
          options={districts}
          isMulti
          onChange={destinationchange}
        />
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
              min={new Date().toISOString().split("T")[0]}
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
              min={new Date().toISOString().split("T")[0]}
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
      <div className="row mb-4">
        <div className="col-lg-8">
          <label htmlFor="vehical">Prefferd Vehical</label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={vehicals[0]}
            isDisabled={false}
            isClearable={true}
            isSearchable={true}
            name="vehical"
            options={vehicals}
            id="vehical"
            onChange={(e) => vehicalSelect(e)}
          />
        </div>
        <div className="col-lg-4">
          <div className="row">
            <label>Air Conditioned</label>
            <div className="col-6">
              <div className="form-check checkbox-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ac"
                  id="inlineRadio1"
                  value={true}
                  onClick={(e) => changeAc(e)}
                />
                <label className="form-check-label mx-4" for="inlineRadio1">
                  A/C
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-check checkbox-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="ac"
                  id="inlineRadio2"
                  value={false}
                  onClick={(e) => changeAc(e)}
                />
                <label className="form-check-label mx-4" for="inlineRadio2">
                  NON/AC
                </label>
              </div>
            </div>
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
