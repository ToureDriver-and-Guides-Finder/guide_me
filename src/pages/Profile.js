import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ShowTours from "./showTours";
import { Gear, HeartFill } from "react-bootstrap-icons";
import FavPlaces from "../components/Places/FavPlaces";

const Profile = () => {
  const [alldata, setAllData] = useState([]);
  const [content, setContent] = useState(0);

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

  const changeContent = (content) => {
    setContent(content);
  };

  const tourContent = [
    <ShowTours props={alldata} />,
    <>
      <div>content2</div>
    </>,
    <>
      <div>content3</div>
    </>,
    <FavPlaces/>,
  ];

  return (
    <>
      <NavBar />

      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4"
              >
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item active" aria-current="page">
                    User Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <button className="btn btn-link text-black  d-flex align-items-center justify-content-end w-100">
                  Edit Profile{" "}
                  <Gear style={{ color: "black", marginLeft: "5px" }} />
                </button>

                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{alldata.tourist_name}</h5>
                  <p className="text-muted mb-1">{alldata.country}</p>
                  <div className="d-flex justify-content-center mb-2 flex-column align-items-center">
                    <a
                      type="button"
                      className="btn btn-primary m-0 mb-2"
                      href="/login"
                    >
                      Login
                    </a>
                    {/* <button type="button" className="btn btn-outline-primary m-0">
                    More details
                  </button> */}
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{alldata.tourist_name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{alldata.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Country</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{alldata.country}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {alldata.contact_number}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Example, Address</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 bg-light rounded-3 p-3">
              <nav className="mb-4 ">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className={
                      content == 0
                        ? "nav-link active"
                        : "nav-link text-secondary"
                    }
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                    onClick={() => {
                      changeContent(0);
                    }}
                  >
                    My Tour
                  </button>
                  <button
                    className={
                      content == 1
                        ? "nav-link active"
                        : "nav-link text-secondary"
                    }
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                    onClick={() => {
                      changeContent(1);
                    }}
                  >
                    Offers
                  </button>
                  <button
                    className={
                      content == 2
                        ? "nav-link active"
                        : "nav-link text-secondary"
                    }
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                    onClick={() => {
                      changeContent(2);
                    }}
                  >
                    In progress
                  </button>
                  <button
                    className={
                      content == 2
                        ? "nav-link active"
                        : "nav-link text-secondary"
                    }
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                    onClick={() => {
                      changeContent(3);
                    }}
                  >
                    Favourite Place <HeartFill style={{ color: "red" }} />
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  {tourContent[content]}
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Profile;
