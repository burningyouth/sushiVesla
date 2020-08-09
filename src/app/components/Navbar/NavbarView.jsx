import React, { Component } from "react";
import NavbarLink from "./NavbarLinkView";
import NavbarLinks from "./NavbarLinksView";
import { Link } from "react-router-dom";

export default class NavbarView extends Component {
  constructor(props) {
    super(props);
    this.updateMenuItems(props);
  }

  updateMenuItems(props) {
    if (props.location.pathname === "/") {
      this.navbarItemsClass = "navbar__items_bounded";
      this.menuItems = [
        {
          id: 0,
          title: "О компании",
          link: "/about",
        },
        {
          id: 1,
          title: "Условия доставки",
          link: "/delivery",
        },
        {
          id: 2,
          title: "Пользовательское соглашение",
          link: "/agreement",
        },
      ];
    } else {
      this.navbarItemsClass = "";
      this.menuItems = [
        {
          id: 0,
          title: "Сеты",
          link: "/sets",
        },
        {
          id: 1,
          title: "Воки",
          link: "/woks",
        },
        {
          id: 2,
          title: "Роллы",
          link: "/catalog",
        },
        {
          id: 3,
          title: "Гриль роллы",
          link: "/grill-rolls",
        },
        {
          id: 4,
          title: "Темпура",
          link: "/tempura",
        },
        {
          id: 5,
          title: "Premium меню",
          link: "/premium",
        },
        {
          id: 6,
          title: "Суши",
          link: "/sushi",
        },
        {
          id: 7,
          title: "Еще",
          link: "/more",
        },
      ];
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.updateMenuItems(nextProps);
      return true;
    }
    return false;
  }

  render() {
    return (
      <header className="pt-45 pb-45">
        <div className="navbar">
          <div className="navbar__content-wrapper container container_fluid">
            <div className="navbar__content">
              <div className="show-md">
                <button
                  className="burger"
                  data-toggle-type="navbar-expand"
                  data-target="#navbar__items"
                  data-collapsed="false"
                  data-self-modifier-class="burger_active"
                  type="button"
                >
                  <span className="burger__main" />
                </button>
              </div>
              <Link className="logo logo_desktop" to="/">
                <img src="assets/img/logo.png" alt="logo" />
              </Link>
              <Link className="logo logo_phone" to="/">
                <img src="assets/img/logo-phone.png" alt="logo" />
              </Link>
              <ul className="navbar__items navbar__items_bounded navbar__items_align-left ml-md-30 ml-10">
                <li className="navbar__item navbar__item_without-margin hide-md">
                  <button className="language-picker">
                    <img src="assets/img/ru.svg" alt="" />
                  </button>
                </li>
                <li className="navbar__item ml-md-15 ml-10">
                  <NavbarLink to="#" className="link navbar__link">
                    Волжский
                    <i className="fa fa-angle-down ml-5" aria-hidden="true"></i>
                  </NavbarLink>
                </li>
                <li className="navbar__item ml-15 hide-md">
                  <a href="tel:88005503030" className="link navbar__link">
                    8-800-550-30-30
                  </a>
                </li>
                <li className="navbar__item ml-0 ml-xxl-10 hide-md">
                  <NavbarLink to="#" className="link navbar__link link_bold">
                    Личный кабинет
                    <i
                      className="fa fa-sign-in-alt ml-5"
                      aria-hidden="true"
                    ></i>
                  </NavbarLink>
                </li>
              </ul>
            </div>
            <div className="navbar__content navbar__content_right">
              <div className="navbar__content mr-30">
                <NavbarLinks
                  location={this.props.location}
                  menuItems={this.menuItems}
                  navbarItemsClass={this.navbarItemsClass}
                  shouldComponentUpdate={this.shouldComponentUpdate}
                />
              </div>
              <button className="button hide-xl">
                Икринки
                <span className="button__icon">
                  <img src="assets/img/egg.svg" alt="" />
                </span>
              </button>
              <NavbarLink to="#" className="navbar__cart">
                <div className="navbar__cart-info">3 поз. / 180р</div>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </NavbarLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
