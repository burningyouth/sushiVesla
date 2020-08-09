import React from "react";

export default function() {
  return (
    <div className="footer__ghost-element">
      <footer className="navbar navbar_bottom footer">
        <nav className="footer__content-wrapper container container_fluid">
          <ul className="footer__socials">
            <li className="navbar__item ml-0">
              <a href="/" className="link">
                <i className="fab fa-facebook-square footer__icon"></i>
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="link">
                <i className="fab fa-vk footer__icon"></i>
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="link">
                <i className="fab fa-odnoklassniki-square footer__icon"></i>
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="footer__link link">
                <i className="fab fa-instagram footer__icon"></i>
              </a>
            </li>
            <div className="footer__location hide-md">
              <a href="/" className="link footer__link">
                <i className="fas fa-map-marked-alt footer__icon"></i>
                Ближайшие СушиВесла
              </a>
            </div>
          </ul>
          <ul className="footer__about">
            <li className="navbar__item footer__location show-md">
              <a href="/" className="link footer__link">
                <i className="fas fa-map-marked-alt footer__icon"></i>
                Ближайшие СушиВесла
              </a>
            </li>
            <li className="navbar__item">
              <a className="link footer__link" href="/">
                Условия доставки
              </a>
            </li>
            <li className="navbar__item">
              <a className="link footer__link" href="/">
                Акции
              </a>
            </li>
            <li className="navbar__item">
              <a className="link footer__link" href="/">
                Новости
              </a>
            </li>
            <li className="navbar__item">
              <a className="link footer__link" href="/">
                Франшиза
              </a>
            </li>
            <li className="navbar__item">
              <a className="link footer__link" href="/">
                Вакансии
              </a>
            </li>
            <li className="navbar__item">
              <a className="link footer__link" href="/">
                Отзывы
              </a>
            </li>
            <li className="navbar__item">
              <a className="link footer__link" href="/">
                Пользовательское соглашение
              </a>
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
              <a href="/">
                <img src="assets/img/google-play.png" alt="Gogle Play" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="/">
                <img src="assets/img/app-store.png" alt="AppStore" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
