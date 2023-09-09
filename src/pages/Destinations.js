import PolularDestinationCard from "../components/Destination-popular/populardestinationcard";
import DestinationCategory from "../components/Home-Destination/destination";
import "../components/Destination-popular/card.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Destinations = () => {
  const [des_data, setData] = useState([]);


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
      <div className="container mt-4">
        <h1 class="main-topic-main">Explore and Experience</h1>
        <h4 class="sub-topic">
          Search popular destinations for your journey..
        </h4>
      </div>
      <div className="container mt-5">
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
        <center>
          <button className="btn btn-outline-primary load-more mt-4">
            See more
          </button>
        </center>
      </div>
      {/* <div className="divide"></div> */}

      <DestinationCategory />
      <Footer />
    </div>
  );
};

export default Destinations;
