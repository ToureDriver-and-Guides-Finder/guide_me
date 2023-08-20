import CdImg from "../../images/10.jpg";
import CdImg1 from "../../images/adventure.jpg";
import CdImg2 from "../../images/art.jpg";
import CdImg3 from "../../images/family.jpg";
import CdImg4 from "../../images/road.jpg";

const DestinationCard = ({props}) => {
  return (
    <div className="card d-card">
      <img
        className="card-img-top"
        src={props[1]}
        alt="Card image cap"
        loading="lazy"
      />
      <div>
        <div className="d-text-div">
          <h5 className="card-title d-title">{props[0]}</h5>

          <a
            href={"/destination-category?id=" + props[0]}
            className="btn btn-outline-light d-btn "
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
