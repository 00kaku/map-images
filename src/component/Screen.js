import React, { Component } from "react";
import { GoogleMap, Marker ,StandaloneSearchBox } from "@react-google-maps/api";

class Maps extends Component {
  state = {
    markerLat: "",
    markerLng: "",
    zoom: 10,
    center: {
      lat: 28.7041,
      lng:  77.1025,
    },
    options :{
      disableDefaultUI: true,
    },
    showButtonImage:false
  };

  componentDidMount() {
    if ("geolocation" in navigator) {
      let posLat=''
      let posLng=''
      let success = (position) => {
        posLat = position.coords.latitude;
        posLng = position.coords.longitude;

        this.setState({
          zoom: 12,
          center: {
            lat: posLat,
            lng: posLng,
          },
        });
      };
      navigator.geolocation.getCurrentPosition(success);
    }
  }

  mapRef = React.createRef();

  setMarker(event) {
    this.setState({ markerLat: event.latLng.lat(),
    				markerLng: event.latLng.lng(),
    				removeMarker:false,
    				showButtonImage:true})
  }

 

  render() {
    const mapContainerStyle = {
      width: "100vw",
      height: "100vh",
    };

    
    let MarkerPosition = (
      <Marker
        position={{ lat: this.state.markerLat, lng: this.state.markerLng }}/>
    );
    

    let MapPosition = (
      <div>
            
 			<h1>
 			Maps &#x1F9ED; Images 
 			</h1>
 			
 			
 			{this.state.showButtonImage ? <div className="search">
 			<button> Show Images </button>
 			</div> :null}
        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={this.state.zoom}
        center={this.state.center}
        options={this.state.options}
        onClick={(event) => {
          this.setMarker(event);
        }}
        onLoad={(map) =>{
        this.mapRef=map;
        }}
      >
      {MarkerPosition}
      </GoogleMap>
          
      </div>
    );
    return ([MapPosition]);
  }
}

export default Maps;
