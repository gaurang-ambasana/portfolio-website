import React from "react";

const InfoItem = ({ imgSrc, link, text, title }) => {
  return (
    <div className="c-info-item">
      <img src={imgSrc} alt="phone" className="c-icon" title={title} />
      <a href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </div>
  );
};

export default InfoItem;
