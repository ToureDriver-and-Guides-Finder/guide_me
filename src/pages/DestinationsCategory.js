import CdImg1 from "../images/adventure.jpg";
import CdImg2 from "../images/art.jpg";
import CdImg3 from "../images/family.jpg";
import CdImg4 from "../images/road.jpg";
const DestinationsCategory = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 h-25" src={CdImg1} alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5></h5>
              <p></p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 h-25" src={CdImg2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 h-25" src={CdImg3} alt="Third slide" />
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
    </>
  );
};

export default DestinationsCategory;
