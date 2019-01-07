import React, {Component} from 'react';
import WheaterTemperature from './wheaterTemperature';
import WheaterExtraInfo from './wheaterExtraInfo';
class wheaterData extends Component {
  render() {
    return (
      <div>
        <WheaterTemperature></WheaterTemperature>
        <WheaterExtraInfo humidity={80} wind={'10 m/s'}></WheaterExtraInfo>
      </div>
    )
  }
};

export default wheaterData;