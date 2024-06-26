import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const libraries = ['places'];

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapContainer = () => {
  const [searchBox, setSearchBox] = useState(null);
  const [places, setPlaces] = useState([]);
  const onLoad = ref => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    setPlaces(places);
    console.log(places);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD9R0YBrvqleKqNK3n5Ej02HlLmpHXH3Fo"
      libraries={libraries}
    >
      <GoogleMap
        id="searchbox-example"
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <StandaloneSearchBox
          onLoad={onLoad}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Search for places"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px"
            }}
          />
        </StandaloneSearchBox>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;