import React, { PureComponent } from "react";
import CatalogItemButton from "../__item-button/CatalogItemButtonView";

export default class CatalogItemView extends PureComponent {
  constructor(props) {
    super(props);
    this.elements = {};
    this.parent = props.parent;
    this.callbackAdd = props.callbackAdd;
    this.callbackRemove = props.callbackRemove;
    this.itemPrice = props.item.price;
  }

  render = () => {
    const { imageSrc, title, description, size, id } = this.props.item;
    const modifier = this.props.item.modifier
      ? ` catalog__item_${this.props.item.modifier}`
      : "";

    return (
      <div className={`catalog__item${modifier}`}>
        <div className="catalog__item-image">
          <img src={imageSrc} alt="" />
        </div>
        <div className="catalog__item-content">
          <div className="catalog__item-caption">
            <h2 className="catalog__item-title">{title}</h2>
            <p className="catalog__item-description">{description}</p>
            <p className="catalog__item-size">{size}</p>
          </div>
          <div className="catalog__item-controls">
            <div className="catalog__item-price">{this.itemPrice} ₽</div>
            <CatalogItemButton parent={this} />
          </div>
        </div>
      </div>
    );
  };
}
