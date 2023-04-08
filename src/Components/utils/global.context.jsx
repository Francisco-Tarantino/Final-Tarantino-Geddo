import { createContext, useReducer } from "react";

export const initialState = { theme: false }

const saveThemeFromStorage = (param) => {
  localStorage.setItem("theme", JSON.stringify(param))
}

const getThemeFromStorage = () => {
  const localData = localStorage.getItem("theme")
  return localData ? {theme: JSON.parse(localData)} : initialState;
}

const reducer = (state,action) => {
  switch (action.type) {
    case "dark":
      saveThemeFromStorage(action.payload)
      const data = localStorage.getItem("theme");
      state = {theme: JSON.parse(data)};
      return state ;
    default:
      return state ;
  }
}
export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getThemeFromStorage());
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
