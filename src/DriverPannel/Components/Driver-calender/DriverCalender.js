import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Calender = () => {
  const [allevents, setAllEvents] = useState([]);
  //   const [alloffers, setAllOffers] = useState([]);

  const [msg, setMessage] = useState(false);

  const eventdata = {
    id: "",
    start: "",
    end: "",
    title: "",
  };

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
  const getOffer = () => {
    axios
      .post(
        "http://localhost:80/guide_me/src/DriverPannel/DriverServer/api/getConfirmedDriverOffers.php?id=0",
        {
          params: {
            // id: props.props,
            userId: getCookie("user_id"),
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        if (data.data == "No data") {
          setMessage(true);
        } else {
          const offers = data.data.map((offer) => {
            const today = new Date();
            const startDate = new Date(offer["start_date"]);
            const endDate = new Date(offer["end_date"]);

            const color =
              today >= startDate && today <= endDate
                ? "green"
                : today >= startDate
                ? "gray"
                : "#1E90FF";

            return {
              id: offer["offer_id"],
              start: offer["start_date"],
              end: offer["end_date"],
              title: offer["tour_name"],
              color: color,
            };
          });
          setAllEvents(offers);
        }
      });
  };

  useEffect(() => {
    getOffer();
  }, []);

  return (
    <>
      <div className="container bg-dark p-3">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={allevents}
          eventColor="#378006"
        />
      </div>
    </>
  );
};

export default Calender;
