import axios from "axios";
import { useEffect, useState } from "react";

const CountriesDropdown = ({ countryCallback }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("countries.json").then((data) => {
      //   console.log(data);
      setCountries(data.data);
    });
  }, []);
  const sendCountry = (e) => {
    let doc = document.getElementById("country");
    // console.log(doc.value);
    countryCallback(doc.value);
  };

  // console.log(language);
  return (
    <select id="country" name="country" onChange={sendCountry}>
      {countries.map((data, key) => (
        <option value={data["name"]} key={key}>
          {data["name"]}
        </option>
      ))}

      {/* Add other options */}
    </select>
  );
};

export default CountriesDropdown;
