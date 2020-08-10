import BasicClassWithEvents from "./eventComponents/BasicClassWithEvents";
import catalog from "./catalog.json";
import menus from "./menus.json";
import cities from "./cities.json";
import info from "./info.json";

export default class AppModel extends BasicClassWithEvents {
  constructor() {
    super();
    this.catalog = this.parseJSON(catalog);
    this.info = this.parseJSON(info);
    this.cities = this.parseJSON(cities);
    this.menus = this.parseJSON(menus);

    this._currentCity = this.info.defaultCity
      ? this.info.defaultCity
      : "Москва";
    this._cartTotal = this.info.defaultCartTotal;
    this._cartCount = this.info.defaultCartCount;
  }

  parseJSON(json) {
    return JSON.parse(JSON.stringify(json));
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
    return this._currentCity;
  }

  get cartTotal() {
    return this._cartTotal;
  }

  get cartCount() {
    return this._cartCount;
  }

  set cartTotal(newTotal) {
    if (newTotal >= 0) {
      this._cartTotal = newTotal;
    } else {
      throw new RangeError(
        `Неверное значение! Общая сумма не может быть равна ${newTotal}`
      );
    }
  }

  set cartCount(newCount) {
    if (newCount >= 0) {
      this._cartCount = newCount;
    } else {
      throw new RangeError(
        `Неверное значение! Общая количество не может быть равно ${newCount}`
      );
    }
  }
}
