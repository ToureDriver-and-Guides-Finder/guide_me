import { useLocation } from "react-router-dom";
import DriverNavBar from "../Components/DriverNav";

const TourDetails = () => {
    let { state } = useLocation();
    console.log(state.tdata);
    return (
      <>
        <DriverNavBar />
        
        {/* {state} */}
      </>
    );
}
 
export default TourDetails;