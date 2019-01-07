import React, { Component } from 'react';
import WheaterData from './wheaterData';
import Location from './location';
class wheaterLocation extends Component {
  render() {
    return (
      <div>
        <Location></Location>
        <WheaterData></WheaterData> 
      </div>
    );
  }
}

export default wheaterLocation;