import "./contactInfo.css";
import emailIcon from "../../img/email.png";
import phoneIcon from "../../img/phone.png";
import githubIcon from "../../img/github.png";
import twitterIcon from "../../img/twitter.png";
import linkedinIcon from "../../img/linkedin.png";
import ContactForm from "../contact-form/ContactForm";

const ContactInfo = () => {
  return (
    <div className="c" style={{ height: "auto" }}>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss over a Coffee 🥤</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phoneIcon} alt="phone" className="c-icon" />
              <a href="tel:+91-9033835053">+91-9033835053</a>
            </div>
            <div className="c-info-item" title="Email">
              <img src={emailIcon} alt="email" className="c-icon" />
              <a href="mailto:gpambasana@gmail.com">gpambasana@gmail.com</a>
            </div>
            <div className="c-info-item" title="LinkedIn">
              <img src={linkedinIcon} alt="linkedin" className="c-icon" />
              <a
                href="https://www.linkedin.com/in/gpambasana/"
                target="_blank"
                rel="noreferrer"
              >
                Gaurang Ambasana
              </a>
            </div>
            <div className="c-info-item" title="GitHub">
              <img src={githubIcon} alt="github" className="c-icon" />
              <a
                href="https://github.com/gaurang-ambasana"
                target="_blank"
                rel="noreferrer"
              >
                gaurang-ambasana
              </a>
            </div>
            <div className="c-info-item" title="Leetcode">
              <img
                src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
                alt="Leetcode"
                className="c-icon"
              />
              <a
                href="https://leetcode.com/gpambasana/"
                target="_blank"
                rel="noreferrer"
              >
                gpambasana
              </a>
            </div>
            <div className="c-info-item" title="HackerRank">
              <img
                src="https://hrcdn.net/fcore/assets/work/header/hackerrank_logo-21e2867566.svg"
                alt="HackerRank"
                className="c-icon"
              />
              <a
                href="https://www.hackerrank.com/gpambasana?hr_r=1"
                target="_blank"
                rel="noreferrer"
              >
                gpambasana
              </a>
            </div>
            <div className="c-info-item" title="Twitter">
              <img src={twitterIcon} alt="twiiter" className="c-icon" />
              <a
                href="https://twitter.com/GaurangAmbasana"
                target="_blank"
                rel="noreferrer"
              >
                @GaurangAmbasana
              </a>
            </div>
            <div className="c-info-item" title="Instagram">
              <img
                src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png"
                alt="Instagram"
                className="c-icon"
              />
              <a
                href="https://twitter.com/GaurangAmbasana"
                target="_blank"
                rel="noreferrer"
              >
                gaurang_ambasana
              </a>
            </div>
            <div className="c-info-item" title="Facebook">
              <img
                src="https://seeklogo.com/images/F/facebook-logo-966BBFBC34-seeklogo.com.png"
                alt="facebook"
                className="c-icon"
              />
              <a
                href="https://www.facebook.com/gaurang.ambasana/"
                target="_blank"
                rel="noreferrer"
              >
                Gaurang Ambasana
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <h1 className="c-desc">Let's get in touch!</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
