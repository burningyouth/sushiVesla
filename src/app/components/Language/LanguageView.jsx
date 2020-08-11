import React from "react";
import { Link } from "react-router-dom";
import ComponentWithEvents from "../../eventComponents/ComponentWithEvents";

export default class CartView extends ComponentWithEvents {
  constructor(props) {
    super(props);

    this.parent.elements.languagePicker = this;

    this.ruRef = React.createRef();
    this.enRef = React.createRef();
    this.currentLang = this.parent.state.language;
  }

  updateImages = (lang = this.currentLang) => {
    switch (lang) {
      case "RU":
        this.ruRef.current.classList.add("language__image_show");
        break;
      case "EN":
        this.enRef.current.classList.add("language__image_show");
        break;
    }
  };

  switchLanguages = () => {
    switch (this.currentLang) {
      case "RU":
        this.currentLang = "EN";
        this.enRef.current.classList.add("language__image_show");
        this.ruRef.current.classList.remove("language__image_show");
        break;
      case "EN":
        this.currentLang = "RU";
        this.ruRef.current.classList.add("language__image_show");
        this.enRef.current.classList.remove("language__image_show");
        break;
    }
    this.parent.exec("languageSwitched", this.currentLang);
  };

  componentDidMount = () => {
    this.updateImages();
  };

  handleClick = () => {
    this.switchLanguages();
  };

  render() {
    return (
      <button className="language" onClick={this.handleClick}>
        <img
          src="assets/img/ru.svg"
          className="language__image"
          alt=""
          ref={this.ruRef}
        />
        <img
          src="assets/img/en.svg"
          className="language__image"
          alt=""
          ref={this.enRef}
        />
      </button>
    );
  }
}
