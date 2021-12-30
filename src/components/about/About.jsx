import "./about.css";
import aboutBg from "../../img/about-bg.jfif";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={aboutBg} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-about">About Me</h1>
        <p className="a-sub">??</p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          suscipit eveniet odio reiciendis alias quo laboriosam hic, nihil totam
          incidunt autem nesciunt aliquam cupiditate aut, enim fuga consequuntur
          labore quis.
        </p>
      </div>
    </div>
  );
};

export default About;
