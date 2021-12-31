import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectInfo from "./components/projects-info/ProjectInfo";
import ContactInfo from "./components/contact-info/ContactInfo";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context/context";

const App = () => {
  const { state } = useContext(ThemeContext);
  const { darkMode } = state;

  const lightThemeColor = [
    "yellow",
    "pink",
    "orange",
    "aqua",
    "grey",
    "violet",
    "white",
    "greenyellow",
    "lightgreen",
    "plum",
    "wheat",
  ];

  const themeBasedStyle = {
    backgroundColor: darkMode
      ? "#222"
      : lightThemeColor[Math.floor(Math.random() * lightThemeColor.length)],
    color: darkMode && "white",
  };

  return (
    <div style={themeBasedStyle}>
      <Toggle />
      <Intro />
      <About />
      <ProjectInfo />
      <ContactInfo />
    </div>
  );
};

export default App;
