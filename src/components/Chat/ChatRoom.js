import { useState } from "react";
import DriverNavBar from "../../DriverPannel/Components/DriverNav";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatRoom = () => {
  const [data, setData] = useState([]);
  const [msg, setMessage] = useState("");
  const [offer, setOffer] = useState("");
  const [message, setSenderMgs] = useState("");
  const [Allmessage, setAllMgs] = useState();
  const [currentOffer, setCurrentOffer] = useState("");

  const notify = (msg, type) => {
    if (type == "err") {
      toast.error(msg);
    } else {
      toast.success(msg);
    }
  };

  const SentMessage = (props) => {
    if (props.msg["recerver"] === getCookie("user_id")) {
      return (
        <div className="row w-100 d-flex justify-content-start mt-1">
          <div className="bg-secondary rounded text-white w-auto px-5 py-1">
            <div className="row d-flex justify-content-start">
              {props.msg["msg"]}
              <span
                style={{
                  fontSize: ".7em",
                  color: "#dbdbdb",
                  textAlign: "right",
                }}
              >
                {new Date(props.msg["created_on"]).toLocaleTimeString()}<br></br>
                {new Date(props.msg["created_on"]).toLocaleDateString()}<br></br>
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row w-100 d-flex justify-content-end mt-1">
          <div className="bg-success rounded text-white w-auto px-4 py-1">
            <div className="row d-flex justify-content-start">
              {props.msg["msg"]}
              <span
                style={{
                  fontSize: ".7em",
                  color: "#dbdbdb",
                  textAlign: "right",
                }}
              >
                {new Date(props.msg["created_on"]).toLocaleTimeString()}<br></br>
                {new Date(props.msg["created_on"]).toLocaleDateString()}
                <br></br>
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  const handleSenderMsg = (e) => {
    setSenderMgs(e.target.value);
  };

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
  //   console.log(props.props);
  //   setData(props.props);
  useEffect(() => {
    let urlstring = window.location.href;
    var url = new URL(urlstring);
    var id = url.searchParams.get("id");
    const userType = getCookie("user_type");
    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/gettoursDetails.php?id=0",
        {
          params: { id: id },
        }
      )
      .then((data) => {
        // console.log(data.data);
        setData(data.data);
        return data.data;
      })
      .then((msg) => {
        console.log(msg);
        getMsg(id, msg["email"]);
        getOffer(msg["tour_id"], getCookie("user_id"));
      });
  }, []);

  const handleSubmit = (e, fun) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/sendOffer.php?id=0",
        {
          params: {
            price: offer,
            driver_id: getCookie("user_id"),
            tour_id: data["tour_id"],
            func: fun,
          },
        }
      )
      .then((dt) => {
        // console.log(dt.data);
        if (dt.data == 0) {
          console.log("error update offer");
          notify("Error! Offer Did'nt Send", "err");
        } else {
          notify("New Offer Send successfuly", "success");
          getOffer(data["tour_id"], getCookie("user_id"));
          setOffer("");
        }

        // if (data.data == 1) {
        //   setMessage("Tour added Successfully");
        //   setTimeout(() => {
        //     document.getElementById("staticBackdrop").style.display = "none";
        //     window.location.reload();
        //   }, 3000);
        // } else {
        //   setMessage("Error occur.Try again later!");
        //   // setTimeout(() => {
        //   //   document.getElementById("exampleModalCenter").style.display =
        //   //     "none";
        //   // }, 3000);
        // }
      });
  };

  const getMsg = (tourid, res) => {
    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/getMsg.php?id=0",
        {
          params: {
            sender: getCookie("user_id"),
            tour_id: tourid,
            receiver: res,
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        setAllMgs(data.data);
        // if (data.data == 1) {
        //   setMessage("Tour added Successfully");
        //   setTimeout(() => {
        //     document.getElementById("staticBackdrop").style.display = "none";
        //     window.location.reload();
        //   }, 3000);
        // } else {
        //   setMessage("Error occur.Try again later!");
        //   // setTimeout(() => {
        //   //   document.getElementById("exampleModalCenter").style.display =
        //   //     "none";
        //   // }, 3000);
        // }
      });
  };
  const getOffer = (tourid, driverId) => {
    console.log(driverId);
    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/getOffer.php?id=0",
        {
          params: {
            tour_id: tourid,
            driver_id: driverId,
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        setCurrentOffer(data.data);
        // if (data.data == 1) {
        //   setMessage("Tour added Successfully");
        //   setTimeout(() => {
        //     document.getElementById("staticBackdrop").style.display = "none";
        //     window.location.reload();
        //   }, 3000);
        // } else {
        //   setMessage("Error occur.Try again later!");
        //   // setTimeout(() => {
        //   //   document.getElementById("exampleModalCenter").style.display =
        //   //     "none";
        //   // }, 3000);
        // }
      });
  };
  // console.log(Allmessage);

  const handleSend = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/sendMsg.php?id=0",
        {
          params: {
            message: message,
            sender: getCookie("user_id"),
            tour_id: data["tour_id"],
            receiver: data["email"],
          },
        }
      )
      .then((dt) => {
        console.log(dt.data);
        setAllMgs(getMsg(data["tour_id"], data["email"]));
        setSenderMgs("");
        // if (data.data == 1) {
        //   setMessage("Tour added Successfully");
        //   setTimeout(() => {
        //     document.getElementById("staticBackdrop").style.display = "none";
        //     window.location.reload();
        //   }, 3000);
        // } else {
        //   setMessage("Error occur.Try again later!");
        //   // setTimeout(() => {
        //   //   document.getElementById("exampleModalCenter").style.display =
        //   //     "none";
        //   // }, 3000);
        // }
      });
  };

  return (
    <>
      <DriverNavBar />
      <ToastContainer />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-4 ">
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
                <div className="row mb-2">
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
                {currentOffer != "" ? (
                  <div>
                    <h5 className="font-weight-bold">
                      <b>Current Offer: </b>

                      <b className="text-secondary">
                        Rs:{currentOffer[0]["price"]}
                      </b>
                    </h5>
                  </div>
                ) : (
                  <div>No Offer Send Yet</div>
                )}
              </div>
              <div className="card-footer bg-transparent border-success">
                {currentOffer != "" &&
                currentOffer[0]["offer_state"] !== "Confirmed" ? (
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
                          {
                            if (currentOffer == "") {
                              handleSubmit(e, "new");
                            } else {
                              handleSubmit(e, "update");
                            }
                          }
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
                ) : (
                  <div className="text-success text-center">Confirmed Tour</div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-8 border border-right-0">
            <div
              className="container mt-2 d-flex flex-column justify-content-end"
              style={{ height: "80vh" }}
            >
              <div className="container overflow-auto">
                {Allmessage ? (
                  Allmessage.map((data) => <SentMessage msg={data} />)
                ) : (
                  <div>no data</div>
                )}
              </div>

              {/* <ReMessage />
              <SentMessage />
              <ReMessage />
              <SentMessage />
              <ReMessage />
              <ReMessage /> */}

              <div
                className="container mt-4 mb-2 rounded p-3"
                style={{ backgroundColor: "#4a6382" }}
              >
                <form onSubmit={handleSend}>
                  <div className="row d-flex align-items-center">
                    <div className="col-lg-10">
                      <input
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Type here..."
                        onChange={handleSenderMsg}
                        value={message}
                      />
                    </div>
                    <div className="col-lg-2">
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          minWidth: "0px",
                          width: "100%",
                          padding: "8px",
                          marginRight: "0px",
                          backgroundColor: "#0f3057",
                          color: "white",
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
