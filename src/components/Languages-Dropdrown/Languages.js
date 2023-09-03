import axios from "axios";
import { useEffect, useState } from "react";

const LanguageDropdown = () => {
  const [language, setLanguage] = useState([]);
  useEffect(() => {
    axios.get("languages.json").then((data) => {
      // console.log(data);
      setLanguage(data.data);
    });
  }, []);

  //   console.log(language);
  return (
    <select id="lan" name="language">
      {language.map((data,key) => (
        <option value={data["name"]} key={key}>{data["name"]}</option>
      ))}

      {/* Add other options */}
    </select>
  );
};

export default LanguageDropdown;
