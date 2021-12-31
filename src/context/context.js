import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const darkModes = [true, false];

const intialState = {
  darkMode: darkModes[Math.floor(Math.random() * darkModes.length)],
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
    }

    default: {
      return state;
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, intialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
