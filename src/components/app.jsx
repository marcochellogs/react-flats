import React, { Component } from 'react';
import FlatList from "./flatlist.jsx"
import SimpleMap from "./map.jsx"
import flats from "../data/flats.js"


class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
    flatlist: flats,
    center: {
      lat: flats[0].lat,
      lng: flats[0].lng,
    }
  }

  select = (lat, lng) => {
    this.setState({
      center: {
        lat: lat,
        lng: lng,
      }
    });
  }

  render(){
    return(
      <div>
        <div className="flat-list">
          <FlatList flatlist={this.state.flatlist} select={this.select}/>
        </div>
        <div className="map-container">
          <SimpleMap center={this.state.center} zoom={11}/>
        </div>
      </div>
    );
  }
}

export default App;
