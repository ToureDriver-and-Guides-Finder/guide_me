import { Link } from "react-router-dom";
import "../Home-DriverLogin/joindriver.css";

const JoinDriver = () => {
  return (
    <div className="container mt-5 join-driver">
      <div className="row">
        <div className="col-lg-4 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Join with us as Driver</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/destinations">go</Link>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Join with us as Guide</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                link2
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Join with us as Guide</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                link2
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinDriver;
