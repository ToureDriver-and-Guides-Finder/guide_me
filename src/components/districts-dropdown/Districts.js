import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const DistrictsDropdown = () => {
  const [districts, setdistricts] = useState([]);
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    axios.get("districts.json").then((data) => {
      // console.log(data.data);
      setdistricts(data.data);
    });
  }, []);

  const destinationchange = (e) => {
    setDestinations([...destinations, e.target.value]);
   
  };
 console.log(destinations);
  //   console.log(districts);
  return (
    <select id="districts" name="district" onChange={destinationchange}>
      {districts.map((data, key) => (
        <option value={data["district"]} key={key}>
          {data["district"]}{" "}
        </option>
      ))}

      {/* Add other options */}
    </select>
  );
};

export default DistrictsDropdown;
