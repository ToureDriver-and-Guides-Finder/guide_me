import { Link } from "react-router-dom";
import "../Home-DriverLogin/joindriver.css";

const JoinDriver = () => {
  return (
    <div className="container mt-5 join-driver mb-4">
      <div className="mb-3">
        <h1 className="main-topic-main">Unleashing the Magic:</h1>
        <h5 className="sub-topic">Crafting Unforgettable Journeys as a </h5>
        <span className="sub-topic bg-info p-1 rounded text-white">
          Tour Professional.
        </span>
      </div>
      <div className="row">
        <div className="col-lg-6 d-flex justify-content-center">
          <div class="card">
            <img
              class="card-img-top p-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_aWjERMx8T4X3wA7_0WXsMokvbMTLt4y0w&usqp=CAU"
              alt="Card image cap"
            />

            <div class="card-body">
              <h5 class="card-title text-center">
                <b>Join with us as Driver</b>
              </h5>
              <p class="card-text">
                "Fuel your passion for adventure as a tour driver, creating
                unforgettable experiences for travelers and turning the road
                into a path of discovery. Join our team, embrace the thrill of
                the journey, and become a driving force behind unforgettable
                memories!"
              </p>
              <button href="#" className="btn btn-info text-white">
                Join Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <div class="card">
            <img
              class="card-img-top p-3"
              src="https://img.freepik.com/free-vector/tour-guide-concept-illustration_114360-1962.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1698883200&semt=ais"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title text-center">
                <b>Join with us as Guide</b>
              </h5>
              <p class="card-text">
                "Embark on a captivating journey as a tour guide, sharing
                fascinating stories and bringing destinations to life. Join our
                team, be the charismatic voice that leads travelers through
                extraordinary experiences, and become an integral part of
                shaping unforgettable journeys!"
              </p>
              <button href="#" className="btn btn-info text-white">
                Join Now
              </button>
            </div>
          </div>
        </div>
        {/* 
        <div className="col-lg-6 d-flex justify-content-center">
          <div class="card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">
                <b>Join with us as Driver</b>
              </h5>

              <p class="card-text">
                "Fuel your passion for adventure as a tour driver, creating
                unforgettable experiences for travelers and turning the road
                into a path of discovery. Join our team, embrace the thrill of
                the journey, and become a driving force behind unforgettable
                memories!"
              </p>

              <button href="#" className="btn btn-info">
                Join Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <div class="card" style={{ width: "100%" }}>
            <div class="card-body">
              <h5 class="card-title">
                <b>Join with us as Guide</b>
              </h5>

              <p class="card-text">
                "Embark on a captivating journey as a tour guide, sharing
                fascinating stories and bringing destinations to life. Join our
                team, be the charismatic voice that leads travelers through
                extraordinary experiences, and become an integral part of
                shaping unforgettable journeys!"
              </p>

              <button href="#" className="btn btn-info">
                Join Now
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default JoinDriver;
