import React from "react";
import ComponentWithEvents from "../../eventComponents/ComponentWithEvents";

export default class CounterView extends ComponentWithEvents {
  constructor(props) {
    super(props);
    this.parent = props.parent;
    this.parent.elements.counter = this;
    this.button = props.button;
    this.defaultValue = props.defaultValue;
    this.currentValue = this.defaultValue;
    this.minValue = 0;
    this.maxValue = 100;
    this.inputRef = React.createRef();
    this.minusRef = React.createRef();
    this.plusRef = React.createRef();

    this.callback = props.callback;
  }

  minusClick = (e) => {
    e.preventDefault();
    const value = +this.inputRef.current.value;
    if (value - 1 >= this.minValue) {
      this.currentValue = value;
      this.inputRef.current.value = value - 1;
    }
    if (value - 1 == this.minValue) {
      this.button.setState({
        hideButton: false,
      });
    }
    this.parent.parent.trigger("cartRemove", true, this.parent.itemPrice);
  };

  plusClick = (e) => {
    e.preventDefault();
    const value = +this.inputRef.current.value;
    if (value + 1 <= this.maxValue) {
      this.currentValue = value;
      this.inputRef.current.value = value + 1;
    }
    this.parent.parent.trigger("cartAdd", true, this.parent.itemPrice);
  };

  render = () => {
    return (
      <div className="counter">
        <button
          className="counter__handler counter__handler_minus"
          ref={this.minusRef}
          onClick={this.minusClick}
        >
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
          ref={this.inputRef}
          disabled
        />
        <button
          className="counter__handler counter__handler_plus"
          ref={this.plusRef}
          onClick={this.plusClick}
        >
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
  };
}
