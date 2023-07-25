import "../Destination-popular/card.css";
import CdImg from "../../images/10.jpg";
const PolularDestinationCard = () => {
    return (
      <div className="card p-card">
        <img className="card-img-top" src={CdImg} alt="Card image cap" />

        <div className="p-text-div">
          <p className="card-text p-text">Witness the countryside Charm</p>
        </div>
        <h5 className="card-title p-title">Yala National Park</h5>
      </div>
    );
}
 
export default PolularDestinationCard;