import { useEffect, useState } from "react";
import "../Destination-ShowDetails/destination-style.css";
import axios from "axios";
import AddToFav from "../AddToFavModel/AddToFav";
import PolularDestinationCard from "../Destination-popular/populardestinationcard";
import NavBar from "../Navbar";
import Footer from "../Footer";

const DestinationDetail = () => {
  const [desdata, setData] = useState([]);
  const [similardesdata, setSimilarData] = useState([]);
  useEffect(() => {
    let urlstring = window.location.href;
    var url = new URL(urlstring);
    var id = url.searchParams.get("id");

    axios
      .post(
        "http://localhost:80/guide_me/src/server/api/showdestinationdetails.php?id=" +
          id,
        {
          params: { desid: id },
        }
      )
      .then((data) => {
        console.log(data.data);
        setData(data.data);
        axios
          .post(
            "http://localhost:80/guide_me/src/server/api/getDestinationCategory.php?id=0",
            {
              params: { id: data.data.category },
            }
          )
          .then((data) => {
            console.log(data.data);
            setSimilarData(data.data);
          });
      });
  }, []);
  console.log(desdata);
  return (
    <div>
      <NavBar/>
      <section id="prodetails" class="section-p1">
        <div class="single-pro-image">
          <img
            src={desdata.image}
            width="100%"
            id="MainImage"
            alt=""
            className="des-img"
          />
        </div>
        <div class="single-pro-details">
          <div className="row ">
            <div className="col">
              <h6> {desdata.description}</h6>
            </div>
            <div className="col d-flex justify-content-end">
              {/* <AddToFav /> */}
            </div>
          </div>

          <h2 className="fw-bold">{desdata.name}</h2>
          <h5 className="font-weight-light">{desdata.city}</h5>
          {/* <h2>$139.00</h2>
          <input type="number" value="1" /> */}

          <h5 className="mt-4">Destination details</h5>
          <span>{desdata.description_full}</span>
        </div>
      </section>
      <section id="product1" class="section-p1">
        <h2>Similar experiences</h2>
        <p>Take what you want</p>
        <div class="pro-container">
          <div className="container mt-5">
            <div className="row justify-content-center g-5 p-card-row">
              {similardesdata.length != 0 ? (
                similardesdata.map((data, key) => (
                  <div className="col-sm col-lg-4">
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
        </div>

        
      </section>
      <section id="review">
        <div class="wrapper">
          <h3>Write a Review</h3>
          <form action="#">
            <div class="rating">
              <input type="number" name="rating" hidden />
              {/* <i class="fa-regular fa-star" style="--i: 0;"></i>
              <i class="fa-regular fa-star" style="--i: 1;"></i>
              <i class="fa-regular fa-star" style="--i: 2;"></i>
              <i class="fa-regular fa-star" style="--i: 3;"></i>
              <i class="fa-regular fa-star" style="--i: 4;"></i> */}
            </div>
            <textarea
              name="opinion"
              cols="30"
              rows="5"
              placeholder="Your opinion..."
            ></textarea>
            <div class="btn-group">
              <button type="submit" class="btn submit">
                Submit
              </button>
              <button class="btn cancel">Cancel</button>
            </div>
          </form>
        </div>
      </section>

      {/* <script>
        const allStar = document.querySelectorAll('#review .rating .star')
const ratingValue = document.querySelector('#review .rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('fa-solid fa-star', 'fa-solid fa-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('fa-solid fa-star', 'fa-solid fa-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})
    </script> */}
    <Footer/>
    </div>
  );
};

export default DestinationDetail;
