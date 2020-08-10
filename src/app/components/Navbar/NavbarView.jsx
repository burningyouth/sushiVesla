import React from "react";
import NavbarItem from "./__item/NavbarItemView";
import NavbarItems from "./__items/NavbarItemsView";
import Cart from "../Cart/CartView";
import City from "../City/CityView";
import Language from "../Language/LanguageView";
import NavbarContentWrapper from "./__content-wrapper/NavbarContentWrapperView";
import Burger from "../Burger/BurgerView";
import Logo from "../Logo/LogoView";
import { Link } from "react-router-dom";
import ComponentWithEvents from "../../eventComponents/ComponentWithEvents";

export default class NavbarView extends ComponentWithEvents {
  constructor(props) {
    super(props);
    this.parent.elements.navbar = this;
    this._presenter = this.parent._presenter;

    this.collapsedClass = "navbar_collapsed";
    this.state = {
      menuCollapsed: false,
    };
    this.elements = {};
    this.ref = React.createRef();
    this.cartRef = React.createRef();
    this.cityRef = React.createRef();
    this.menuInfo = this._presenter.menuInfo;
    this.menuCategories = this._presenter.menuCategories;
    this.menuDesktop = {
      "/": {
        classModifier: "navbar__items_bounded",
        items: this._presenter.menuIndex,
      },
      "*": {
        classModifier: "",
        items: this._presenter.menuCategories.slice(0, 8),
      },
    };
  }

  closeMenu = () => {
    if (this.state.menuCollapsed == true)
      this.setState({
        menuCollapsed: false,
      });
  };

  componentDidMount() {
    this.on("burgerClicked", () => {
      this.setState({
        menuCollapsed: !this.state.menuCollapsed,
      });
    });
  }

  render = () => {
    const translation = this.parent.translation;
    return (
      <header className="pt-45 pb-45">
        <div
          className={`navbar ${
            this.state.menuCollapsed ? this.collapsedClass : ""
          }`}
          onClick={this.closeMenu}
          ref={this.ref}
        >
          <NavbarContentWrapper modifier="mobile" type="mobile">
            <div className="navbar__content pt-10 pb-10">
              <Logo to="/" src="assets/img/logo-phone.png" alt="logo" />
              <NavbarItem to="#" className="link navbar__link link_bold">
                {translation["ACCOUNT"]}
                <i className="fa fa-sign-in-alt ml-5" aria-hidden="true"></i>
              </NavbarItem>
            </div>
            <div className="navbar__content">
              <div className="navbar__content">
                <NavbarItems
                  location={this.props.location}
                  navbarItemsClass={this.navbarItemsClass}
                  menuItems={this.menuCategories.slice(0, 6)}
                  parent={this}
                  showImage
                />
              </div>
              <div className="navbar__content">
                <NavbarItems
                  location={this.props.location}
                  navbarItemsClass={this.navbarItemsClass}
                  menuItems={this.menuCategories.slice(7)}
                  parent={this}
                  showImage
                />
              </div>
            </div>
            <div className="navbar__content">
              <NavbarItems
                location={this.props.location}
                navbarItemsClass={this.navbarItemsClass}
                menuItems={this.menuInfo}
                parent={this}
                showImage
              />
            </div>
            <div className="navbar__content">
              <ul className="navbar__items navbar__items_socials">
                <li className="navbar__item ml-0">
                  <Link to="/catalog" className="link">
                    <i className="fab fa-facebook-square"></i>
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/catalog" className="link">
                    <i className="fab fa-vk"></i>
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/catalog" className="link">
                    <i className="fab fa-odnoklassniki-square"></i>
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/catalog" className="link">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar__content">
              <ul className="navbar__items navbar__items_apps">
                <li className="navbar__item">
                  <Link to="/catalog">
                    <img src="assets/img/google-play.png" alt="Gogle Play" />
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link to="/catalog">
                    <img src="assets/img/app-store.png" alt="AppStore" />
                  </Link>
                </li>
              </ul>
            </div>
          </NavbarContentWrapper>

          <NavbarContentWrapper
            modifier="desktop"
            className="container container_fluid"
            type="desktop"
          >
            <div className="navbar__content">
              <div className="show-mdlg">
                <Burger parent={this} />
              </div>
              <Logo
                modifier="desktop"
                to="/"
                src="assets/img/logo.png"
                alt="logo"
              />
              <Logo
                modifier="mobile"
                to="/"
                src="assets/img/logo-phone.png"
                alt="logo"
              />
              <ul className="navbar__items navbar__items_bounded navbar__items_align-left ml-lg-30 ml-10">
                <li className="navbar__item navbar__item_without-margin hide-mdlg">
                  <Language parent={this.parent} />
                </li>
                <li className="navbar__item ml-lg-15 ml-5 ">
                  <City
                    ref={this.cityRef}
                    defaultCity="Волжский"
                    parent={this.parent}
                  ></City>
                </li>
                <li className="navbar__item hide-mdlg ml-15">
                  <a href="tel:88005503030" className="link navbar__link ">
                    8-800-550-30-30
                  </a>
                </li>
                <NavbarItem
                  parent={this}
                  to="#"
                  className="hide-mdlg ml-0 ml-xxl-10"
                  linkClassName="link_bold"
                >
                  {translation["ACCOUNT"]}
                  <i className="fa fa-sign-in-alt ml-5" aria-hidden="true"></i>
                </NavbarItem>
              </ul>
            </div>
            <div className="navbar__content navbar__content_right">
              <div className="navbar__content hide-mdlg mr-30">
                <NavbarItems
                  location={this.props.location}
                  navbarItemsClass={this.navbarItemsClass}
                  menuItems={this.menuDesktop}
                  parent={this}
                  modifier="align-right"
                  checkPath
                />
              </div>
              <Link to="/" className="button hide-xl">
                {translation["CAVIAR"]}
                <span className="button__icon">
                  <img src="assets/img/egg.svg" alt="" />
                </span>
                <div className="tooltip button__tooltip">
                  <div className="tooltip__content">
                    {translation["CAVIAR_TOOLTIP"]}
                  </div>
                </div>
              </Link>
              <Cart parent={this.parent} to="#" info="" ref={this.cartRef} />
            </div>
          </NavbarContentWrapper>
        </div>
      </header>
    );
  };
}
