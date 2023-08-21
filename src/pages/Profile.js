const Profile = () => {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              className="bg-light rounded-3 p-3 mb-4"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item active" aria-current="page">
                  User Profile
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 className="my-3">John Smith</h5>
                <p className="text-muted mb-1">Canada</p>
                <div className="d-flex justify-content-center mb-2 flex-column align-items-center">
                  <button type="button" className="btn btn-primary m-0 mb-2">
                    Message
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary m-0"
                  >
                    More details
                  </button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-earth-africa"></i>
                    <p className="mb-0">Country</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-plane-arrival"></i>
                    <p className="mb-0">Arrive Date</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-plane-departure"></i>
                    <p className="mb-0">Departure Date</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-users"></i>
                    <p className="mb-0">No. of members</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-taxi"></i>
                    <p className="mb-0">Vehicle type</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Country</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Canada</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Example, Address</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card bg-dark text-white">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5beb0a44f2e6b1113f9519d9/1613152340670-W4HKZM4S2R4R9E5CJE7X/Facts+about+travelling.jpg?format=1500w"
                    className="card-img"
                    alt="Stony Beach"
                    style={{ height: "345px" }}
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title">preferred location</h5>
                    <p className="card-text">Location 1</p>
                    <p className="card-text">Location 2</p>
                    <p className="card-text">Location 3</p>
                    <p className="card-text">Location 4</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  id="carouselExampleTouch"
                  className="carousel slide"
                  data-mdb-touch="false"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-mdb-target="#carouselExampleTouch"
                      data-mdb-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-mdb-target="#carouselExampleTouch"
                      data-mdb-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-mdb-target="#carouselExampleTouch"
                      data-mdb-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://i.natgeofe.com/n/d6bd5cdc-528f-4887-9cc3-3fb4e10d6651/sri-lanka-travel.jpg"
                        className="d-block w-100"
                        alt="Wild Landscape"
                        style={{ height: "345px" }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Memories</h5>
                        <p>Location 1</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/03/Ride-That-Cute-Train-Around-Ella.jpg"
                        className="d-block w-100"
                        alt="Camera"
                        style={{ height: "345px" }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>Location 2</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://i.ytimg.com/vi/KgLltO8byg0/hq720_2.jpg?sqp=-oaymwEYCJUDENAFSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLAvJ-ksDhBYgzyZzdA5A1Ge2iC2MA"
                        className="d-block w-100"
                        alt="Exotic Fruits"
                        style={{ height: "345px" }}
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <p>Location 3</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselExampleTouch"
                    data-mdb-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselExampleTouch"
                    data-mdb-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
