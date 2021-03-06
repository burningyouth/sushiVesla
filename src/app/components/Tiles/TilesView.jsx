import React from "react";
import TilesCategory from "./__category/TilesCategoryView";

export default function(props) {
  const translation = props.parent.translation;
  return (
    <div className="container container_fluid">
      <section className="tiles">
        <div className="tiles__category-container tiles__category-container_blue">
          <TilesCategory
            category="sets"
            link="/catalog"
            imageSet={{
              phone: "assets/img/sets_phone.png",
              tablet: "assets/img/sets_tablet.png",
              desktop: "assets/img/sets_desktop.png",
            }}
          >
            <span className="tiles__category-title">{translation["SETS"]}</span>
          </TilesCategory>
        </div>
        <div className="tiles__category-container tiles__category-container_red pt-20 pb-20">
          <TilesCategory
            category="basic-rolls"
            link="/catalog"
            imageSet={{
              phone: "assets/img/rolls_phone.png",
              tablet: "assets/img/rolls_tablet.png",
              desktop: "assets/img/rolls_desktop.png",
            }}
          >
            <span className="tiles__category-title">
              {translation["ROLLS"]}
            </span>
          </TilesCategory>
          <TilesCategory
            category="sushi"
            link="/catalog"
            imageSet={{
              phone: "assets/img/sushi_phone.png",
              tablet: "assets/img/sushi_tablet.png",
              desktop: "assets/img/sushi_desktop.png",
            }}
            reversed
          >
            <span className="tiles__category-title">
              {translation["SUSHI"]}
            </span>
          </TilesCategory>
          <TilesCategory
            category="fried-rolls"
            link="/catalog"
            imageSet={{
              phone: "assets/img/fried_rolls_phone.png",
              tablet: "assets/img/fried_rolls_tablet.png",
              desktop: "assets/img/fried_rolls_desktop.png",
            }}
          >
            <span className="tiles__category-title">
              {translation["FRIED_ROLLS"]}
            </span>
          </TilesCategory>
          <TilesCategory
            category="baked-rolls"
            link="/catalog"
            imageSet={{
              phone: "assets/img/baked_rolls_phone.png",
              tablet: "assets/img/baked_rolls_tablet.png",
              desktop: "assets/img/baked_rolls_desktop.png",
            }}
            reversed
          >
            <span className="tiles__category-title">
              {translation["BAKED_ROLLS"]}
            </span>
          </TilesCategory>
        </div>
        <div className="tiles__category-container">
          <TilesCategory
            category="wok"
            link="/catalog"
            imageSet={{
              phone: "assets/img/wok_phone.png",
              tablet: "assets/img/wok_tablet.png",
              desktop: "assets/img/wok_desktop.png",
            }}
            reversed
          >
            <span className="tiles__category-title hide-md">
              Вок
              <br />
              конструк
              <br />
              тор
              <span className="tiles__category-sub-title">Собери свой</span>
            </span>
            <span className="tiles__category-title show-md">
              {translation["WOKS"]}
            </span>
          </TilesCategory>
        </div>
        <div className="tiles__category-set">
          <div className="tiles__category-container tiles__category-container_red">
            <TilesCategory
              category="soups"
              link="/catalog"
              imageSet={{
                phone: "assets/img/soups_phone.png",
                tablet: "assets/img/soups_tablet.png",
                desktop: "assets/img/soups_desktop.png",
              }}
            >
              {" "}
              <span className="tiles__category-title">
                {translation["SOUPS"]}
              </span>
            </TilesCategory>
          </div>
          <div className="tiles__category-container tiles__category-container_green">
            <TilesCategory
              category="tempura"
              link="/catalog"
              imageSet={{
                phone: "assets/img/tempura_phone.png",
                tablet: "assets/img/tempura_tablet.png",
                desktop: "assets/img/tempura_desktop.png",
              }}
            >
              <span className="tiles__category-title">
                {translation["TEMPURA"]}
              </span>
            </TilesCategory>
            <TilesCategory
              category="drinks"
              link="/catalog"
              imageSet={{
                phone: "assets/img/beverages_phone.png",
                tablet: "assets/img/beverages_tablet.png",
                desktop: "assets/img/beverages_desktop.png",
              }}
              reversed
            >
              <span className="tiles__category-title">
                {translation["BEVERAGES"]}
              </span>
            </TilesCategory>
          </div>
        </div>
      </section>
    </div>
  );
}
