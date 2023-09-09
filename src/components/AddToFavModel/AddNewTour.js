import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewTour = (props) => {
  console.log(props.props);
  const navigate = useNavigate();
  const [tourname, setTourName] = useState("");
  const [alltours, setAllTuors] = useState([]);
  const [newtour, setNewTour] = useState([]);
  const [des_id, setDesID] = useState();
  const [message, setMessage] = useState("");

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

  useEffect(() => {
    axios
      .post("http://localhost:80/guide_me/src/server/api/gettours.php?id=0", {
        params: {
          // id: props.props,
          userId: getCookie("user_id"),
        },
      })
      .then((data) => {
        // console.log(data.data);
        setAllTuors(data.data);
      });
  }, [newtour]);

  const handleChange = (e) => {
    setTourName(e.target.value);
    console.log("value is:", e.target.value);
  };

  // console.log(getCookie("user_id"));
  // console.log(alltours);
  const handleClik = (e) => {
    // console.log(e.currentTarget.id);
    setDesID(e.currentTarget.id);
  };

  // console.log(des_id);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:80/guide_me/src/server/api/addtofav.php?id=0", {
        params: {
          id: props.props["desId"],
          tourname: tourname,
          userId: getCookie("user_id"),
          function: "create",
        },
      })
      .then((data) => {
        setNewTour(data.data);
      });
  };
  // console.log(props.props);

  const handleTourSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:80/guide_me/src/server/api/addTour.php?id=0", {
        params: {
          user_id: getCookie("user_id"),
          tour_id: displayRadioValue(),
          destinations: props.props.destinations,
          data: props.props.data,
        },
      })
      .then((data) => {
        console.log(data.data);
        //   setData(data.data);
        if (data.data == 1) {
          setMessage("Tour added Successfully");
          setTimeout(() => {
            document.getElementById("exampleModalCenter").style.display =
              "none";
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

  function displayRadioValue() {
    var ele = document.getElementsByName("options");

    for (let i = 0; i < ele.length; i++) {
      // console.log(ele[i].checked);
      if (ele[i].checked) {
        // console.log(ele[i].value);
        return ele[i].value;
      }
    }
  }

  return (
    <>
      {/* <button
        className="btn icon-button"
        type="submit"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        id={props.props}
        onClick={handleClik}
      >
        <i class="fs-5 bi bi-suit-heart m-2 "></i>
      </button> */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title bg-secondary w-100 text-light p-2 text-center"
                id="exampleModalCenterTitle"
              >
                Add To Tour
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form>
                  {alltours.map((data, index) => (
                    <div className="row mt-2" key={index}>
                      {/* <div className="card">
                      <div>
                        <h5 className="card-title">{data["tour_name"]}</h5>
                      </div>
                    </div> */}
                      <input
                        type="radio"
                        className="btn-check"
                        name="options"
                        id={"option" + index}
                        // autocomplete="on"
                        value={data["tour_id"]}
                      />
                      <label
                        className="btn btn-outline-info w-100"
                        htmlFor={"option" + index}
                      >
                        {data["tour_name"]}
                      </label>
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    // id={props.props}
                    onClick={(e) => {
                      handleTourSubmit(e);
                    }}
                  >
                    Save Tour
                  </button>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button> */}

              <form className="form-inline">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control text-black"
                      id="tour"
                      placeholder="Tour Name"
                      name="tourname"
                      onChange={handleChange}
                      value={tourname}
                    />
                  </div>
                  <div className="col">
                    <button
                      type="submit"
                      className="btn btn-outline-secondary p-2"
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      Create Tour
                    </button>
                  </div>
                  <hr className="mt-2" />
                </div>
              </form>
              {message != "" ? (
                <div class="alert alert-success alert-dismissible w-100">
                  <a
                    href="#"
                    class="close"
                    data-dismiss="alert"
                    aria-label="close"
                  >
                    &times;
                  </a>
                  <strong>Success!</strong> {message}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewTour;
