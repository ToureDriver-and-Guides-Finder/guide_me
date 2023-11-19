import NavBar from "../Navbar";
import { useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  DistanceMatrixService,
} from "@react-google-maps/api";
import axios from "axios";
import Footer from "../Footer";
import { CreditCard, Paypal } from "react-bootstrap-icons";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ClipLoader } from "react-spinners";

const ConfirmTour = () => {
  const [markers, setMarker] = useState();
  const [data, setData] = useState([]);
  const [paymentstatus, setStatus] = useState(0);
  const [paymentmethod, setPaymentMethod] = useState("card");
  const [offer, setOffer] = useState("");
  const [message, setSenderMgs] = useState("");
  const [Allmessage, setAllMgs] = useState();
  const [currentOffer, setCurrentOffer] = useState("");
  const [driver_id, setDriverId] = useState("");
  const [pickupaddress, setPickUpAddress] = useState("");

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const getOffer = (tourid, driver_id) => {
    // console.log(driverId);
    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/getOffer.php?id=0",
        {
          params: {
            tour_id: tourid,
            driver_id: driver_id,
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        setCurrentOffer(data.data);
      });
  };

  useEffect(() => {
    let urlstring = window.location.href;
    var url = new URL(urlstring);
    var id = url.searchParams.get("id");
    var driver_id = url.searchParams.get("driver_id");
    setDriverId(driver_id);
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

        getOffer(msg["tour_id"], driver_id);
      });
  }, []);

  const onMapClick = (e) => {
    setMarker({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100%",
    height: "50vh",
  };
  const [locationdata, setLocationPin] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA3pAqddClbAT-GzSbGaFF6vJgeq3iu6-k",
    libraries,
  });

  const center = {
    lat: 5.95685127628335, // default latitude
    lng: 80.46375649074139, // default longitude
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return (
      <center>
        <ClipLoader
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </center>
    );
  }
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
  const handlePickupAddress = (e) => {
    // e.preventDefault();
    setPickUpAddress(e.target.value);
  };
  //   console.log(props.props);
  //   setData(props.props);

  const doTransaction = () => {
    axios
      .post(
        "http://localhost:80/guide_me/src/server/api/paymentHandle.php?id=0",
        {
          params: {
            card_number: state.number,
            card_holders_name: state.name,
            ex_date: state.expiry,
            cvv: state.cvc,
            payment_method: paymentmethod,
            from: getCookie("user_id"),
            to: currentOffer[0]["driver_id"],
            price: currentOffer[0]["price"],
            offer_id: currentOffer[0]["offer_id"],
            res: "Driver",
            tour_id: currentOffer[0]["tour_id"],
            pickup_location: markers,
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        // setStatus(data.data);
        if (data.data) {
          notify("Payment Successfull", data.data);
        } else {
          notify("Error in payment! try again", data.data);
        }

        return data.data;
      });
  };
  const notify = (msg, type) => {
    if (!type) {
      toast.error(msg);
    } else {
      toast.success(msg);
    }
  };

  const getLatLng = (place) => {
    const URL =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      place +
      "&key=AIzaSyA3pAqddClbAT-GzSbGaFF6vJgeq3iu6-k";
    axios.post(URL).then((data) => {
      setMarker(data.data["results"][0]["geometry"].location);

      // setLocationPin((locationdata) => [
      //   ...locationdata,
      //   data.data["results"][0]["geometry"].location,
      // ]);
    });
  };

  return (
    <>
      <NavBar />
      <ToastContainer />
      <div className="container mt-2 ">
        <div className="container mt-3 shadow p-3 mb-5 bg-white rounded text-black">
          <h5>
            <b>Confirm Driver</b>
          </h5>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div>
                <h5 className="text-secondery">
                  Select Pickup Location On the Map.
                </h5>
              </div>
              <div className="d-flex flex-row mb-4">
                <input
                  type="text"
                  onChange={handlePickupAddress}
                  name="pickupaddress"
                  value={pickupaddress}
                  className="w-75"
                  placeholder="Enter Pickup Address"
                />
                <button
                  className="btn btn-primary w-25"
                  style={{ minWidth: "0px" }}
                  onClick={() => {
                    getLatLng(pickupaddress);
                  }}
                >
                  Add Location
                </button>
              </div>

              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={7}
                center={markers ? markers : center}
                onClick={onMapClick}
              >
                <Marker position={markers} />
              </GoogleMap>
            </div>
            <div className="col-lg-4">
              <div>
                <h5 className="text-secondery">Tour summery</h5>
              </div>
              <div className="card bg-light mb-3">
                <h5 className="card-header">{/* <b>Tour summery</b> */}</h5>
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

                        <b className="text-success">
                          Rs:{currentOffer[0]["price"]}
                        </b>
                      </h5>
                    </div>
                  ) : (
                    <div>No Offer Send Yet</div>
                  )}
                </div>
                <div className="card-footer bg-transparent border-success"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 shadow p-3 mb-5 bg-white rounded text-black">
          <h5>
            <b>Payment</b>
          </h5>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h5>Choose Payment Method</h5>
              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        onClick={() => {
                          setPaymentMethod("card");
                        }}
                      >
                        <CreditCard
                          style={{ color: "blue", marginRight: "12px" }}
                        />
                        Card Payment
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <div className="row">
                        <div className="col-lg-5">
                          <Cards
                            number={state.number}
                            expiry={state.expiry}
                            cvc={state.cvc}
                            name={state.name}
                            focused={state.focus}
                          />
                        </div>
                        <div className="col-lg-7">
                          <form>
                            <input
                              type="number"
                              name="number"
                              placeholder="Card Number"
                              value={state.number}
                              onChange={handleInputChange}
                              onFocus={handleInputFocus}
                              className="mb-2"
                            />
                            <input
                              type="text"
                              name="name"
                              placeholder="Card Holder Name"
                              value={state.name}
                              onChange={handleInputChange}
                              onFocus={handleInputFocus}
                              className="mb-2"
                            />
                            <div className="row mb-2">
                              <div className="col-lg-6">
                                <input
                                  type="number"
                                  name="expiry"
                                  placeholder="Expiry date"
                                  value={state.expiry}
                                  onChange={handleInputChange}
                                  onFocus={handleInputFocus}
                                />
                              </div>
                              <div className="col-lg-6">
                                <input
                                  type="number"
                                  name="cvc"
                                  placeholder="Card CVC/CVV"
                                  value={state.cvc}
                                  onChange={handleInputChange}
                                  onFocus={handleInputFocus}
                                />
                              </div>
                            </div>
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={() => {
                                doTransaction();
                              }}
                            >
                              Pay Now
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        type="radio"
                        onClick={() => {
                          setPaymentMethod("paypal");
                        }}
                      >
                        <Paypal
                          style={{ color: "blue", marginRight: "12px" }}
                        />
                        Pay By PAYPAL
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <PayPalScriptProvider
                      // options={{ clientId: "readyngocop@gmail.com" }}
                      >
                        <PayPalButtons style={{ layout: "horizontal" }} />
                      </PayPalScriptProvider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h5>Payment Summary</h5>
              {currentOffer != "" ? (
                <div className="card bg-light mb-3">
                  <h5 className="card-header">{/* <b>Tour summery</b> */}</h5>
                  <div className="card-body">
                    <div className="row mt-2">
                      <div className="col">
                        <h6 className="text-muted">Billing Name</h6>
                      </div>
                      <div className="col">
                        <h6>Alex</h6>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col">
                        <h6 className="text-muted">Payment To</h6>
                      </div>
                      <div className="col">
                        <h6>{data["no_of_passengers"]}</h6>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row mt-2">
                      <div className="col">
                        <h6 className="text-muted">Sub Total</h6>
                      </div>
                      <div className="col">
                        <h6>Rs:{currentOffer[0]["price"]}</h6>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col">
                        <h6 className="text-muted">Discount</h6>
                      </div>
                      <div className="col">
                        <h6>Rs: 0.00</h6>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-weight-bold mt-3">
                        <b>Total Cost: </b>

                        <b className="text-success">
                          Rs:{currentOffer[0]["price"]}
                        </b>
                      </h5>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-success"></div>
                </div>
              ) : (
                <div>No Offer Send Yet</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmTour;
