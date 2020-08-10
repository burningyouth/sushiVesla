import React, { Component } from "react";

export default class NavbarContentWrapperView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { modifier, className, children } = this.props;
    return (
      <div
        className={`navbar__content-wrapper navbar__content-wrapper_${modifier} ${
          className ? className : ""
        }`}
      >
        {children}
      </div>
    );
  }
}
