import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarItem from "../Navbar/__item/NavbarItemView";

export default class FooterView extends Component {
  constructor(props) {
    super(props);
    this.parent = props.parent;
    this._presenter = this.parent._presenter;

    this.menu = this._presenter.menuInfo;
    this.menuElements = this.menu.map((item) => {
      return (
        <NavbarItem to={item.link} key={item.id}>
          {item.title}
        </NavbarItem>
      );
    });
  }
  render() {
    return (
      <div className="footer__ghost-element">
        <footer className="navbar navbar_bottom footer">
          <nav className="footer__content-wrapper container container_fluid">
            <ul className="footer__socials">
              <NavbarItem to="/catalog">
                <i className="fab fa-facebook-square footer__icon"></i>
              </NavbarItem>
              <NavbarItem to="/catalog">
                <i className="fab fa-vk footer__icon"></i>
              </NavbarItem>
              <NavbarItem to="/catalog">
                <i className="fab fa-odnoklassniki-square footer__icon"></i>
              </NavbarItem>
              <NavbarItem to="/catalog">
                <i className="fab fa-instagram footer__icon"></i>
              </NavbarItem>
              <div className="footer__location hide-md">
                <Link to="/catalog" className="link footer__link">
                  <i className="fas fa-map-marked-alt footer__icon"></i>
                  Ближайшие СушиВесла
                </Link>
              </div>
            </ul>
            <ul className="footer__about">
              <li className="navbar__item footer__location show-md">
                <Link to="/catalog" className="link footer__link">
                  <i className="fas fa-map-marked-alt footer__icon"></i>
                  Ближайшие СушиВесла
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="link footer__link" to="/catalog">
                  Условия доставки
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="link footer__link" to="/catalog">
                  Акции
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="link footer__link" to="/catalog">
                  Новости
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="link footer__link" to="/catalog">
                  Франшиза
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="link footer__link" to="/catalog">
                  Вакансии
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="link footer__link" to="/catalog">
                  Отзывы
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="link footer__link" to="/catalog">
                  Пользовательское соглашение
                </Link>
              </li>
            </ul>
            <ul className="footer__misc">
              <li className="navbar__item">
                <img src="assets/img/master-card.svg" alt="MasterCard" />
              </li>
              <li className="navbar__item">
                <img src="assets/img/visa.svg" alt="Visa" />
              </li>
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
          </nav>
        </footer>
      </div>
    );
  }
}
