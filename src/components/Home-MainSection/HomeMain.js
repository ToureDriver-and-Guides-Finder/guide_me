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
          <a className="btn btn-primary" href="/tour">
            Create Tour Package
          </a>
          <a className="btn btn-outline-primary" href="/destination">
            Find Best Places
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
