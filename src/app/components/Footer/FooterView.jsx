import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div className="footer__ghost-element">
      <footer className="navbar navbar_bottom footer">
        <nav className="footer__content-wrapper container container_fluid">
          <ul className="footer__socials">
            <li className="navbar__item ml-0">
              <Link to="/catalog" className="link">
                <i className="fab fa-facebook-square footer__icon"></i>
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/catalog" className="link">
                <i className="fab fa-vk footer__icon"></i>
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/catalog" className="link">
                <i className="fab fa-odnoklassniki-square footer__icon"></i>
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/catalog" className="footer__link link">
                <i className="fab fa-instagram footer__icon"></i>
              </Link>
            </li>
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
