
import { Component } from 'react';
import { GoogleMap, withGoogleMap, Marker, withScriptjs } from 'react-google-maps';

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Geocode from 'react-geocode';
import './MapContainer.css';
import axios from 'axios';
Geocode.setApiKey("AIzaSyD9R0YBrvqleKqNK3n5Ej02HlLmpHXH3Fo")
Geocode.setRegion("br")
Geocode.setLanguage("pt");

export class MapContainer extends Component {


  state = {


    latitude: 18.486278764986732,
    longitude: 69.92786525735443,
    nome: "",
    codigoempresa: "",
    endereco: "",
    urlimg: "",
  };
  onRequest = async () => {
    try {
      const res = await axios.post('https://apitonafila.herokuapp.com/empresas/save', { ...this.state });

      return res.data;

    } catch (error) {
      console.log("erro", error);
    }
  }

  onMapClicked = this.onMapClicked.bind(this);


  onMapClicked(props, map, e) {
    let location = this.state.position;
    location.lat = e.latLng.lat();
    location.lng = e.latLng.lng();

    this.setState({
      position: location
    })
    console.log(this.state.position);
  }

  handleChangeUrlImg = event => {
    this.setState({ urlimg: event.target.value });
  
  }

  render() {



    const MapWithAMarker = withScriptjs(withGoogleMap(props =>

      <GoogleMap
        defaultZoom={2}
        defaultCenter={{ lat: this.state.latitude, lng: this.state.longitude }}

      >
        <Marker key="AIzaSyD9R0YBrvqleKqNK3n5Ej02HlLmpHXH3Fo"

          position={{
            lat: this.state.latitude,
            lng: this.state.longitude,
          }} />

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




                this.state.nome = result.structured_formatting.main_text;
                this.state.latitude = response.results[0].geometry.location.lat;
                this.state.longitude = response.results[0].geometry.location.lng;
                this.state.codigoempresa = result.place_id;
                this.state.endereco = response.results[0].formatted_address;
                console.log(this.state.latitude + "  " + this.state.longitude);
                console.log("id :" + result.place_id)
                console.log("nome :" + result.structured_formatting.main_text);
                console.log("Endereço :" + response.results[0].formatted_address)
              },
              error => {
                console.error(error);
              }
            );

          }}
        />


      </GoogleMap>


    ));
    return (
      <div>
        <form onSubmit={this.onRequest}>
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9R0YBrvqleKqNK3n5Ej02HlLmpHXH3Fo&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className="div-map" style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          {/* <input type="submit" value="Finalizar " /> */}
          <label>
            url img:
          <input type="text" name="urlimg" onChange={this.handleChangeUrlImg} />
          </label>
          <button onClick={() => alert("fdg" + this.state.nome)} >Salvar</button>
        </form>
      </div >
    );
  }
}

export default MapContainer;

