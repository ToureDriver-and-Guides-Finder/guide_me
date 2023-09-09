import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Sadpanda from "../images/12.png";
const PageNotFound = () => {
  return (
    <>
      <NavBar />
      <div className="p-5 bg-warning row">
        <div className="col align-items-start justify-content-center d-flex flex-column">
          <h1>:( </h1>

          <h1>Error 404</h1>

          <h4>Page not found, check the URL and try again.</h4>

          <a href="/" className="btn btn-dark">
            Go home
          </a>
        </div>

        <div className="col align-items-center justify-content-center d-flex flex-column">
          <div className="text-center">
            <img
              src={Sadpanda}
              className="img-fluid w-75 mt-4"
              alt="sadpanda"
              style={{ minWidth: "250px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
