import "../Home-CreateTour/createtour.css";
import BGImage from "../../images/01.jpg";

const CreateTour = () => {
  return (
    <div className="tour-con">
      <div className="left-con">
        <img src={BGImage} className="bgimg-2" />
        <h1 className="text-overlay">
          <b>
            Your Gateway to<br></br> Personalized Travel:<br></br> Connect,
            Explore,<br></br> Experience!
          </b>
        </h1>
      </div>
      <div className="right-con">
        <p className="para">
          Guide Me is a tour guiding website that serves as your personalized
          travel gateway. It facilitates connections with local experts, offers
          curated exploration options, and ensures travelers have memorable
          experiences tailored to their interests and preferences. With Guide
          Me, you can connect, explore, and experience your chosen destination
          in a uniquely customized way.
        </p>
        <a href="/tour" className="btn btn-primary tour-btn">
          Create Tour Package
        </a>
      </div>
    </div>
  );
};

export default CreateTour;
