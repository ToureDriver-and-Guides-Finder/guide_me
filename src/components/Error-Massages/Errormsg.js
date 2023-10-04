import { Folder2Open } from "react-bootstrap-icons";

const ErrorMassege = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center">
        <Folder2Open style={{color:'gray'}} className="fs-2 m-3"/>
        <div>No Data Found.!</div>
      </div>
    </div>
  );
};

export default ErrorMassege;
