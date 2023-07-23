import BGImage from "../../images/bg.png";
import "../Home-MainSection/main.css";

const HomeMain = () => {
  return (
    <div className="main-con">
      <img src={BGImage} className="w-100" style={{ height: "100vh" }} />
      <div className="text-div">
        <div>
          <h1 className="main-topic-main">Unlock Extraordinary,</h1>
          <h5 className="sub-topic">Journeys with Exceptional</h5>
          <h5 className="sub-topic">Guides And Drivers.</h5>
        </div>
        <div className="btn-div">
          <button type="button" className="btn btn-primary">
            Create Tour Package
          </button>
          <button type="button" className="btn btn-outline-primary">
            Find Best Places
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
