import {
  GoogleMap as GoogleMapInitial,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string,
  });

  const [mapWidth, setMapWidth] = useState(window.innerWidth - 80);

  useEffect(() => {
    const handleResize = () => {
      const size = window.outerWidth;
      if (size <= 638) {
        setMapWidth(638);
        return;
      }
      setMapWidth(size - 80);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isLoaded ? (
        <p>Loading.....</p>
      ) : (
        <GoogleMapInitial
          mapContainerStyle={{ height: "70vh", minWidth: mapWidth }}
          zoom={2}
          center={center}
        ></GoogleMapInitial>
      )}
    </>
  );
};

export default React.memo(GoogleMap);
