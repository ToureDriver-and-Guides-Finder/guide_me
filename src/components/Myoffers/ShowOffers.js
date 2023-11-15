import axios from "axios";
import { useEffect, useState } from "react";

const ShowOffers = (props) => {
  const [alloffers, setAllOffers] = useState([]);
  const [msg, setMessage] = useState(false);
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

  const getOffer = () => {
    axios
      .post(
        "http://localhost:80/guide_me/src/server/api/getUserOffer.php?id=0",
        {
          params: {
            // id: props.props,
            userId: getCookie("user_id"),
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        if (data.data == "No data") {
          setMessage(true);
        } else {
          setAllOffers(data.data);
        }
      });
  };

  const OfferCard = (data) => {
    console.log(data.props);
    return (
      <div class="card mt-2">
        <div class="card-body">
          <div className="row">
            <div className="col-lg-3">
              <img
                src={data.props["displayImage"]}
                alt="offerimg"
                style={{ width: "100px" }}
              />
            </div>
            <div className="col-lg-9">{data.props["tour_name"]}</div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getOffer();
  }, []);

  return (
    <>
      <div className="container">{msg ? <div>No Offers Yet</div> : ""}</div>
      <div className="container">
        {alloffers.map((data) => (
          <a href={"/chatRoom?id=" + data["tour_id"]+"&driver_id="+data["driver_id"]}>
            <OfferCard props={data} />
          </a>
        ))}
      </div>
    </>
  );
};

export default ShowOffers;
