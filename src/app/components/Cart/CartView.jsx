import React from "react";
import { Link } from "react-router-dom";
import ComponentWithEvents from "../../eventComponents/ComponentWithEvents";

export default class CartView extends ComponentWithEvents {
  constructor(props) {
    super(props);

    this.parent.elements.cart = this;

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
      <Link to={this.props.to} className="cart">
        <div className="cart__info" ref={this.infoRef}>
          {this.info}
        </div>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </Link>
    );
  }
}
