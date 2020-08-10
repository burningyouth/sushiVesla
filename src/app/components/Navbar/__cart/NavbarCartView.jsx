import React from "react";
import NavbarItem from "../__item/NavbarItemView";
import ComponentWithEvents from "../../../eventComponents/ComponentWithEvents";

export default class NavbarCartView extends ComponentWithEvents {
  constructor(props) {
    super(props);
    this.info = props.info;
    this.infoRef = React.createRef();
  }

  updateCart(obj) {
    if (obj.count) {
      this.info = `${obj.count} поз. / ${obj.total} Р`;
    } else {
      this.info = "";
    }
    this.infoRef.current.innerHTML = this.info;
  }

  render() {
    return (
      <NavbarItem to={this.props.to} className="navbar__cart">
        <div className="navbar__cart-info" ref={this.infoRef}>
          {this.info}
        </div>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </NavbarItem>
    );
  }
}
