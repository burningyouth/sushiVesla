import React from "react";
import NavbarItem from "./__item/NavbarItemView";
import NavbarItems from "./__items/NavbarItemsView";
import NavbarCart from "./__cart/NavbarCartView";
import City from "../City/CityView";
import NavbarContentWrapper from "./__content-wrapper/NavbarContentWrapperView";
import Burger from "../Burger/BurgerView";
import Logo from "../Logo/LogoView";
import { Link } from "react-router-dom";
import ComponentWithEvents from "../../eventComponents/ComponentWithEvents";

export default class NavbarView extends ComponentWithEvents {
  constructor(props) {
    super(props);
    this.parent.elements.navbar = this;
    this.collapsedClass = "navbar_collapsed";
    this.state = {
      menuCollapsed: false,
    };
    this.elements = {};
    this.ref = React.createRef();
    this.cartRef = React.createRef();
    this.cityRef = React.createRef();
    this.menuInfo = [
      {
        id: 0,
        title: "Выбрать город",
        link: "/sets",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 1,
        title: "О компании",
        link: "/about",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 2,
        title: "Условия доставки",
        link: "/delivery",
        imageSrc: "assets/img/rolls.svg",
      },
      {
        id: 3,
        title: "Акции",
        link: "/agreement",
        imageSrc: "assets/img/rolls.svg",
      },
      {
        id: 4,
        title: "О компании",
        link: "/about",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 5,
        title: "Условия доставки",
        link: "/delivery",
        imageSrc: "assets/img/rolls.svg",
      },
      {
        id: 6,
        title: "Акции",
        link: "/agreement",
        imageSrc: "assets/img/rolls.svg",
      },
      {
        id: 7,
        title: "О компании",
        link: "/about",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 8,
        title: "Условия доставки",
        link: "/delivery",
        imageSrc: "assets/img/rolls.svg",
      },
      {
        id: 9,
        title: "Акции",
        link: "/agreement",
        imageSrc: "assets/img/rolls.svg",
      },
    ];
    this.menuCategories = [
      {
        id: 0,
        title: "Сеты",
        link: "/sets",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 1,
        title: "Воки",
        link: "/woks",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 2,
        title: "Роллы",
        link: "/catalog",
        imageSrc: "assets/img/rolls.svg",
      },
      {
        id: 3,
        title: "Гриль роллы",
        link: "/grill-rolls",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 4,
        title: "Темпура",
        link: "/tempura",
        imageSrc: "assets/img/rolls.svg",
      },
      {
        id: 5,
        title: "Premium меню",
        link: "/premium",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 6,
        title: "Суши",
        link: "/sushi",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 7,
        title: "Супы",
        link: "/more",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 8,
        title: "Напитки",
        link: "/premium",
        imageSrc: "assets/img/rolls.svg",
      },
      {
        id: 9,
        title: "Салаты",
        link: "/sushi",
        imageSrc: "assets/img/rolls.svg",
      },
      {
        id: 10,
        title: "Соусы",
        link: "/more",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 11,
        title: "Разное",
        link: "/sushi",
        imageSrc: "assets/img/sets.svg",
      },
      {
        id: 12,
        title: "Соусы",
        link: "/more",
        imageSrc: "assets/img/sets.svg",
      },
    ];
    this.menuCategoriesDesktop = [
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
    this.menuDesktop = {
      "/": {
        classModifier: "navbar__items_bounded",
        items: [
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
        ],
      },
      "*": {
        classModifier: "",
        items: this.menuCategoriesDesktop,
      },
    };
  }

  closeMenu = () => {
    if (this.state.menuCollapsed == true)
      this.setState({
        menuCollapsed: false,
      });
  };

  showModal = (modalKey) => {
    this.parent.elements[modalKey].showModal();
  };

  componentDidMount() {
    this.on("burgerClicked", () => {
      this.setState({
        menuCollapsed: !this.state.menuCollapsed,
      });
    });
  }

  render = () => {
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
              <NavbarItem
                parent={this}
                to="#"
                className="link navbar__link link_bold"
              >
                Личный кабинет
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
                />
              </div>
              <div className="navbar__content">
                <NavbarItems
                  location={this.props.location}
                  navbarItemsClass={this.navbarItemsClass}
                  menuItems={this.menuCategories.slice(7)}
                  parent={this}
                />
              </div>
            </div>
            <div className="navbar__content">
              <NavbarItems
                location={this.props.location}
                navbarItemsClass={this.navbarItemsClass}
                menuItems={this.menuInfo}
                parent={this}
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
              <ul className="navbar__items navbar__items_bounded navbar__items_align-left hide-mdlg ml-lg-30 ml-10">
                <li className="navbar__item navbar__item_without-margin hide-mdlg">
                  <button className="language-picker">
                    <img src="assets/img/ru.svg" alt="" />
                  </button>
                </li>
                <li className="navbar__item ml-lg-15 ml-10 ">
                  <City
                    ref={this.cityRef}
                    defaultCity="Волжский"
                    parent={this}
                  ></City>
                </li>
                <li className="navbar__item ml-15">
                  <a href="tel:88005503030" className="link navbar__link">
                    8-800-550-30-30
                  </a>
                </li>
                <li className="navbar__item ml-0 ml-xxl-10">
                  <NavbarItem
                    parent={this}
                    to="#"
                    className="link navbar__link link_bold"
                  >
                    Личный кабинет
                    <i
                      className="fa fa-sign-in-alt ml-5"
                      aria-hidden="true"
                    ></i>
                  </NavbarItem>
                </li>
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
                Икринки
                <span className="button__icon">
                  <img src="assets/img/egg.svg" alt="" />
                </span>
                <div className="tooltip button__tooltip">
                  <div className="tooltip__content">
                    Это кэшбек от СушиВесла, которым можно оплачивать заказы
                  </div>
                </div>
              </Link>
              <NavbarCart parent={this} to="#" info="" ref={this.cartRef} />
            </div>
          </NavbarContentWrapper>
        </div>
      </header>
    );
  };
}
