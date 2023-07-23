import CdImg from "../../images/10.jpg";

const DestinationCard = () => {
  return (
    <div className="card d-card">
      <img className="card-img-top" src={CdImg} alt="Card image cap" />
      <div>
        <div className="d-text-div">
          <h5 className="card-title d-title">Adventure</h5>
          <p className="card-text d-text">
            <span>30</span> Destinations
          </p>

          <a href="#" className="btn btn-outline-light d-btn ">
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
