import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
import { useEffect, useState } from "react";
import { TrashFill } from "react-bootstrap-icons";

const TourCard = (props) => {
  const [locations, setlocations] = useState([]);

  TimeAgo.addDefaultLocale(en);
  // locations = props.props["locations"];
  // useEffect(() => {
  //   console.log(props.props["tour_name"]);
  //   // setlocations(props.props["locations"]);
  // }, []);
  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");

  console.log(props.props);
  // console.log(new Date(props.props["published_time"]));
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://firebasestorage.googleapis.com/v0/b/guideme-378af.appspot.com/o/Ella.jpg?alt=media&token=a04ed342-a3bf-44e7-9eea-01cf6a9b8c0f"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title p-0">{props.props["tour_name"]}</h5>
        <small className="text-muted">
          {new Date(props.props["published_time"]).toLocaleDateString() +
            " " +
            new Date(props.props["published_time"]).toLocaleTimeString()}
        </small>

        <div className="row">
          <div className="row">
            <div className="col col-lg-2">Start Date:</div>
            <div className="col col-lg-2 text-muted">
              {props.props["start_date"]}
            </div>
          </div>
          <div className="row">
            <div className="col col-lg-2 font-weight-bold">End Date:</div>
            <div className="col col-lg-2 text-muted">
              {props.props["end_date"]}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">Locations to visit:</div>
          {locations.map((data) => (
            <div className="col-8">{data}</div>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger"
              style={{ width: "fit-content", minWidth: 0 }}
            >
              <TrashFill style={{ color: "white" }} className="m-1" />
            </button>
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-outline-secondary">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
