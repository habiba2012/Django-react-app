import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import CustomInfoWindow from "./CustomInfoWindow";
import Api from "../../RestApi";

import { BASE_URL, MAP_STYLE } from "../../constants";

const MapComponent = () => {
  const [selectedShop, setSelectedShop] = useState(null);
  const [markers, setMarkers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchMarkers = async () => {
    const data = await Api.getMarkers();
    setMarkers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMarkers();
  }, []);

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 55.692107, lng: 12.55565 }}
      defaultOptions={{ styles: MAP_STYLE, disableDefaultUI: true }}
      onClick={() => {
        selectedShop && setSelectedShop(null);
      }}
    >
      {!isLoading &&
        markers.map((shop) => (
          <Marker
            key={shop.id}
            position={{ lat: shop.lat, lng: shop.lng }}
            onClick={() => {
              setSelectedShop(shop);
            }}
            icon={{
              url: BASE_URL + shop.marker_img[0],
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        ))}

      {selectedShop && (
        <InfoWindow
          position={{ lat: selectedShop.lat, lng: selectedShop.lng }}
          onCloseClick={() => {
            setSelectedShop(null);
          }}
        >
          <CustomInfoWindow shop={selectedShop} />
        </InfoWindow>

      )}

    </GoogleMap>
  );
};

export default MapComponent;
