import React, { Component } from "react";
class Weather extends Component {
  render() {
    return (
      <div>
        <p>Temperature :{this.props.temp}</p>
        <p>Humidity :{this.props.humidity}</p>
        <p>pressure :{this.props.pressure}</p>
      </div>
    );
  }
}
export default Weather;
