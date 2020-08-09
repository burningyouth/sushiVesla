import React from "react";

function NavbarView() {
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
            <a className="logo logo_desktop" href="/">
              <img src="assets/img/logo.png" alt="logo" />
            </a>
            <a className="logo logo_phone" href="/">
              <img src="assets/img/logo-phone.png" alt="logo" />
            </a>
            <ul className="navbar__items navbar__items_bounded navbar__items_align-left ml-md-30 ml-10">
              <li className="navbar__item navbar__item_without-margin hide-md">
                <button className="language-picker">
                  <img src="assets/img/ru.svg" alt="" />
                </button>
              </li>
              <li className="navbar__item ml-md-15 ml-10">
                <a href="/" className="link navbar__link">
                  Волжский
                  <i className="fa fa-angle-down ml-5" aria-hidden="true"></i>
                </a>
              </li>
              <li className="navbar__item ml-15 hide-md">
                <a href="tel:88005503030" className="link navbar__link">
                  8-800-550-30-30
                </a>
              </li>
              <li className="navbar__item ml-0 ml-xxl-10 hide-md">
                <a href="/" className="link navbar__link link_bold">
                  Личный кабинет
                  <i className="fa fa-sign-in-alt ml-5" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar__content navbar__content_right">
            <div className="navbar__content mr-30">
              <ul
                className="navbar__items navbar__items_bounded navbar__items_align-right"
                id="navbar__items"
              >
                <li className="navbar__item navbar__item_without-margin">
                  <a className="link navbar__link" href="#">
                    О компании
                  </a>
                </li>
                <li className="navbar__item ml-15">
                  <a className="link navbar__link" href="#">
                    Условия доставки
                  </a>
                </li>
                <li className="navbar__item ml-0 ml-xxl-10 ">
                  <a className="link navbar__link" href="#">
                    Пользовательское соглашение
                  </a>
                </li>
              </ul>
            </div>
            <button className="button hide-xl">
              Икринки
              <span className="button__icon">
                <img src="assets/img/egg.svg" alt="" />
              </span>
            </button>
            <a href="/" className="navbar__cart">
              <div className="navbar__cart-info">3 поз. / 180р</div>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarView;
