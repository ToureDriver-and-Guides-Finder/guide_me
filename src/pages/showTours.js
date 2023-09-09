import { useState } from "react";
import TourCard from "../components/Tours/TourCard";
import { useEffect } from "react";
import axios from "axios";

const ShowTours = () => {
  console.log()
  const [tourname, setTourName] = useState("");
  const [alltours, setAllTuors] = useState([]);
  const [newtour, setNewTour] = useState();
  const [des_id, setDesID] = useState();
  // const navigate = useNavigate();
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
    axios
      .post(
        "http://localhost:80/guide_me/src/server/api/getActiveTour.php?id=0",
        {
          params: {
            // id: props.props,
            userId: getCookie("user_id"),
          },
        }
      )
      .then((data) => {
        // console.log(data.data);
        setAllTuors(data.data);
      });
  }, [newtour]);
  return (
    <div className="row">
      <div className="col-lg-12">
        <TourCard props={alltours} />
      </div>
    </div>
  );
};

export default ShowTours;
