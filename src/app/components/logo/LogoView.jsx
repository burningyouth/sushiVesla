import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <Link
      className={`logo${props.modifier ? ` logo_${props.modifier}` : ""}`}
      to={props.to}
    >
      <img src={props.src} alt={props.alt} />
    </Link>
  );
}
