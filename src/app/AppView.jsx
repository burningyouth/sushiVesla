import React from "react";
import { render } from "react-dom";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarView";
import Footer from "./components/Footer/FooterView";
import Home from "./pageViews/HomePageView";
import Catalog from "./pageViews/CatalogPageView";
import Modal from "../app/components/Modal/ModalView";
import ModalCity from "../app/components/Modal/__city/ModalCityView";
import ComponentWithEvents from "./eventComponents/ComponentWithEvents";

import AppModel from "./AppModel";
import AppPresenter from "./AppPresenter";

export default class AppView extends ComponentWithEvents {
  constructor(props) {
    super(props);
    this.elements = {};

    this._presenter = new AppPresenter(this, new AppModel());

    this.defaultCity = this._presenter.info.defaultCity;
    this.defaultCart = this._presenter.info.defaultCity;
    this.cities = this._presenter.cities;

    this.citiesElements = this.cities.map((obj) => {
      const active = this.defaultCity == obj.city ? true : false;
      return (
        <ModalCity
          key={obj.city}
          city={obj.city}
          parent={this}
          active={active}
        />
      );
    });
  }

  showModal = (modalKey) => {
    this.elements[modalKey].showModal();
  };

  updateCart = (obj) => {
    this.elements.cart.updateCart(obj);
  };

  updateCity = (city) => {
    this.elements.city.updateCity(city);
  };

  componentDidMount() {
    this.on("cartUpdated", this.updateCart);
    this.on("citySelected", this.updateCity);

    this.updateCity(this.defaultCity);
    this.updateCart(this.defaultCart);
  }

  render = () => {
    return (
      <Router>
        <Modal title="Выберите город" parent={this} type="city">
          <ul className="modal__content-cities">{this.citiesElements}</ul>
        </Modal>
        <Route
          render={(routeProps) => <Navbar {...routeProps} parent={this} />}
        />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route
            path="/catalog"
            render={(routeProps) => <Catalog {...routeProps} parent={this} />}
          ></Route>
        </Switch>
        <Route
          render={(routeProps) => <Footer {...routeProps} parent={this} />}
        />
      </Router>
    );
  };
}

render(<AppView />, document.getElementById("root"));
