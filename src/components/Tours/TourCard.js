import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

const TourCard = (props) => {
  TimeAgo.addDefaultLocale(en);
  const locations = props.props["locations"];
  console.log(locations);
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
            <div className="col-2">Start Date:</div>
            <div className="col-2 text-muted">{props.props["start_date"]}</div>
          </div>
          <div className="row">
            <div className="col-2 font-weight-bold">End Date:</div>
            <div className="col-2 text-muted">{props.props["end_date"]}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">Locations to visit:</div>
          {/* <div className="col-8">{locations.map((name) => ({ name }))}</div> */}
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">
          {/* {timeAgo.format(
            Date.now() -
              Date(props.props["published_time"]).getHours() *
                60 *
                60 *
                1000
          )} */}
        </small>
      </div>
    </div>
  );
};

export default TourCard;
