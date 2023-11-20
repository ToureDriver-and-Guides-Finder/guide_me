import { PersonCircle, PersonFill } from "react-bootstrap-icons";

const SingleChatCard = (props) => {
  console.log(props.props["date"]);
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
                <h5 class="card-title">
                  <b>{props.props["sender"]}</b>
                </h5>
              </div>
              <div className="row">
                <p class="card-text text-secondary">{props.props["msg"]}</p>
              </div>
            </div>
            <div className="col-lg-2">
              <p class="card-text text-secondary">
                {new Date(props.props["date"]).toLocaleDateString()}
                <br></br>
                {new Date(props.props["date"]).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChatCard;
