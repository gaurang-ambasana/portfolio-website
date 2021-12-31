import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const intialState = {
  darkMode: true,
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
