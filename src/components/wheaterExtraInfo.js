import React, {Component} from 'react';

class wheaterExtraInfo extends Component {
  render () {
    return (
      <div>
        <span>{this.props.humidity}</span>
        <span>{this.props.wind}</span>
      </div>
    )
  };
};

export default wheaterExtraInfo;