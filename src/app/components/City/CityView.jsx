import React, { Component } from "react";

export default class CityView extends Component {
  constructor(props) {
    super(props);

    props.parent.elements.city = this;

    this.ref = React.createRef();
  }

  updateCity = (city) => {
    this.ref.current.innerHTML = city;
  };

  render = () => {
    return (
      <button
        onClick={() => this.props.parent.showModal("cityModal")}
        className="link navbar__link city"
      >
        <span ref={this.ref}>{this.props.defaultCity}</span>
        <i className="fa fa-angle-down ml-5" aria-hidden="true"></i>
      </button>
    );
  };
}
