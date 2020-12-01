import React, { Component } from 'react';
import Flat from "./flat.jsx"

class FlatList extends Component {
  render () {
    return this.props.flats.map((flat, index) =>
      <Flat key={flat.lat}
      name={flat.name}
      image={flat.imageUrl}
      price={flat.price}
      lat={flat.lat}
      lng={flat.lng}
      selectFlat={this.props.selectFlat}
      active={this.props.selectedFlat.name === flat.name}
      index={index} />
    );
  }
}
export default FlatList;

// class FlatList extends Component{
//   render() {
//     return this.props.flatlist.map((flat) =>
//       <Flat key={flat.name}
//       name={flat.name}
//       image={flat.imageUrl}
//       price={flat.price}
//       lat={flat.lat}
//       lng={flat.lng}
//       select={this.props.select}/>);
//   }
// }

