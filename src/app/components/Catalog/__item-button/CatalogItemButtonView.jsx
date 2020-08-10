import React from "react";
import Counter from "../../Counter/CounterView";
import PureComponentWithEvents from "../../../eventComponents/PureComponentWithEvents";

export default class CatalogItemButtonView extends PureComponentWithEvents {
  constructor(props) {
    super(props);
    this.parent.elements.button = this;
    this.state = {
      hideButton: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      hideButton: true,
    });
    this.parent.parent.trigger("cartAdd", true, this.parent.itemPrice);
  };

  render = () => {
    if (this.state.hideButton) {
      return <Counter parent={this.parent} button={this} defaultValue={1} />;
    } else {
      return (
        <button
          className="catalog__item-button button"
          onClick={this.handleClick}
        >
          В корзину
        </button>
      );
    }
  };
}
