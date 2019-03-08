import React, { Component } from "react";
class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <input
            onChange={this.props.handleonChange}
            type="text"
            name="city"
            placeholder="City...."
          />
          <input
            onChange={this.props.handleonChange}
            type="text"
            name="country"
            placeholder="Country ..."
          />
          <button>Get_Weather</button>
        </form>
      </div>
    );
  }
}
export default Form;
