import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  const { to, active } = props;
  const activeClass = active ? " link_active" : "";
  return (
    <Link to={to} className={`${props.className} ${activeClass}`}>
      {props.children}
    </Link>
  );
}
