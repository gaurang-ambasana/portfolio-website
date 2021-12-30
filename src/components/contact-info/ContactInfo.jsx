import "./contactInfo.css";
import emailIcon from "../../img/email.png";
import phoneIcon from "../../img/phone.png";
import addressIcon from "../../img/address.png";
import githubIcon from "../../img/github.png";
import twitterIcon from "../../img/twitter.png";
import linkedinIcon from "../../img/linkedin.png";
import ContactForm from "../contact-form/ContactForm";

const ContactInfo = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss over a Coffee 🥤</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phoneIcon} alt="phone" className="c-icon" />
              <a href="tel:+91-9033835053">+91-9033835053</a>
            </div>
            <div className="c-info-item">
              <img src={emailIcon} alt="email" className="c-icon" />
              <a href="mailto:gpambasana@gmail.com">gpambasana@gmail.com</a>
            </div>
            <div className="c-info-item">
              <img src={githubIcon} alt="github" className="c-icon" />
              <a
                href="https://github.com/gaurang-ambasana"
                target="_blank"
                rel="noreferrer"
              >
                gaurang-ambasana
              </a>
            </div>
            <div className="c-info-item">
              <img src={linkedinIcon} alt="linkedin" className="c-icon" />
              <a
                href="https://www.linkedin.com/in/gpambasana/"
                target="_blank"
                rel="noreferrer"
              >
                Gaurang Ambasana
              </a>
            </div>
            <div className="c-info-item">
              <img src={twitterIcon} alt="twiiter" className="c-icon" />
              <a
                href="https://twitter.com/GaurangAmbasana"
                target="_blank"
                rel="noreferrer"
              >
                @GaurangAmbasana
              </a>
            </div>
            <div className="c-info-item">
              <img src={addressIcon} alt="address" className="c-icon" />
              <a
                href="https://goo.gl/maps/cjLUHj91eVjYvc3F8"
                target="_blank"
                rel="noreferrer"
              >
                Rajkot, Gujarat, India
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
