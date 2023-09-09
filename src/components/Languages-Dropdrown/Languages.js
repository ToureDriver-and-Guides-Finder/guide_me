import axios from "axios";
import { useEffect, useState } from "react";

const LanguageDropdown = ({ languageCallback }) => {
  const [language, setLanguage] = useState([]);
  useEffect(() => {
    axios.get("languages.json").then((data) => {
      // console.log(data);
      setLanguage(data.data);
    });
  }, []);

  const sendLanguage = (e) => {
    let doc = document.getElementById("lan");
    // console.log(doc.value);
    languageCallback(doc.value);
  };

  //   console.log(language);
  return (
    <select id="lan" name="language" onChange={sendLanguage}>
      {language.map((data, key) => (
        <option value={data["name"]} key={key}>
          {data["name"]}
        </option>
      ))}

      {/* Add other options */}
    </select>
  );
};

export default LanguageDropdown;
