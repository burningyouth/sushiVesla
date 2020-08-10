import React from "react";
import CatalogItem from "./__item/CatalogItemView";
import CatalogPresenter from "./CatalogPresenter";
import CatalogModel from "./CatalogModel";
import ComponentWithEvents from "../../eventComponents/ComponentWithEvents";

export default class CatalogView extends ComponentWithEvents {
  constructor(props) {
    super(props);
    this.parent = props.parent;
    this._presenter = new CatalogPresenter(this, new CatalogModel());
    this.itemElements = this._presenter.items.map((item) => {
      return (
        <CatalogItem
          parent={this}
          item={item}
          key={item.id}
          callbackRemove={this.removeFromCart}
          callbackAdd={this.addToCart}
        />
      );
    });
  }

  componentDidMount() {
    this.on("cartAdd", (itemPrice) => {
      this._presenter.trigger("cartAdd", true, itemPrice);
    });
    this.on("cartRemove", (itemPrice) => {
      this._presenter.trigger("cartRemove", true, itemPrice);
    });
  }

  render = () => {
    return (
      <section className="container container_fluid pl-0 pr-0 pl-md-10 pr-md-10">
        <div className="catalog">{this.itemElements}</div>
      </section>
    );
  };
}
