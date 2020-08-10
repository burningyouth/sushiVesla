import React from "react";
import { Link } from "react-router-dom";
import ComponentWithEvents from "../../../eventComponents/ComponentWithEvents";

export default class NavbarItemView extends ComponentWithEvents {
  render = () => {
    const { to, active, imageSrc, className, children } = this.props;
    const activeClass = active ? " link_active" : "";
    const image = imageSrc && (
      <img src={imageSrc} className="navbar__item-image" />
    );
    return (
      <Link
        to={to}
        className={`${className} ${activeClass}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseOut={this.handleMouseOut}
        onClick={this.handleClick}
      >
        {image}
        {children}
      </Link>
    );
  };
}
