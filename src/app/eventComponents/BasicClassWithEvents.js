export default class BasicClassWithEvents {
  constructor(eventFireTo = false) {
    this._eventHandlers = {};
    this.eventFireTo = eventFireTo;
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

  trigger(eventType, triggerOnThis = true, ...args) {
    if (triggerOnThis) this.exec(eventType, ...args);
    if (this.eventFireTo && this.eventFireTo.trigger)
      this.eventFireTo.trigger(eventType, true, ...args);
  }
}
