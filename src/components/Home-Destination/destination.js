import DestinationCard from "./destinationcard";
import "../Home-Destination/destination.css";

const DestinationCategory = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-5 d-title-row">
        <div className="col-5">
          <h1 className="main-topic">BROWSE DESTINATIONS BY CATEGORY</h1>
        </div>
        <div className="col-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex
          </p>
        </div>
      </div>
      <div className="row justify-content-center g-5 d-card-row">
        <div className="col-5">
          <DestinationCard />
        </div>
        <div className="col-5">
          <DestinationCard />
        </div>
        <div className="col-5 ">
          <DestinationCard />
        </div>
        <div className="col-5 ">
          <DestinationCard />
        </div>
      </div>

     
    </div>
  );
};

export default DestinationCategory;
