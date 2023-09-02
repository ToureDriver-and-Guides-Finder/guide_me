import "../Destination-popular/card.css";
import AddToFav from "../AddToFavModel/AddToFav";
import axios from "axios";
import CdImg from "../../images/10.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const PolularDestinationCard = (props) => {
  // console.log(props.props["desId"]);
  const [modeldata, setModeldata] = useState("");
  const [cookie, setcookiedata] = useState(false);
  const [desid, setDesId] = useState("");

  const navigate = useNavigate();
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  useEffect(() => {
    const ck = getCookie("user_id");
    if (ck) {
      setcookiedata(true);
    } else {
      setcookiedata(false);
    }
  }, []);

  return (
    <a href={"/destination_details?id=" + props.props["desId"]}>
      <div
        className="card p-card"
        key={props.props["desId"]}
        id={props.props["desId"]}
      >
        <img
          className="card-img-top"
          src={props.props["image"]}
          alt="Card image cap"
          loading="lazy"
        />
        <div className="p-text-div">
          <p className="card-text p-text">{props.props["des"]}</p>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <h5 className="card-title p-title">{props.props["name"]}</h5>
          {cookie ? (
            <div>
              <AddToFav props={props.props["desId"]} key={props.props["key"]} />
            </div>
          ) : (
            <button
              className="btn icon-button"
              type="submit"
              onClick={() => {
                navigate("/login");
              }}
            >
              <i class="fs-5 bi bi-suit-heart m-2 "></i>
            </button>
          )}
        </div>
      </div>
    </a>
  );
};

export default PolularDestinationCard;
