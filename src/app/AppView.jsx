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

export default class AppView extends ComponentWithEvents {
  constructor(props) {
    super(props);
    this.elements = {};
  }

  updateCart = (obj) => {
    this.elements.navbar.cartRef.current.updateCart(obj);
  };

  updateCity = (city) => {
    this.elements.navbar.cityRef.current.updateCity(city);
  };

  componentDidMount() {
    this.on("cartUpdated", this.updateCart);
    this.on("citySelected", this.updateCity);
  }

  render = () => {
    return (
      <Router>
        <Modal title="Выберите город" parent={this} type="city">
          <ul className="modal__content-cities">
            <ModalCity city="Анапа" parent={this} />
            <ModalCity city="Волгоград" parent={this} />
            <ModalCity city="Волжский" parent={this} active />
            <ModalCity city="Тест" parent={this} />
          </ul>
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
        <Route component={Footer} />
      </Router>
    );
  };
}

render(<AppView />, document.getElementById("root"));
