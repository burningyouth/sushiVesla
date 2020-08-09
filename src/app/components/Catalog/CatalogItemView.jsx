import React from "react";

export default function(props) {
  const {
    imageSrc,
    title,
    description,
    size,
    price,
    id,
    showCounter,
  } = props.item;
  const modifier = props.item.modifier
    ? ` catalog__item_${props.item.modifier}`
    : "";
  const button = !showCounter && (
    <button id={`itemID${id}`} className="catalog__item-button button">
      В корзину
    </button>
  );
  const counter = showCounter && (
    <div className="counter">
      <button className="counter__handler counter__handler_minus">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fillRule="evenodd"
            d="M11 22C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11-4.925 11-11 11zm0-1c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10zm.5-10.5h5v1h-11v-1h6z"
          ></path>
        </svg>
      </button>
      <input
        type="text"
        className="counter__input"
        type="number"
        name="counter"
        defaultValue="1"
        min="0"
      />
      <button className="counter__handler counter__handler_plus">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fillRule="evenodd"
            d="M11 22C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11-4.925 11-11 11zm0-1c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10zm-.5-10.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1h5z"
          ></path>
        </svg>
      </button>
    </div>
  );

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
          <div className="catalog__item-price">{price} ₽</div>
          {button}
          {counter}
        </div>
      </div>
    </div>
  );
}
