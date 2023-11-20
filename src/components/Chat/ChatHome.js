import { useEffect, useState } from "react";
import SingleChatCard from "./SingleChatCard";
import axios from "axios";

const ChatHome = () => {
  const [allChats, setAllChats] = useState([]);

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  useEffect(() => {
    getAllChats();
  }, []);

  const getAllChats = () => {
    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/getAllChats.php?id=0",
        {
          params: {
            person: getCookie("user_id"),
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        setAllChats(data.data);
      });
  };

  return (
    <>
      <div className="container">
        {allChats.map((data) => (
          <a href={"/d-chatRoom?id=" + data.tour_id}>
            <SingleChatCard
              props={{
                msg: data.msg,
                date: data.created_on,
                sender: data.tourist_name,
              }}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default ChatHome;
