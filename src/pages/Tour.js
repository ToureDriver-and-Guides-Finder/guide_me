import "../styles/style.css";
import "../styles/responsive.css";
import CallIcon from "../images/call-icon.png";
import TimeSeatIcon from "../images/time-seat-icon.png";
import WatchIcon from "../images/watch-icon.png";
import Image4 from "../images/img-4.png";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const TourMain = () => {
  return (
    <div>
      <NavBar />
      <div className="banner_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 padding_0">
              <div
                id="main_slider"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="banner_bg">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">
                          DISCOVER THE <br />
                          BEAUTY OF SRI LANKA
                        </h1>
                        <p className="long_text">
                          Welcome to the beautiful island of Sri Lanka, a
                          tropical paradise located in the Indian Ocean. "GUIDE
                          ME" invites you to embark on an unforgettable journey
                          filled with breathtaking landscapes, rich cultural
                          heritage, and warm hospitality.
                        </p>
                        <div className="btn_main">
                          <div className="about_us">
                            <a href="/gig">PLAN YOUR TRIP</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="banner_bg">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">
                          Travel to Sri Lanka and
                          <br />
                          get a beautiful experience{" "}
                        </h1>
                        <p className="long_text">
                          As you venture to Sri Lanka, "Guide Me" promises to be
                          your virtual guide, offering a wealth of information
                          and tips to make your trip seamless and enjoyable.
                          From pristine beaches to lush landscapes, ancient
                          heritage sites to vibrant festivals, Sri Lanka has it
                          all, and we are here to help you discover its hidden
                          gems.
                        </p>
                        <div className="btn_main">
                          <div className="about_us">
                            <a href="/gig">PLAN YOUR TRIP</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#main_slider"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  href="#main_slider"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 padding_0">
              <div className="banner_img"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital">
                <h1 className="highest_text">GO WHERE YOU FEEL MOST ALIVE.</h1>
                <p className="lorem_text">
                  Welcome to "Guide Me," your ultimate tour guide to Sri
                  Lanka.Our website is dedicated to helping you create
                  extraordinary and personalized travel experiences that
                  resonate with your soul. From the sun-kissed beaches of the
                  southern coast to the misty mountains of the central
                  highlands, and the ancient ruins steeped in history to the
                  vibrant cultural festivals, Sri Lanka has something to offer
                  every traveler's unique passions and interests.
                </p>
                <div className="read_bt">
                  <a href="/gig">PLAN YOUR TRIP</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image_2" href="#">
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/924/260/953/5bd34b6dc48ac-wallpaper-preview.jpg"
                  style={{
                    height: "300px",
                    width: "500px",
                    borderRadius: "15px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="care_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="image_3" href="#">
                <img
                  src="https://c1.wallpaperflare.com/preview/784/803/671/srilanka-ella-landscape-hill.jpg"
                  style={{ borderRadius: "15px" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="care_taital">
                <h1 className="care_text">PLAN YOUR OWN TRIP</h1>
                <p className="ipsum_text">
                  We believe that every traveler is unique, and their journey
                  should reflect their individual tastes and preferences. With
                  our user-friendly tools and comprehensive resources, we put
                  the power in your hands to design a personalized itinerary
                  that suits your interests and schedule. Browse through our
                  curated travel guides, insider tips, and suggested itineraries
                  to get inspired, and then mix and match to create a
                  one-of-a-kind adventure. Whether you crave the thrill of
                  wildlife safaris, the serenity of ancient temples, or the
                  bliss of sandy beaches, "Guide Me" will assist you in crafting
                  the perfect trip.
                </p>
                <div className="read_bt_2">
                  <a href="#">PLAN YOUR TRIP</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="call_box">
                <div className="call_image">
                  <img src={CallIcon} />
                </div>
                <h2 className="emergency_text">
                  Destination Information and Guides
                </h2>
                <p className="dolor_text">
                  "Guide Me" provides comprehensive destination information and
                  travel guides for various locations in Sri Lanka. These guides
                  offer detailed insights into popular tourist spots,
                  lesser-known gems, historical sites, natural wonders, and
                  cultural experiences.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="call_box">
                <div className="call_image">
                  <img src={TimeSeatIcon} />
                </div>
                <h2 className="emergency_text">
                  Personalized Itinerary Planning
                </h2>
                <p className="dolor_text">
                  One of the key tasks of "Guide Me" is to enable travelers to
                  create personalized itineraries. The website offers
                  user-friendly tools and interactive features that allow
                  visitors to customize their trip according to their interests,
                  preferences, and available time.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="call_box">
                <div className="call_image">
                  <img src={WatchIcon} />
                </div>
                <h2 className="emergency_text">Travel Tips and Resources</h2>
                <p className="dolor_text">
                  "Guide Me" serves as a knowledge hub for travel-related tips
                  and resources. It provides practical information on
                  transportation options, local cuisines, safety guidelines,
                  cultural norms, and more. These resources help travelers
                  navigate Sri Lanka with enjoyable trip.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="doctor_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 padding_top0">
              <h1 className="highest_text">
                CHOOSE YOUR OWN
                <br />
                DRIVER & GUIDE
              </h1>
              <p className="lorem_text">
                We understand that the connection between a traveler and their
                guide can significantly impact the journey. With our platform,
                you have the freedom to browse through a curated list of
                experienced and knowledgeable drivers and guides in Sri Lanka.
                Learn about their backgrounds, specialties, and languages
                spoken, and select the perfect match for your trip.
              </p>
              <div className="read_main">
                <div className="read_bt">
                  <a href="#">PLAN YOUR TRIP</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image_4">
                <img src={Image4} style={{ borderRadius: "15px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TourMain;
