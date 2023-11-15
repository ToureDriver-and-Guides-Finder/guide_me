import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/src/collapse.js";
import Logo from "../images/logo1.png";
import "../components/nav.css";
import { PersonCircle, Search } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const NavBar = () => {
  const [cookie, setcookiedata] = useState(false);
  const [userdata, setAllData] = useState([]);

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
          console.log(data.data);
          setAllData(data.data);
        });
    } else {
      setcookiedata(false);
    }
  }, []);

  const logout = () => {
    document.cookie = "user_id=;";
    document.cookie = "user_type=;";
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <a className="navbar-brand" href="/">
        <img src={Logo} className="nav" id="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto w-50 justify-content-around">
          <li className="nav-item active ">
            <a className="nav-link text-white" href="d-login">
              Driver
            </a>
          </li>
          <li className="nav-item active ">
            <a className="nav-link text-white" href="destinations">
              Guide
            </a>
          </li>
          <li className="nav-item active ">
            <a className="nav-link text-white" href="destinations">
              Destinations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/tour">
              Tour Plan
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link text-white" href="/aboutus">
              AboutUs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/contact">
              ContactUs
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto search-div">
          <li className="nav-item">
            <div className="d-flex flex-row align-items-center px-2 searchcon">
              <input
                className="form-control mr-sm-2 navform"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </li>
          {cookie ? (
            <div className="dropdown">
              <a
                className="btn btn-link dropdown-toggle w-100 text-white"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <PersonCircle className="p-0 person" />
                {userdata.length != 0 ? (
                  <span className="m-1">
                    {" "}
                    Hello, {userdata.tourist_name.split(" ")[0]} !
                  </span>
                ) : (
                  ""
                )}
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <a className="dropdown-item" href="/profile">
                  My Tours
                </a>
                <a className="dropdown-item" href="/profile">
                  Favorite Destinations
                </a>
                <div class="dropdown-divider"></div>
                <div
                  className="dropdown-item btn btn-danger text-danger"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </div>
              </div>
            </div>
          ) : (
            // <li className="nav-item">
            //   <a
            //     className="nav-link d-flex flex-row align-items-center"
            //     href="/profile"
            //   >
            //     <PersonCircle className="p-0 person" />
            //     {userdata.length!=0?<span className="m-1">
            //       {" "}
            //       Hello, {userdata.tourist_name.split(" ")[0]} !
            //     </span>:""}
            //   </a>
            // </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                <a
                  name="reg_button"
                  id="register_button"
                  class="btn btn-dark"
                  href="/login"
                  role="button"
                >
                  Sign in/register
                </a>
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>

    // <Navbar bg="transparent" data-bs-theme="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img src={Logo} className="nav" />
    //     </Navbar.Brand>
    //     <Nav>
    //       <Nav.Link href="#home">Destinations</Nav.Link>
    //       <Nav.Link href="#features">Tour Plan</Nav.Link>
    //       <Nav.Link href="#pricing">AboutUs</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //     </Nav>
    //     <Nav>
    //       <Form>
    //         <Form.Group className="d-flex flex-row align-items-center px-2 searchcon" controlId="exampleForm.ControlInput1">
    //           <Search />
    //           <Form.Control type="search" placeholder="Search" />
    //         </Form.Group>
    //       </Form>
    //       <Nav.Link href="#features"><PersonCircle className="p-0 person"/></Nav.Link>

    //     </Nav>
    //   </Container>
    // </Navbar>
  );
};

export default NavBar;
