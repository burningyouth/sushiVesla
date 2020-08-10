import React from "react";
import ComponentWithEvents from "../../../eventComponents/ComponentWithEvents";

export default class ModalCityView extends ComponentWithEvents {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  handleClick = () => {
    this.parent.trigger("citySelected", true, this.props.city);
    document
      .querySelectorAll(".modal__city.modal__city_active")
      .forEach((element) => {
        element.classList.remove("modal__city_active");
      });
    this.ref.current.classList.add("modal__city_active");
  };

  render = () => {
    return (
      <li
        className={`modal__city${
          this.props.active ? " modal__city_active" : ""
        }`}
        onClick={this.handleClick}
        ref={this.ref}
      >
        {this.props.city}
      </li>
    );
  };
}
