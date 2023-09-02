import DestinationCard from "./destinationcard";
import "../Home-Destination/destination.css";
import CdImg1 from "../../images/adventure.jpg";
import CdImg2 from "../../images/art.jpg";
import CdImg3 from "../../images/family.jpg";
import CdImg4 from "../../images/road.jpg";

const DestinationCategory = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-5 d-title-row">
        <div className="col-5">
          <h1 className="main-topic">BROWSE DESTINATIONS BY CATEGORY</h1>
        </div>
        <div className="col-5">
          <p className="para">
            Discover your ideal travel destination effortlessly with 'Browse
            Destinations by Category' on Guide Me. Our user-friendly feature
            categorizes destinations based on your interests, allowing you to
            explore and choose the perfect spot for your next adventure, whether
            you're into culture, adventure, nature, or relaxation. Start your
            journey with ease and excitement, guided by your passions.
          </p>
        </div>
      </div>
      <div className="row justify-content-center g-5 d-card-row">
        <div className="col-5">
          <DestinationCard props={["ADVENTURE", CdImg1]} />
        </div>
        <div className="col-5">
          <DestinationCard props={["ART & CULTURE", CdImg2]} />
        </div>
        <div className="col-5 ">
          <DestinationCard props={["FAMILY", CdImg3]} />
        </div>
        <div className="col-5 ">
          <DestinationCard props={["ROAD TRIP", CdImg4]} />
        </div>
      </div>
    </div>
  );
};

export default DestinationCategory;
