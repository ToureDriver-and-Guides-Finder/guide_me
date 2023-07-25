import PolularDestinationCard from "../components/Destination-popular/populardestinationcard";
import DestinationCategory from "../components/Home-Destination/destination";
import "../components/Destination-popular/card.css";

const Destinations = () => {
  return (
    <div>
      <div className="container mt-4">
        <h1 class="main-topic-main" style={{ fontSize: "3vw",fontWeight:"400" }}>
          Explore and Experience
        </h1>
        <h4 class="sub-topic" style={{ fontSize: "2vw" }}>
          Search popular destinations for your journey..
        </h4>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center g-5 p-card-row">
          <div className="col-3">
            <PolularDestinationCard />
          </div>
          <div className="col-3">
            <PolularDestinationCard />
          </div>
          <div className="col-3 ">
            <PolularDestinationCard />
          </div>
          <div className="col-3 ">
            <PolularDestinationCard />
          </div>
          <div className="col-3">
            <PolularDestinationCard />
          </div>
          <div className="col-3">
            <PolularDestinationCard />
          </div>
          <div className="col-3 ">
            <PolularDestinationCard />
          </div>
          <div className="col-3 ">
            <PolularDestinationCard />
          </div>

          <button className="btn btn-outline-primary load-more">
            See more
          </button>
        </div>
      </div>
      {/* <div className="divide"></div> */}
    
      <DestinationCategory />
    </div>
  );
};

export default Destinations;
