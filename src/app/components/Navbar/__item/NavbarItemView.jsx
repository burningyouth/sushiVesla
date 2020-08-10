import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarItemView extends Component {
  render = () => {
    const {
      to,
      active,
      imageSrc,
      className = "",
      linkClassName = "",
      children,
    } = this.props;
    const activeClass = active ? " link_active" : "";
    const image = imageSrc && (
      <img src={imageSrc} className="navbar__item-image" />
    );
    return (
      <li className={`navbar__item ${className}`}>
        <Link
          to={to}
          className={`link navbar__link ${activeClass} ${linkClassName}`}
        >
          {image}
          {children}
        </Link>
      </li>
    );
  };
}
