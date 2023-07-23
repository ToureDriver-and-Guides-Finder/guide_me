import CdImg from "../../images/10.jpg";
import CdImg1 from "../../images/01.jpg";
import CdImg2 from "../../images/10.jpg";
import CommentCard from "./commentcard";

const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100 c-comment-card" alt="First slide">
            <CommentCard />
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 c-comment-card" alt="First slide">
            <CommentCard />
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 c-comment-card" alt="First slide">
            <CommentCard />
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
};

export default Slider;
