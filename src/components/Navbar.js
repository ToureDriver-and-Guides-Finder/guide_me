import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
} from "react-bootstrap";
import Logo from "../images/logo1.png";
import "../components/nav.css";
import { PersonCircle, Search } from "react-bootstrap-icons";
const NavBar = () => {
  return (
    <Navbar bg="transparent" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className="nav" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Destinations</Nav.Link>
          <Nav.Link href="#features">Tour Plan</Nav.Link>
          <Nav.Link href="#pricing">AboutUs</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Form>
            <Form.Group className="d-flex flex-row align-items-center px-2 searchcon" controlId="exampleForm.ControlInput1">
              <Search />
              <Form.Control type="search" placeholder="Search" />
            </Form.Group>
          </Form>
          <Nav.Link href="#features"><PersonCircle className="p-0 person"/></Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
