import React from "react";
import TilesCategory from "./TilesCategoryView";

export default function() {
  return (
    <div className="container container_fluid">
      <section className="tiles mt-15">
        <div className="tiles__category-container tiles__category-container_blue">
          <TilesCategory
            category="sets"
            title="Сеты"
            link="/"
            imageSrcTablet="assets/img/sets_tablet.png"
            imageSrcDesktop="assets/img/sets_desktop.png"
          />
        </div>
        <div className="tiles__category-container tiles__category-container_red pt-20 pb-20">
          <TilesCategory
            category="basic-rolls"
            title="Роллы"
            link="/"
            imageSrcDesktop="assets/img/rolls_desktop.png"
          />
          <TilesCategory
            category="sushi"
            title="Суши"
            link="/"
            imageSrcDesktop="assets/img/sushi_desktop.png"
            reversed
          />
          <TilesCategory
            category="fried-rolls"
            title="Жаренные роллы"
            link="/"
            imageSrcDesktop="assets/img/fried_rolls_desktop.png"
          />
          <TilesCategory
            category="baked-rolls"
            title="Запеченые роллы"
            link="/"
            imageSrcDesktop="assets/img/baked_rolls_desktop.png"
            reversed
          />
        </div>
        <div className="tiles__category-container">
          <a href="/" className="tiles__category tiles__category_wok">
            <span className="tiles__category-title">
              Вок
              <br />
              конструк
              <br />
              тор
              <span className="tiles__category-sub-title">Собери свой</span>
            </span>

            <img
              className="tiles__category-image hide-lg"
              src="assets/img/wok_desktop.png"
              alt=""
            />
            <img
              className="tiles__category-image show-lg"
              src="assets/img/wok_tablet.png"
              alt=""
            />
          </a>
        </div>
        <div className="tiles__category-set">
          <div className="tiles__category-container tiles__category-container_red">
            <TilesCategory
              category="soups"
              title="Супы"
              link="/"
              imageSrcDesktop="assets/img/soups_desktop.png"
            />
          </div>
          <div className="tiles__category-container tiles__category-container_green">
            <TilesCategory
              category="tempura"
              title="Темпура"
              link="/"
              imageSrcDesktop="assets/img/tempura_desktop.png"
            />
            <TilesCategory
              category="drinks"
              title="Напитки"
              link="/"
              imageSrcDesktop="assets/img/beverages_desktop.png"
              reversed
            />
          </div>
        </div>
      </section>
    </div>
  );
}
