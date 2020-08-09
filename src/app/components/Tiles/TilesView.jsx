import React from "react";
import TilesCategory from "./TilesCategoryView";

export default function() {
  return (
    <div className="container container_fluid">
      <section className="tiles">
        <div className="tiles__category-container tiles__category-container_blue">
          <TilesCategory
            category="sets"
            title="Сеты"
            link="/"
            imageSrcPhone="assets/img/sets_phone.png"
            imageSrcTablet="assets/img/sets_tablet.png"
            imageSrcDesktop="assets/img/sets_desktop.png"
          />
        </div>
        <div className="tiles__category-container tiles__category-container_red pt-20 pb-20">
          <TilesCategory
            category="basic-rolls"
            title="Роллы"
            link="/"
            imageSrcPhone="assets/img/rolls_phone.png"
            imageSrcTablet="assets/img/rolls_tablet.png"
            imageSrcDesktop="assets/img/rolls_desktop.png"
          />
          <TilesCategory
            category="sushi"
            title="Суши"
            link="/"
            imageSrcPhone="assets/img/sushi_phone.png"
            imageSrcTablet="assets/img/sushi_tablet.png"
            imageSrcDesktop="assets/img/sushi_desktop.png"
            reversed
          />
          <TilesCategory
            category="fried-rolls"
            title="Жаренные роллы"
            link="/"
            imageSrcPhone="assets/img/fried_rolls_phone.png"
            imageSrcTablet="assets/img/fried_rolls_tablet.png"
            imageSrcDesktop="assets/img/fried_rolls_desktop.png"
          />
          <TilesCategory
            category="baked-rolls"
            title="Запеченые роллы"
            link="/"
            imageSrcPhone="assets/img/baked_rolls_phone.png"
            imageSrcTablet="assets/img/baked_rolls_tablet.png"
            imageSrcDesktop="assets/img/baked_rolls_desktop.png"
            reversed
          />
        </div>
        <div className="tiles__category-container">
          <a href="/" className="tiles__category tiles__category_wok">
            <span className="tiles__category-title hide-md">
              Вок
              <br />
              конструк
              <br />
              тор
              <span className="tiles__category-sub-title">Собери свой</span>
            </span>
            <span className="tiles__category-title show-md">Воки</span>
            <div className="tiles__category-images">
              <img
                className="tiles__category-image tiles__category-image_desktop"
                src="assets/img/wok_desktop.png"
                alt=""
              />
              <img
                className="tiles__category-image tiles__category-image_tablet"
                src="assets/img/wok_tablet.png"
                alt=""
              />
              <img
                className="tiles__category-image tiles__category-image_phone"
                src="assets/img/wok_phone.png"
                alt=""
              />
            </div>
          </a>
        </div>
        <div className="tiles__category-set">
          <div className="tiles__category-container tiles__category-container_red">
            <TilesCategory
              category="soups"
              title="Супы"
              link="/"
              imageSrcPhone="assets/img/soups_phone.png"
              imageSrcTablet="assets/img/soups_tablet.png"
              imageSrcDesktop="assets/img/soups_desktop.png"
            />
          </div>
          <div className="tiles__category-container tiles__category-container_green">
            <TilesCategory
              category="tempura"
              title="Темпура"
              link="/"
              imageSrcPhone="assets/img/tempura_phone.png"
              imageSrcTablet="assets/img/tempura_tablet.png"
              imageSrcDesktop="assets/img/tempura_desktop.png"
            />
            <TilesCategory
              category="drinks"
              title="Напитки"
              link="/"
              imageSrcPhone="assets/img/beverages_phone.png"
              imageSrcTablet="assets/img/beverages_tablet.png"
              imageSrcDesktop="assets/img/beverages_desktop.png"
              reversed
            />
          </div>
        </div>
      </section>
    </div>
  );
}
