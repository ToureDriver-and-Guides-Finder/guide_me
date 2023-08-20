import "../Destination-popular/card.css";
import CdImg from "../../images/10.jpg";
const PolularDestinationCard = (props) => {
  console.log(props);
  return (
    <div className="card p-card">
      <img
        className="card-img-top"
        src="https://firebasestorage.googleapis.com/v0/b/guideme-378af.appspot.com/o/anuradhapura.jpg?alt=media&token=3e74dc9d-2cd1-4f82-9f10-a5bef5a80b1f"
        alt="Card image cap"
        loading="lazy"
      />
      <div className="p-text-div">
        <p className="card-text p-text">{props.props["des"]}</p>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <h5 className="card-title p-title">{props.props["name"]}</h5>

        
          <i
            class="fs-5 bi bi-suit-heart m-2 "
            data-toggle="i"
            aria-pressed="false"
            autocomplete="off"
          ></i>
       
      </div>
    </div>
  );
};

export default PolularDestinationCard;
