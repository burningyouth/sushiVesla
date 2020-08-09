import React from "react";
import NavbarLink from "./NavbarLinkView";

export default function(props) {
  const { menuItems, location, navbarItemsClass } = props;
  const menuElements = menuItems.map((item, index) => {
    const className = !index ? " navbar__item_without-margin" : "";
    return (
      <li key={item.id} className={`navbar__item${className}`}>
        <NavbarLink
          to={item.link}
          className="link navbar__link"
          active={location.pathname === item.link}
        >
          {item.title}
        </NavbarLink>
      </li>
    );
  });
  return (
    <ul
      className={`navbar__items navbar__items_align-right ${navbarItemsClass}`}
      id="navbar__items"
    >
      {menuElements}
    </ul>
  );
}
