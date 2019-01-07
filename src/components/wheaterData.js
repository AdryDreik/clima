import React, {Component} from 'react';
import WheaterTemperature from './wheaterTemperature';
import WheaterExtraInfo from './wheaterExtraInfo';
class wheaterData extends Component {
  render() {
    return (
      <div>
        Este es el wheaterData
        <WheaterTemperature></WheaterTemperature>
        <WheaterExtraInfo></WheaterExtraInfo>
      </div>
    )
  }
};

export default wheaterData;