import React, { Component } from 'react';
import Flat from "./flat.jsx"

class FlatList extends Component{
  render() {
    return this.props.flatlist.map((flat) =>
      <Flat key={flat.name}
      name={flat.name}
      image={flat.imageUrl}
      price={flat.price}
      lat={flat.lat}
      lng={flat.lng}
      select={this.props.select}/>);
  }
}

export default FlatList;
