import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles = {
  width: '100%',
  height: '100%'
};


function EventMap() {

  const mapStyles = {        
    height: "30vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  return (
    <div className="eventMap">
      <LoadScript
      googleMapsApiKey='AIzaSyBU7NFvmb9CVDUKejzzrz0aAXGAB5hMonE'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
    </div>  
  );
}

export default EventMap;