import React, { Component } from "react";
import { MapWithGeocode } from "../../map/GoogleMap";

export default class RentalMap extends Component {
  render() {
    const location = this.props.location;
    return (
      <MapWithGeocode
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCbtb9L-HDXvwX2SkkUBSWWoqX1S0re1s&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `360px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={location}
      />
    );
  }
}
