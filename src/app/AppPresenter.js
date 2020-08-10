import BasicClassWithEvents from "./eventComponents/BasicClassWithEvents";

export default class AppPresenter extends BasicClassWithEvents {
  constructor(view, model) {
    super(model);
    this._view = view;
    this._model = model;

    this.on("citySelected", (city) => {
      model.currentCity = city;
    });

    this.on("cartAdd", (itemPrice) => {
      model.cartTotal += itemPrice;
      model.cartCount += 1;
      view.exec("cartUpdated", this.cart);
    });

    this.on("cartRemove", (itemPrice) => {
      model.cartTotal -= itemPrice;
      model.cartCount -= 1;
      view.exec("cartUpdated", this.cart);
    });

    this.on("languageSwitched", (lang) => {
      model.currentLanguage = lang;
    });
  }

  get translation() {
    return this._model.translation;
  }

  get catalog() {
    return this._model.catalog;
  }

  get info() {
    return this._model.info;
  }

  get cities() {
    return this._model.cities;
  }

  get menus() {
    return this._model.menus;
  }

  get menuInfo() {
    return this.menus.menuInfo;
  }

  get menuCategories() {
    return this.menus.menuCategories;
  }

  get menuIndex() {
    return this.menus.menuIndex;
  }

  get currentCity() {
    return this._model.currentCity;
  }

  get cart() {
    return {
      total: this._model.cartTotal,
      count: this._model.cartCount,
    };
  }
}
