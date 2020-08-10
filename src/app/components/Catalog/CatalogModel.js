import BasicClassWithEvents from "../../eventComponents/basicClassWithEvents";
import items from "./example.json";

export default class CatalogModel extends BasicClassWithEvents {
  constructor(props = {}) {
    super();
    this._total = props.total ? props.total : 0;
    this._count = props.count ? props.count : 0;

    this.fetchCatalog();
  }

  fetchCatalog() {
    this.items = JSON.parse(JSON.stringify(items)).items;
  }

  get total() {
    return this._total;
  }

  set total(newTotal) {
    if (newTotal >= 0) {
      this._total = newTotal;
    } else {
      throw new RangeError(
        `Неверное значение! Общая сумма не может быть равна ${newTotal}`
      );
    }
  }

  get count() {
    return this._count;
  }

  set count(newCount) {
    if (newCount >= 0) {
      this._count = newCount;
    } else {
      throw new RangeError(
        `Неверное значение! Общая количество не может быть равно ${newCount}`
      );
    }
  }
}
