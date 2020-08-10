import React, { Component } from "react";

export default class BurgerView extends Component {
  constructor(props) {
    super(props);
    this.navbar = props.parent;
    this.navbar.elements.burger = this;
  }

  handleClick = (e) => {
    e.preventDefault();
    this.navbar.trigger("burgerClicked");
  };

  render() {
    return (
      <button className="burger" type="button" onClick={this.handleClick}>
        <span className="burger__main" />
      </button>
    );
  }
}
