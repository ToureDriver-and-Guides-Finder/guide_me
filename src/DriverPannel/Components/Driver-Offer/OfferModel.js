import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const OfferModel = (props) => {
  const [offer, setOffer] = useState();
  const [data, setData] = useState([]);
  const [msg, setMessage] = useState("");

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const handleChange = (e) => {
    // e.preventDefault();
    setOffer(e.target.value);
  };
  console.log(props.props);
  //   setData(props.props);
  useEffect(() => {
    setData(props.props);
    //   console.log(props.props);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/sendOffer.php?id=0",
        {
          params: {
            price: offer,
            driver_id: getCookie("user_id"),
            tour_id: props.props["tour_id"],
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        if (data.data == 1) {
          setMessage("Tour added Successfully");
          setTimeout(() => {
            document.getElementById("staticBackdrop").style.display = "none";
            window.location.reload();
          }, 3000);
        } else {
          setMessage("Error occur.Try again later!");
          // setTimeout(() => {
          //   document.getElementById("exampleModalCenter").style.display =
          //     "none";
          // }, 3000);
        }
      });
  };
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      // data-backdrop="static"
      // data-keyboard="false"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Tour Offer
            </h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {data ? (
              <div className="card bg-light mb-3">
                <h5 className="card-header">
                  <b>Tour summery</b>
                </h5>
                <div className="card-body">
                  <div className="row mt-2">
                    <div className="col">
                      <h6 className="text-muted">Estimated Distance</h6>
                    </div>
                    <div className="col">
                      <h6>200 km</h6>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col">
                      <h6 className="text-muted">No.of Passengers</h6>
                    </div>
                    <div className="col">
                      <h6>{data["no_of_passengers"]}</h6>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <h6 className="text-muted">Start Date</h6>
                    </div>
                    <div className="col">
                      <h6>{data["start_date"]}</h6>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <h6 className="text-muted">End Date</h6>
                    </div>
                    <div className="col">
                      <h6>{data["end_date"]}</h6>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <h6 className="text-muted">Estimated budget</h6>
                    </div>
                    <div className="col">
                      <h5 className="text-success">
                        <b>Rs: 250000.00</b>
                      </h5>
                    </div>
                  </div>
                  <div className="row ">
                    <h5 className="font-weight-bold">
                      <b>Places to visit</b>
                    </h5>
                    {data["locations"] ? (
                      <ul className="list-inline text-truncate">
                        {data["locations"].map((location) => (
                          <li
                            className="list-inline-item small bg-dark p-2 rounded text-white"
                            draggable="false"
                          >
                            {location}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div>data loading...</div>
                    )}
                  </div>
                </div>
                <div className="card-footer bg-transparent border-success">
                  <form>
                    <div
                      className="btn-group w-100"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="submit"
                        className="btn btn-success"
                        style={{
                          minWidth: "0px",
                          width: "40%",
                          padding: "8px",
                          marginRight: "0px",
                        }}
                        data-toggle="modal"
                        data-target="#staticBackdrop"
                        onClick={(e) => {
                          handleSubmit(e);
                        }}
                      >
                        Send Offer
                      </button>

                      <input
                        type="text"
                        name="offer"
                        id="offer"
                        placeholder="Enter Offer"
                        onChange={handleChange}
                        value={offer}
                      />
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div>no data</div>
            )}
          </div>
          {msg != "" ? (
            <div className="modal-footer">
              {msg === "Tour added Successfully" ? (
                <div className="alert alert-success alert-dismissible w-100">
                  <a
                    href="#"
                    className="close"
                    data-dismiss="alert"
                    aria-label="close"
                  >
                    &times;
                  </a>
                  <strong>Success!</strong> {msg}
                </div>
              ) : (
                <div className="alert alert-danger alert-dismissible w-100">
                  <a
                    href="#"
                    className="close"
                    data-dismiss="alert"
                    aria-label="close"
                  >
                    &times;
                  </a>
                  <strong>Error!</strong> {msg}
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferModel;
