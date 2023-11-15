import { useLocation } from "react-router-dom";
import DriverNavBar from "../Components/DriverNav";
import { useEffect, useState } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  Heart,
  HeartFill,
  HeartPulseFill,
  Phone,
  Send,
} from "react-bootstrap-icons";
import LocationPin from "../Components/Driver-Map/LocationPin";
import { preventDefault } from "@fullcalendar/core/internal";
import OfferModel from "../Components/Driver-Offer/OfferModel";

const TourDetails = () => {
  const [data, setData] = useState();
  const [offer, setOffer] = useState();
  useEffect(() => {
    let urlstring = window.location.href;
    var url = new URL(urlstring);
    var id = url.searchParams.get("tid");
    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/gettoursDetails.php?id=0",
        {
          params: { id: id },
        }
      )
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);

  const handleChange = (e) => {
    // e.preventDefault();
    setOffer(e.target.value);
  };

  // const OfferModel = () => {
  //   return (
  //     <div
  //       className="modal fade"
  //       id="staticBackdrop"
  //       // data-backdrop="static"
  //       // data-keyboard="false"
  //       tabIndex="-1"
  //       role="dialog"
  //       aria-labelledby="staticBackdropLabel"
  //       aria-hidden="true"
  //     >
  //       <div className="modal-dialog modal-dialog-centered" role="document">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <h5 className="modal-title" id="staticBackdropLabel">
  //               Tour Offer
  //             </h5>
  //             <button
  //               type="button"
  //               className="btn-close"
  //               data-dismiss="modal"
  //               aria-label="Close"
  //             ></button>
  //           </div>
  //           <div className="modal-body">
  //             <form>
  //               {data ? (
  //                 <div className="card bg-light mb-3">
  //                   <h5 className="card-header">
  //                     <b>Tour summery</b>
  //                   </h5>
  //                   <div className="card-body">
  //                     <div className="row mt-2">
  //                       <div className="col">
  //                         <h6 className="text-muted">Estimated Distance</h6>
  //                       </div>
  //                       <div className="col">
  //                         <h6>200 km</h6>
  //                       </div>
  //                     </div>

  //                     <div className="row mt-2">
  //                       <div className="col">
  //                         <h6 className="text-muted">No.of Passengers</h6>
  //                       </div>
  //                       <div className="col">
  //                         <h6>{data["no_of_passengers"]}</h6>
  //                       </div>
  //                     </div>
  //                     <div className="row mt-2">
  //                       <div className="col">
  //                         <h6 className="text-muted">Start Date</h6>
  //                       </div>
  //                       <div className="col">
  //                         <h6>{data["start_date"]}</h6>
  //                       </div>
  //                     </div>
  //                     <div className="row mt-2">
  //                       <div className="col">
  //                         <h6 className="text-muted">End Date</h6>
  //                       </div>
  //                       <div className="col">
  //                         <h6>{data["end_date"]}</h6>
  //                       </div>
  //                     </div>
  //                     <div className="row mt-2">
  //                       <div className="col">
  //                         <h6 className="text-muted">Estimated budget</h6>
  //                       </div>
  //                       <div className="col">
  //                         <h5 className="text-success">
  //                           <b>Rs: 250000.00</b>
  //                         </h5>
  //                       </div>
  //                     </div>
  //                     <div className="row ">
  //                       <h5 className="font-weight-bold">
  //                         <b>Places to visit</b>
  //                       </h5>
  //                       <ul className="list-inline text-truncate">
  //                         {data["locations"].map((location) => (
  //                           <li
  //                             className="list-inline-item small bg-dark p-2 rounded text-white"
  //                             draggable="false"
  //                           >
  //                             {location}
  //                           </li>
  //                         ))}
  //                       </ul>
  //                     </div>
  //                   </div>
  //                   <div className="card-footer bg-transparent border-success">
  //                     <div
  //                       className="btn-group w-100"
  //                       role="group"
  //                       aria-label="Basic example"
  //                     >
  //                       <button
  //                         type="button"
  //                         className="btn btn-success"
  //                         style={{
  //                           minWidth: "0px",
  //                           width: "40%",
  //                           padding: "8px",
  //                           marginRight: "0px",
  //                         }}
  //                         data-toggle="modal"
  //                         data-target="#staticBackdrop"
  //                       >
  //                         Send Offer
  //                       </button>

  //                       <input
  //                         type="text"
  //                         name="offer"
  //                         id="offer"
  //                         placeholder="Enter Offer"
  //                         onChange={handleChange}
  //                         value={offer}
  //                       />
  //                     </div>
  //                   </div>
  //                 </div>
  //               ) : (
  //                 <div>no data</div>
  //               )}
  //             </form>
  //           </div>
  //           {/* <div className="modal-footer">
  //             <button
  //               type="button"
  //               class="btn btn-secondary"
  //               data-dismiss="modal"
  //             >
  //               Close
  //             </button>

  //           </div> */}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      <DriverNavBar />
      <div className="container mt-5">
        <div className="row">
          {data ? (
            <>
              <div className="col-lg-8">
                <div className="row">
                  <img src={data["displayImage"]} alt="img" />
                  <h3>
                    <b>{data["tour_name"]}</b>
                  </h3>
                  <div className="row ">
                    <h5 className="font-weight-bold">
                      <b>Places to visit</b>
                    </h5>
                    <ul class="list-inline text-truncate">
                      {data["locations"].map((location) => (
                        <li
                          class="list-inline-item small bg-info p-2 rounded text-white"
                          draggable="false"
                        >
                          {location}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <LocationPin props={data["locations"]} />
              </div>

              <div className="col-lg-4">
                <div class="card bg-light mb-3">
                  <h5 class="card-header">
                    <b>Tour summery</b>
                  </h5>
                  <div class="card-body">
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
                  </div>
                  <div className="card-footer bg-transparent border-success">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-success"
                        style={{
                          minWidth: "0px",
                          width: "auto",
                          padding: "8px",
                          marginRight: "0px",
                        }}
                        data-toggle="modal"
                        data-target="#staticBackdrop"
                      >
                        Send Offer
                      </button>
                      <a
                        href={"d-chatRoom?id=" + data["tour_id"]}
                        type="button"
                        className="btn btn-secondary"
                        style={{
                          minWidth: "0px",
                          width: "auto",
                          padding: "8px",
                          marginRight: "0px",
                        }}
                      >
                        Contact
                        <Send style={{ color: "white", marginLeft: "4px" }} />
                      </a>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      style={{
                        minWidth: "0px",
                        width: "auto",
                        padding: "8px",
                        marginRight: "0px",
                      }}
                    >
                      <HeartFill style={{ color: "red" }} />
                    </button>
                  </div>
                </div>
                <h4>Current schedules</h4>
                <div className="container bg-dark p-3">
                  <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                  />
                </div>
              </div>
              <OfferModel props={data} />
            </>
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>

      {/* {state} */}
    </>
  );
};

export default TourDetails;
