import "../Home-CreateTour/createtour.css";
import BGImage from "../../images/01.jpg";

const CreateTour = () => {
  return (
    <div className="tour-con">
      <div className="left-con">
        <img src={BGImage} className="bgimg-2" />
        <h1 className="text-overlay">
          Your Gateway to<br></br> Personalized Travel:<br></br> Connect, Explore,<br></br> Experience!
        </h1>
      </div>
      <div className="right-con">
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          malesuada dolor et ultrices semper. Cras interdum sed augue et
          ullamcorper. Proin egestas bibendum interdum. In mi urna, tincidunt
          sit amet elementum aliquet, malesuada quis erat. Nulla sit amet erat
          vitae massa mattis posuere. Sed viverra cursus est vel ultrices. Etiam
          fringilla interdum velit quis feugiat.
        </p>
        <button type="button" className="btn btn-primary tour-btn">
          Create Tour Package
        </button>
      </div>
    </div>
  );
};

export default CreateTour;
