import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./marker.jsx"

class SimpleMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
