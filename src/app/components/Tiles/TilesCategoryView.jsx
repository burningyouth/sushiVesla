import React from "react";

export default function(props) {
  const className = `tiles__category tiles__category_${props.category}`,
    {
      title,
      link,
      imageSrcDesktop,
      imageSrcTablet,
      imageSrcPhone,
      reversed,
    } = props;
  let { subTitle } = props,
    imageTablet = (
      <img
        className="tiles__category-image tiles__category-image_tablet"
        src={imageSrcTablet}
        alt=""
      />
    ),
    imageDesktop = (
      <img
        className="tiles__category-image tiles__category-image_desktop"
        src={imageSrcDesktop}
        alt=""
      />
    ),
    imagePhone = (
      <img
        className="tiles__category-image tiles__category-image_phone"
        src={imageSrcPhone}
        alt=""
      />
    );
  if (subTitle) {
    subTitle = <span className="tiles__category-sub-title">{subTitle}</span>;
  }

  if (reversed) {
    return (
      <a href={link} className={className}>
        <span className="tiles__category-title">
          {title}
          {subTitle}
        </span>
        <div className="tiles__category-images">
          {imageDesktop}
          {imageTablet}
          {imagePhone}
        </div>
      </a>
    );
  }
  return (
    <a href={link} className={className}>
      <div className="tiles__category-images">
        {imageDesktop}
        {imageTablet}
        {imagePhone}
      </div>
      <span className="tiles__category-title">
        {title}
        {subTitle}
      </span>
    </a>
  );
}
