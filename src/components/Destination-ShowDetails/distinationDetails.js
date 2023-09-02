import { useEffect, useState } from "react";
import "../Destination-ShowDetails/destination-style.css";
import axios from "axios";
import AddToFav from "../AddToFavModel/AddToFav";
import PolularDestinationCard from "../Destination-popular/populardestinationcard";

const DestinationDetail = () => {
  const [desdata, setData] = useState([]);
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
      });
  }, []);
  console.log(desdata);
  return (
    <div>
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
              <h6> By Smile Organic Farm Cooking School</h6>
            </div>
            <div className="col d-flex justify-content-end">
              {/* <AddToFav /> */}
            </div>
          </div>

          <h4>{desdata.name}</h4>
          <h6>{desdata.city}</h6>
          {/* <h2>$139.00</h2>
          <input type="number" value="1" /> */}

          <h4>Destination details</h4>
          <span>{desdata.description_full}</span>
        </div>
      </section>
      <section id="product1" class="section-p1">
        <h2>Similar experiences</h2>
        <p>Take what you want</p>
        <div class="pro-container">
          {/* <PolularDestinationCard /> */}
        </div>

        <center>
          <button className="btn btn-outline-primary load-more mt-4">
            See more
          </button>
        </center>
      </section>
      <section id="review">
        <div class="wrapper">
          <h3>Lorem ipsum dolor sit amet.</h3>
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
    </div>
  );
};

export default DestinationDetail;
