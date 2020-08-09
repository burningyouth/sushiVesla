import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  const className = `tiles__category tiles__category_${props.category}`,
    { link, reversed } = props;
  let { imageSet } = props;
  imageSet = Object.keys(imageSet).map((key) => (
    <img
      key={key}
      className={`tiles__category-image tiles__category-image_${key}`}
      src={imageSet[key]}
      alt=""
    />
  ));

  if (reversed) {
    return (
      <Link to={link} className={className}>
        {props.children}
        <div className="tiles__category-images">{imageSet}</div>
      </Link>
    );
  }
  return (
    <Link to={link} className={className}>
      <div className="tiles__category-images">{imageSet}</div>
      {props.children}
    </Link>
  );
}
