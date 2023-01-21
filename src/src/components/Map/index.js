import React from "react";
import GoogleMapReact from 'google-map-react';
import {GOOGLE_MAP_API_KEY} from '../../config/env'
import { LocationOn } from "@mui/icons-material";

function Marker({text}) {
  return (
    <div>
      <LocationOn color="error" fontSize="large"/>
      {text}
    </div>
  )
}

const AnyReactComponent = ({ text }) => <Marker />;

export default function SimpleMap({lat, lng}){
  console.log(lat, lng)
  const defaultProps = {
    center: {
      lat: lat || 10.99835602,
      lng: lng || 77.01502627
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={lat || 10.99835602}
          lng={lng || 10.99835602}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
