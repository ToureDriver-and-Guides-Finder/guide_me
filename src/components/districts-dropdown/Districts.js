import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const DistrictsDropdown = () => {
  const [districts, setdistricts] = useState([]);
  useEffect(()=>{
    axios.get("districts.json").then((data) => {
      // console.log(data.data);
      setdistricts(data.data);
    });

  },[])
  
  //   console.log(districts);
  return (
    <select id="districts" name="district">
      {districts.map((data,key) => (
        <option value={data["district"]} key={key}>{data["district"]}</option>
      ))}

      {/* Add other options */}
    </select>
  );
};

export default DistrictsDropdown;
