import axios from "axios";
import { useState } from "react";

const LanguageDropdown = () => {
  const [language, setLanguage] = useState([]);
  axios.get("languages.json").then((data) => {
    // console.log(data);
    setLanguage(data.data);
  });
//   console.log(language);
  return (
    <select id="lan">
      {language.map((data) => (
        <option value={data["name"]}>{data["name"]}</option>
      ))}

      {/* Add other options */}
    </select>
  );
};

export default LanguageDropdown;
