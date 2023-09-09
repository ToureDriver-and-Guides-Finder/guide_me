import { EnvelopeAt, EnvelopeAtFill, Facebook, Instagram, PhoneFill, Twitter, Whatsapp } from "react-bootstrap-icons";
import "../components/footer.css";
import Logo from "../images/logo1.png";
const Footer = () => {
  return (
    <footer class="w-100 py-4 flex-shrink-0">
      <div class="container py-4">
        <div class="row gy-4 gx-5">
          <div class="col-lg-4 col-md-6">
            <img src={Logo} alt="footer-logo" id="logo"/>
            <p class="small text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p class="small text-white mb-0">
              &copy; Copyrights. All rights reserved.{" "}
              
            </p>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class="text-white mb-3">Follow us on</h5>
            <ul class="list-unstyled text-muted d-flex flex-direction-row w-100 justify-content-evenly">
              <li>
                <a href="#">
                  <Whatsapp />
                </a>
              </li>
              <li>
                <a href="#"><Instagram/></a>
              </li>
              <li>
                <a href="#"><Facebook/></a>
              </li>
              <li>
                <a href="#"><Twitter/></a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6">
            
            <ul class="list-unstyled text-muted">
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
              <li>
                <a href="#">TERMS AND CONDITIONS</a>
              </li>
              <li>
                <a href="#">PRIVACY POLICY</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <h5 class="text-white mb-3">Contact Us</h5>
            <p class="small text-muted d-flex flex-row align-items-center">
              <EnvelopeAtFill/><span style={{color:'white',marginLeft:"5px"}}> guideme@gmail.com</span>
            </p>
            <p class="small text-muted d-flex flex-row align-items-center">
              <PhoneFill/><span style={{color:'white',marginLeft:"5px"}}> 0712402274</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
