import { useEffect, useState } from "react";
import "./location.css";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  DistanceMatrixService,
} from "@react-google-maps/api";
import axios from "axios";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "50vh",
};

const center = {
  lat: 5.95685127628335, // default latitude
  lng: 80.46375649074139, // default longitude
};
const other = {
  lat: 5.943439788404428, // default latitude
  lng: 80.49156537944626, // default longitude
};

const LocationPin = (props) => {
  const [locationdata, setLocationPin] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA3pAqddClbAT-GzSbGaFF6vJgeq3iu6-k",
    libraries,
  });
  // console.log(props.props);
  const getLatLng = (place) => {
    const URL =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      place +
      "&key=AIzaSyA3pAqddClbAT-GzSbGaFF6vJgeq3iu6-k";
    axios.post(URL).then((data) => {
      // console.log(data.data["results"][0]["geometry"].location);
      // console.log(data.data["results"][0]["geometry"].location);
      setLocationPin((locationdata) => [
        ...locationdata,
        data.data["results"][0]["geometry"].location,
      ]);
    });
  };

  useEffect(() => {
    const location = props.props;
    location.forEach((element) => {
      getLatLng(element);
      // console.log(locationdata)
    });
  }, []);
  console.log(locationdata);
  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  // getLatLng("mirissa");
  return (
    <>
      <div className="mt-5 mb-4">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={7}
          center={center}
        >
          {locationdata.map((data) => (
            <Marker position={data} />
          ))}
        </GoogleMap>
        <DistanceMatrixService
          options={{
            destinations: [{ lat: 5.95685127628335, lng: 80.46375649074139 }],
            origins: [{ lng: 5.943439788404428, lat: 80.49156537944626 }],
            travelMode: "DRIVING",
          }}
          callback={(response) => {
            console.log(response);
          }}
        />
      </div>
    </>
  );
};

export default LocationPin;
