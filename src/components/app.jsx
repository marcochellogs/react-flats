import React, { Component } from 'react';
import FlatList from "./flatlist.jsx"
import GoogleMapReact from 'google-map-react';
import flats from "../data/flats.js"
import Marker from "./marker.jsx"


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats,
    }
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return(
      <div>
        <div className="flat-list">
          <FlatList flats={this.state.flats} selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat}/>
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.state.selectedFlat} defaultZoom={11}>
            <Marker
             lat={this.state.selectedFlat.lat}
             lng={this.state.selectedFlat.lng}
             text="My Marker"/>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   constructor(props){
//     super(props);
//   }
//   state = {
//     flatlist: flats,
//     center: {
//       lat: flats[0].lat,
//       lng: flats[0].lng,
//     }
//   }

//   select = (lat, lng) => {
//     this.setState({
//       center: {
//         lat: lat,
//         lng: lng,
//       }
//     });
//   }

//   render(){
//     return(
//       <div>
//         <div className="flat-list">
//           <FlatList flatlist={this.state.flatlist} select={this.select}/>
//         </div>
//         <div className="map-container">
//           <SimpleMap center={this.state.center} zoom={11}/>
//         </div>
//       </div>
//     );
//   }
// }

