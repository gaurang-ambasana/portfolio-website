import "./about.css";
import aboutBg from "../../img/about-bg.jfif";
import { skillsLeft, skillsRight } from "./skills";

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
        <p className="a-sub">I'm an Aspiring Full Stack Developer</p>
        <br />
        <p className="a-desc">
          Being a Software Engineer, you should believe in forever learning
          principles. <br /> My area of expertise includes but not limited to
        </p>
        <br />
        <div className="skill-list">
          <div className="s-left">
            {skillsLeft.map(({ name, img }, id) => (
              <div key={id} className="s-item">
                <img src={img} alt={name} className="s-img" />
                <p>{name}</p>
              </div>
            ))}
          </div>
          <div className="s-right">
            {skillsRight.map(({ name, img }, id) => (
              <div key={id} className="s-item">
                <img src={img} alt={name.substring(0, 2)} className="s-img" />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
