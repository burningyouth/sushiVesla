import React from "react";
import ComponentWithEvents from "../../eventComponents/ComponentWithEvents";

export default class ModalView extends ComponentWithEvents {
  constructor(props) {
    super(props);
    this.parent.elements[`${props.type}Modal`] = this;
    this.showClass = "modal_show";
    this.animateClass = "modal_animate";
    this.ref = React.createRef();
  }

  closeModal = () => {
    if (this.ref.current) {
      this.ref.current.classList.remove(this.animateClass);
      setTimeout(() => {
        this.ref.current.classList.remove(this.showClass);
      }, 400);
    }
  };

  showModal = () => {
    if (this.ref.current) {
      this.ref.current.classList.add(this.showClass);
      setTimeout(() => {
        this.ref.current.classList.add(this.animateClass);
      }, 10);
    }
  };

  render = () => {
    return (
      <div className="modal" ref={this.ref} onClick={this.closeModal}>
        <div className="modal__dialog">
          <div className="modal__header">
            <h4 className="modal__title">{this.props.title}</h4>
            <button className="modal__close-button"></button>
          </div>
          <div className="modal__content">{this.props.children}</div>
        </div>
      </div>
    );
  };
}
