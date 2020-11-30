import React, { Component } from 'react';

class Flat extends Component {
  handleUpdate = (event) => {
    // this.props.select(this.props.lat, this.props.lng);
    this.setState(() => {
      selected: !this.state.selected
    });
  }
  state = {
    selected: false,
  }
  render (){
    const style = {backgroundImage: `url(${this.props.image})`}
    return (
      <div className={`card ${this.state.selected ? ' active': ''}`} style={style}>
        <div className="card-category">{this.props.price} EUR</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleUpdate}></a>
      </div>
    );
  }
}

export default Flat;
