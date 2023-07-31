import "./contactInfo.css";
import emailIcon from "../../img/email.png";
import phoneIcon from "../../img/phone.png";
import githubIcon from "../../img/github.png";
import twitterIcon from "../../img/twitter.png";
import linkedinIcon from "../../img/linkedin.png";
import ContactForm from "../contact-form/ContactForm";
import InfoItem from "./InfoItem";

const ContactInfo = () => {
  const infoDetails = [
    {
      title: "Phone",
      text: "+91-9033835053",
      imgSrc: phoneIcon,
      link: "tel:+91-9033835053",
    },
    {
      title: "Email",
      text: "gpambasana@gmail.com",
      imgSrc: emailIcon,
      link: "mailto:gpambasana@gmail.com",
    },
    {
      title: "LinkedIn",
      text: "Gaurang Ambasana",
      imgSrc: linkedinIcon,
      link: "https://www.linkedin.com/in/gpambasana/",
    },
    {
      title: "GitHub",
      text: "gaurang-ambasana",
      imgSrc: githubIcon,
      link: "https://github.com/gaurang-ambasana",
    },
    {
      title: "Leetcode",
      text: "gpambasana",
      imgSrc:
        "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png",
      link: "https://leetcode.com/gpambasana/",
    },
    {
      title: "HackerRank",
      text: "gpambasana",
      imgSrc:
        "https://hrcdn.net/fcore/assets/work/header/hackerrank_logo-21e2867566.svg",
      link: "https://www.hackerrank.com/gpambasana?hr_r=1",
    },
    {
      title: "Twitter",
      text: "@GaurangAmbasana",
      imgSrc: twitterIcon,
      link: "https://twitter.com/GaurangAmbasana",
    },
    {
      title: "Instagram",
      text: "gaurang_ambasana",
      imgSrc:
        "https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png",
      link: "https://www.instagram.com/gaurang_ambasana/",
    },
    {
      title: "Facebook",
      text: "Gaurang Ambasana",
      imgSrc:
        "https://seeklogo.com/images/F/facebook-logo-966BBFBC34-seeklogo.com.png",
      link: "https://www.facebook.com/gaurang.ambasana/",
    },
  ];
  return (
    <div className="c" style={{ height: "auto" }}>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss over a Coffee 🥤</h1>
          <div className="c-info">
            {infoDetails.map((data) => (
              <InfoItem {...data} />
            ))}
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
