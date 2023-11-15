import { Filter, PersonCircle } from "react-bootstrap-icons";
import "../Driver-Home/home.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const DriverHome = () => {
  const [msg, setMessage] = useState(false);
  const [alltours, setAllTours] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/recommendedTour.php?id=0"
      )
      .then((data) => {
        console.log(data.data);
        if (data.data == "No data") {
          setMessage(true);
        } else {
          setAllTours(data.data);
        }
      });
  }, []);

  const FilterContainer = () => {
    return (
      <>
        <center>
          <div
            class="filtercard card mt-4 container"
            style={{ backgroundColor: "#F5F5F5" }}
          >
            <div class="card-body">
              <form>
                <div className="row">
                  <div className="col-lg-3">
                    <div class="form-group text-start">
                      <small for="sdate">Start date</small>
                      <input type="date" class="form-control" id="sdate" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div class="form-group text-start">
                      <small for="fdate">End date</small>
                      <input type="date" class="form-control" id="fdate" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div class="form-group text-start">
                      <small for="exampleInputEmail1">Vehical Type</small>
                      <select class="form-control form-control">
                        <option>Car</option>
                        <option>Van</option>
                        <option>Bus</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="col-lg-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style={{ minWidth: "0px", width: "100%" }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </center>
      </>
    );
  };

  const RecommendedTours = () => {
    return (
      <>
        <div className="container border mt-4 mb-4 p-2">
          <h4 className="mt-4">Recommended Tours</h4>
          <div className="container">
            <div className="row">
              {alltours.map((data) => (
                <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                  <Link to={"tour-details?tid="+data["tour_id"]}>
                  <div class="card mb-3" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top"
                      src={data["displayImage"]}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <div className="row">
                        <div className="col">
                          <div className="row d-flex align-items-center mb-2">
                            <div className="col-1">
                              <PersonCircle
                                style={{ color: "gray" }}
                                className="fs-6"
                              />
                            </div>
                            <div className="col-6 text-truncate">Sasith</div>
                          </div>
                        </div>
                        {/* <div className="col-lg-8">
                          <small className="text-muted">
                            {new Date(
                              data["published_time"]
                            ).toLocaleDateString() +
                              " " +
                              new Date(
                                data["published_time"]
                              ).toLocaleTimeString()}
                          </small>
                        </div> */}
                      </div>
                      <div className="row ">
                        <h5 className="font-weight-bold">
                          <b>Places to visit</b>
                        </h5>
                        <ul class="list-inline text-truncate">
                          {data["locations"].map((location) => (
                            <li class="list-inline-item small bg-info p-2 rounded text-white">
                              {location}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="row mt-3">
                        <div className="col">
                          <div className="small">
                            <b>Start:</b> {data["start_date"]}
                          </div>
                        </div>
                        <div className="col">
                          <div className="small">
                            <b>End:</b> {data["end_date"]}
                          </div>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="small">
                          <b> {data["no_of_passengers"]}</b> Passengers
                        </div>
                      </div>
                      {/* <button className="btn btn-primary">See more</button> */}
                    </div>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <FilterContainer />
      <RecommendedTours />
    </>
  );
};

export default DriverHome;
