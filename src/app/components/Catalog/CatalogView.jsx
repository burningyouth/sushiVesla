import React, { Component } from "react";
import CatalogItem from "./CatalogItemView";

export default class CatalogView extends Component {
  items = [
    {
      id: 0,
      imageSrc: "assets/img/savayaki.png",
      title: "Саваяки",
      description: `Курица копченая, мясо краба, соус спайси, лист салата, белый
        соус, кунжут черный, рис, нори.`,
      size: "200 г. / 8шт",
      price: 150,
    },
    {
      id: 1,
      imageSrc: "assets/img/savayaki.png",
      title: "Саваяки",
      description: `Курица копченая, мясо краба, соус спайси, лист салата, белый
        соус, кунжут черный, рис, нори.`,
      size: "200 г. / 8шт",
      price: 150,
      modifier: "blue",
    },
    {
      id: 2,
      imageSrc: "assets/img/savayaki.png",
      title: "Саваяки",
      description: `Курица копченая, мясо краба, соус спайси, лист салата, белый
        соус, кунжут черный, рис, нори.`,
      size: "200 г. / 8шт",
      price: 150,
      showCounter: true,
    },
  ];
  itemElements = this.items.map((item) => {
    return <CatalogItem item={item} key={item.id} />;
  });
  render() {
    return (
      <section className="container container_fluid pl-0 pr-0 pl-md-10 pr-md-10">
        <div className="catalog">
          {this.itemElements}
          {this.itemElements}
          {this.itemElements}
          {this.itemElements}
          {this.itemElements}
          {this.itemElements}
        </div>
      </section>
    );
  }
}
