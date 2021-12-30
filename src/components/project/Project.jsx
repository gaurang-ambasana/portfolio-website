import React from "react";
import "./project.css";
import { string as stringPropType } from "prop-types";

const Project = ({ name, img, link }) => {
  const imgPath = require("./project-imgs/" + img);

  return (
    <div className="project">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={imgPath} alt="" className="p-img" />
      </a>
      <p className="p-name">{name}</p>
    </div>
  );
};

Project.propTypes = {
  name: stringPropType,
  img: stringPropType,
  link: stringPropType,
};

export default Project;
