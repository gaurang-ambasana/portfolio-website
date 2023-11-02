import "./intro.css";
import Batman from "../../img/20003913-removebg-preview.png";
import Superman from "../../img/superman-5392758_1280.webp";
import Spiderman from "../../img/spiderman-7810368_1280.png";
import Ironman from "../../img/iron-man-5471434_1280.png";
import CaptainAmerica from "../../img/captain-america-6563214_1280.png";
import Deadpool from "../../img/deadpool-5783526_1280-removebg-preview.png";
import Hulk from "../../img/hulk-5959620_1280.png";
import Bayek from "../../img/bayek.png";
import Kratos from "../../img/kratos.png";
import { useEffect, useState } from "react";
import MouseIcon from "./MouseIcon";

const Intro = () => {
  const [imgRotateAngle, setImgRotateAngle] = useState("0deg");
  const [imgLink, setImgLink] = useState(Batman);

  useEffect(() => {
    const imgLinks = [
      Batman,
      Bayek,
      CaptainAmerica,
      Deadpool,
      Hulk,
      Ironman,
      Spiderman,
      Superman,
      Kratos,
    ];

    let i = 1;

    const effectTimer = setInterval(() => {
      const flag = i++ % 2;
      setImgLink(imgLinks[i]);
      setImgRotateAngle(`${flag ? -3 : 3}deg`);

      if (i === imgLinks.length) i = 0;
    }, 2000);

    return () => clearInterval(effectTimer);
  }, []);

  const titles = [
    "Software Engineer",
    "Gamer 🎮",
    "Serial Eater 🍔",
    "Cinephile 🎥",
    "Car Freak 🏎",
  ];

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello There 👋 My name is</h2>
          <h1 className="i-name">Gaurang 😎</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              {titles.map((t, i) => (
                <div className="i-title-item" key={`${i}-${t}`}>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <p className="i-desc">
            A geek &amp; techie by heart 💚
            <br />
            <br />
            Enthusiastic Software Engineer by profession, passionate about Clean
            Code 💻
            <br />
            Apart from it, A Gamer, Car Freak
            <br />
            And not to mention big fond of Cinema 🎦
          </p>
        </div>
        <div className="i-scroll">
          <p style={{ marginRight: "1rem" }}>Know More</p>
          <MouseIcon />
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img
          src={imgLink}
          alt="na"
          className="i-img"
          style={{ rotate: imgRotateAngle }}
        />
      </div>
    </div>
  );
};

export default Intro;
