import React from "react";

export default function(props) {
  const className = `tiles__category tiles__category_${props.category}`,
    { title, link, imageSrcDesktop, imageSrcTablet, reversed } = props;
  let { subTitle } = props,
    imageTablet,
    imageDesktop;
  if (subTitle) {
    subTitle = <span className="tiles__category-sub-title">{subTitle}</span>;
  }
  if (imageSrcTablet && imageSrcDesktop) {
    imageTablet = (
      <img
        className="tiles__category-image show-lg"
        src={imageSrcTablet}
        alt=""
      />
    );
    imageDesktop = (
      <img
        className="tiles__category-image hide-lg"
        src={imageSrcDesktop}
        alt=""
      />
    );
  }
  if (imageSrcDesktop && !imageSrcTablet) {
    imageDesktop = (
      <img className="tiles__category-image" src={imageSrcDesktop} alt="" />
    );
  }
  if (imageSrcTablet && !imageSrcDesktop) {
    imageTablet = (
      <img className="tiles__category-image" src={imageSrcTablet} alt="" />
    );
  }
  if (reversed) {
    return (
      <a href={link} className={className}>
        <span className="tiles__category-title">
          {title}
          {subTitle}
        </span>
        {imageDesktop}
        {imageTablet}
      </a>
    );
  }
  return (
    <a href={link} className={className}>
      {imageDesktop}
      {imageTablet}
      <span className="tiles__category-title">
        {title}
        {subTitle}
      </span>
    </a>
  );
}
