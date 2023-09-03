import axios from "axios";
import { useEffect, useState } from "react";

const CountriesDropdown = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("countries.json").then((data) => {
    //   console.log(data);
      setCountries(data.data);
    });
  }, []);

  // console.log(language);
  return (
    <select id="country" name="country">
      {countries.map((data,key) => (
        <option value={data["name"]} key={key}>{data["name"]}</option>
      ))}

      {/* Add other options */}
    </select>
  );
};

export default CountriesDropdown;
