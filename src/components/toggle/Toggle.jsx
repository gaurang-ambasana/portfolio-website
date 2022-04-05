import "./toggle.css";
import sunIcon from "../../img/sun.png";
import moonIcon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/context";

const Toggle = () => {
  const { dispatch, state } = useContext(ThemeContext);
  const { darkMode } = state;

  const buttonStyle = {
    left: darkMode ? 0 : 25,
  };

  const action = {
    type: "TOGGLE",
  };

  const toggleTheme = () => dispatch(action);

  return (
    <div className="t" onClick={toggleTheme}>
      <img className="t-icon" src={sunIcon} alt="sun" />
      <img className="t-icon" src={moonIcon} alt="moon" />
      <div className="t-btn" style={buttonStyle}></div>
    </div>
  );
};

export default Toggle;
