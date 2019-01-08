import React, {Component} from 'react';
import PropTypes from 'prop-types';

class wheaterTemperature extends Component {
  render () {
    return (
      <div>{this.props.temperature}° C</div>
    )
  }
};

wheaterTemperature.propTypes = {
  temperature: PropTypes.number.isRequired
};
wheaterTemperature.defaultProps = {
  temperature: 15
};

export default wheaterTemperature;