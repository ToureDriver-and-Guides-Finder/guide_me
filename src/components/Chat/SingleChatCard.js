import { PersonCircle, PersonFill } from "react-bootstrap-icons";

const SingleChatCard = (props) => {
  return (
    <>
      <div class="card mt-4">
        <div class="card-body">
          <div className="row">
            <div className="col-lg-2">
              <h5 class="card-title">
                <PersonCircle style={{ color: "black" }} className="fs-1" />
              </h5>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {" "}
                <h5 class="card-title">Name</h5>
              </div>
              <div className="row">
                <p class="card-text">{props.props["msg"]}</p>
              </div>
            </div>
            <div className="col-lg-2">
              <p class="card-text">
                {new Date(props.props["created_on"]).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChatCard;
