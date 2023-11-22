import PolularDestinationCard from "../components/Destination-popular/populardestinationcard";
import "../components/Destination-popular/card.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Destinations = () => {
    const [des_data, setData] = useState([]);
    const navigate = useNavigate();
  
  
    useEffect(() => {
      axios
        .get(
          "http://localhost:80/guide_me/src/server/api/getdestinations.php?id=0",
          {
            params: { function: "all" },
          }
        )
        .then((data) => {
          console.log(data.data);
          setData(data.data);
        });
    }, []);
  
    console.log(des_data);
    return (
        <div>
      <NavBar />
      <div className="row justify-content-center g-5 p-card-row">
          {des_data.length != 0 ? (
            des_data.map((data, key) => (
              <div className="col-3">
                <PolularDestinationCard
                  props={{
                    name: data["name"],
                    des: data["description"],
                    desId: data["destination_id"],
                    image: data["image"],
                    key: key,
                  }}
                  key={key}
                />
              </div>
            ))
          ) : (
            <>No data found</>
          )}
        </div>
        <Footer />
    </div>
  );
};

export default Destinations;