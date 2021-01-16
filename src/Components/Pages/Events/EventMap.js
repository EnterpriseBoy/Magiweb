import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles = {
  width: '100%',
  height: '100%'
};


function EventMap(props) {

  const mapStyles = {      
    height: "30vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: props.lat, lng: props.lng
  }

  return (
    <div className="eventMap">
      {console.log(props.eventInfoProp)}
      <LoadScript
      googleMapsApiKey='AIzaSyBU7NFvmb9CVDUKejzzrz0aAXGAB5hMonE'>
      <GoogleMap className="eventGoogleMap"
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      />
    </LoadScript>
    </div>  
  );
}

export default EventMap;