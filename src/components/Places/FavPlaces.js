import { useEffect, useState } from "react";
import PolularDestinationCard from "../Destination-popular/populardestinationcard";
import axios from "axios";

const FavPlaces = () => {
  const [des_data, setData] = useState([]);
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
      .get("http://localhost:80/guide_me/src/server/api/getFavDes.php?id=0", {
        params: { id: getCookie("user_id") },
      })
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);
  return (
    <div className="row">
      {des_data.length != 0 ? (
        des_data.map((data, key) => (
          <div className="col col-lg-4 mb-2" key={key}>
            <PolularDestinationCard
              props={{
                name: data["name"],
                des: data["description"],
                desId: data["destination_id"],
                image: data["image"],
                key: {key},
              }}
              key={key}
            />
          </div>
        ))
      ) : (
        <>No data found</>
      )}
    </div>
  );
};

export default FavPlaces;
