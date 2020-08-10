import BasicClassWithEvents from "../../eventComponents/basicClassWithEvents";

export default class CatalogPresenter extends BasicClassWithEvents {
  constructor(view, model) {
    super(model);
    this._view = view;
    this._model = model;
    this.on("cartAdd", (itemPrice) => {
      model.total += itemPrice;
      model.count += 1;
      view.trigger("cartUpdated", false, {
        total: model.total,
        count: model.count,
      });
    });
    this.on("cartRemove", (itemPrice) => {
      model.total -= itemPrice;
      model.count -= 1;
      view.trigger("cartUpdated", false, {
        total: model.total,
        count: model.count,
      });
    });
  }

  get items() {
    return this._model.items;
  }
}
