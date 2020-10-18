import React from "react";
import { withScriptjs, withGoogleMap } from "react-google-maps";

import MapComponent from "./MapComponent";
import Add from "../Add";
import Help from "../Help";
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Map.css'
// import Pins from "../img/brown_use.png"


const Map = () => {
  const WrappedMap = withScriptjs(withGoogleMap(MapComponent));
  // const google = window.google;
  // Load the stores GeoJSON onto the map.
  // map.data.loadGeoJson('stores.json', { idPropertyName: 'storeid' });
  return (
    <>
      <div className="Map" style={{ height: "100vh", width: "100%", position: "relative", overflow: "hidden" }}>
        <WrappedMap
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyB5S8ostoO0xtwOupbjZSj8aHtVo7LkghM&libraries=places"
          }
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        {/*  <Marker
          position={{ lat: 25.0391667, lng: 121.525 }}
          icon={{
            url: Pins,
            anchor: new google.maps.Point(5, 58),
          }}
        /> */}

      </div>

      <Link to="/add">
        <Add />
      </Link>


      <Link to="/help">
        <Help />
      </Link>

      {/* <img src={Pins} alt="" className="try-pins" position={{ lat: 55.68916, lng: 12.2798 }} /> */}

    </>
  );
};

export default Map;
