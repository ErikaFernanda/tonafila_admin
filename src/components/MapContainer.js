
import { Component, useState } from 'react';
import { GoogleMap, withGoogleMap, Marker, withScriptjs } from 'react-google-maps';

import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import Geocode from 'react-geocode';
Geocode.setApiKey("AIzaSyD9R0YBrvqleKqNK3n5Ej02HlLmpHXH3Fo")
Geocode.setRegion("br")
Geocode.setLanguage("pt");
export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mapPosition: { lat: 18.486278764986732, lng: 69.92786525735443 }
    }
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  // state = {
  //   city: "",
  //   mapPosition: {
  //     lat: -34.397,
  //     lng: 150.644,
  //   },
  //   valor:"",

  // }

  onMapClicked(props, map, e) {
    let location = this.state.position;
    location.lat = e.latLng.lat();
    location.lng = e.latLng.lng();

    this.setState({
      position: location
    })
    console.log(this.state.position);
  }



  render() {



    const MapWithAMarker = withScriptjs(withGoogleMap(props =>

      <GoogleMap
        defaultZoom={2}
        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
      
      >
        <Marker key="AIzaSyD9R0YBrvqleKqNK3n5Ej02HlLmpHXH3Fo"
        
          position={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng
          }} />
        <button onClick={() => alert("fdg" + this.state.mapPosition.lat)} >testeeeee</button>
        <GooglePlacesAutocomplete


          apiKey="AIzaSyD9R0YBrvqleKqNK3n5Ej02HlLmpHXH3Fo"
          autocompletionRequest={{
            bounds: [
              { lat: 50, lng: 50 },
              { lat: 100, lng: 100 }
            ],
            componentRestrictions: {
              country: ['br'],
            }
          }}
          onSelect={result => {

            Geocode.fromAddress(result.description).then(
              response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                this.state.mapPosition.lat = lat;
                this.state.mapPosition.lng = lng;

                console.log("teste: " + this.state.mapPosition.lat)
              },
              error => {
                console.error(error);
              }
            );

          }}




        // onPlaceSelected={(place) => {
        //   console.log(place.geometry.location.lat() + "  " + place.geometry.location.lng());
        //   this.state.mapPosition.lat = place.geometry.location.lat();
        //   this.state.mapPosition.lng = place.geometry.location.lng();
        // }}
        />

      </GoogleMap>

    ));
    return (
      <div>

        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9R0YBrvqleKqNK3n5Ej02HlLmpHXH3Fo&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default MapContainer;

