import React from "react";
import NavbarItem from "../__item/NavbarItemView";
import ComponentWithEvents from "../../../eventComponents/ComponentWithEvents";

export default class NavbarItemsView extends ComponentWithEvents {
  constructor(props) {
    super(props);
    if (props.checkPath) {
      this.menuItems = props.menuItems;
      this.checkPath = props.checkPath;
      this.updateMenuItems(props.location.pathname);
    } else {
      this.items = props.menuItems;
    }
  }

  updateMenuItems(pathname) {
    const menuKeys = Object.keys(this.menuItems);
    Object.keys(this.menuItems).forEach((key) => {
      if (pathname === key) {
        this.navbarItemsClass = this.menuItems[key].classModifier;
        this.items = this.menuItems[key].items;
      } else if (
        (key == "*" || key == "") &&
        menuKeys.indexOf(pathname) === -1
      ) {
        this.navbarItemsClass = this.menuItems[key].classModifier;
        this.items = this.menuItems[key].items;
      }
    });
  }

  shouldComponentUpdate(nextProps) {
    if (!this.props.checkPath) return false;
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.updateMenuItems(nextProps.location.pathname);
      return true;
    }
    return false;
  }

  render() {
    const { location, modifier } = this.props;
    const elements = this.items.map((item, index) => {
      const className = !index ? " navbar__item_without-margin" : "";
      return (
        <li key={item.id} className={`navbar__item${className}`}>
          <NavbarItem
            to={item.link}
            className="link navbar__link"
            active={location.pathname === item.link}
            imageSrc={item.imageSrc}
            parent={this.parent}
          >
            {item.title}
          </NavbarItem>
        </li>
      );
    });
    return (
      <ul
        className={`navbar__items ${
          modifier ? ` navbar__items_${modifier}` : ""
        } ${this.navbarItemsClass ? this.navbarItemsClass : ""}`}
      >
        {elements}
      </ul>
    );
  }
}
