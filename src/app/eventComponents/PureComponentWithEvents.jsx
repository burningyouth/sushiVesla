import { PureComponent } from "react";

export default class PureComponentWithEvents extends PureComponent {
  constructor(props) {
    super(props);
    this._eventHandlers = {};
    this.parent = props.parent;
  }

  on(eventType, handler) {
    const eventTypes = eventType.split(" ");
    eventTypes.forEach((event) => {
      if (this._eventHandlers[event]) this._eventHandlers[event].push(handler);
      else {
        this._eventHandlers[event] = [handler];
      }
    });
  }

  off(eventType) {
    const eventTypes = eventType.split(" ");
    eventTypes.forEach((event) => {
      if (this._eventHandlers[event]) delete this._eventHandlers[event];
    });
  }

  exec(eventType, ...args) {
    const eventTypes = eventType.split(" ");
    eventTypes.forEach((event) => {
      if (this._eventHandlers[event])
        this._eventHandlers[event].forEach((handler) =>
          handler.call(this, ...args)
        );
    });
  }

  trigger(eventType, ...args) {
    this.exec(eventType, ...args);
    if (this.parent && this.parent.trigger)
      this.parent.trigger(eventType, true, ...args);
  }
}
