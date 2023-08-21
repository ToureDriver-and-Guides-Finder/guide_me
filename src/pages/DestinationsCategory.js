import { useEffect, useState } from "react";
import CdImg1 from "../images/adventure.jpg";
import CdImg2 from "../images/art.jpg";
import CdImg3 from "../images/family.jpg";
import CdImg4 from "../images/road.jpg";
import "../styles/all_destinations.css";
import axios from "axios";

const DestinationsCategory = () => {
  const [des_data, setData] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    let urlstring = window.location.href;
    var url = new URL(urlstring);
    var id = url.searchParams.get("DesId");
    setCategory(id);
    if (id == "ART ") {
      id = "ART & CULTURE";
      setCategory(id);
    }
    if (id == "ROAD ") {
      id = "ROAD TRIP";
      setCategory(id);
    }

    axios
      .post(
        "http://localhost:80/guide_me/src/server/api/getDestinationCategory.php?id=0",
        {
          params: { id: id },
        }
      )
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);
  console.log(des_data);
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 dc-img" src={CdImg1} alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{category}</h5>
              <h2 classNmae="font-weight-bold">
                Best of the Best Things to Do
              </h2>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 dc-img" src={CdImg2} alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{category}</h5>
              <h2 classNmae="font-weight-bold">
                Best of the Best Things to Do
              </h2>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 dc-img" src={CdImg3} alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{category}</h5>
              <h2 classNmae="font-weight-bold">
                Best of the Best Things to Do
              </h2>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="container mt-4 d-flex flex-column align-items-center">
        {des_data.map((data) => (
          <div class="card mt-3 dc-card">
            <img
              src={CdImg1}
              class="card-img-top d-felx flex-grow-1"
              alt="..."
            />
            <div class="card-body d-felx flex-grow-2">
              <div class="position-relative">
                <h5 class="card-title">{data["name"]}</h5>
                <button className="btn icon-button position-absolute top-0 end-0" type="submit">
                  <i class="fs-5 bi bi-suit-heart m-2 "></i>
                </button>
              </div>
              <p class="card-text">{data["description"]}</p>
              <p class="card-text">{data["city"]}</p>
              {/* <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DestinationsCategory;
