import "bootstrap/dist/css/bootstrap.css";

import Logo from "../images/logo1.png";
import "../components/nav.css";
import { PersonCircle, Search } from "react-bootstrap-icons";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <a className="navbar-brand" href="/">
        <img src={Logo} className="nav" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto w-50 justify-content-around">
          <li className="nav-item active ">
            <a className="nav-link text-white" href="destinations">
              Destinations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Tour Plan
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link text-white" href="#">
              AboutUs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              AboutUs
            </a>
          </li>
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <div className="d-flex flex-row align-items-center px-2 searchcon">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <PersonCircle className="p-0 person" />
            </a>
          </li>
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
