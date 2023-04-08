import { createContext, useReducer } from "react";

const getDentistaFromStorage = () => {
  const localData = localStorage.getItem("dentista");
  return localData ? JSON.parse(localData) : [];
};

const saveDentistaFromStorage = (data) => {
  const datos = JSON.stringify(data)
  localStorage.setItem("dentista", datos);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addFav":
      const filterFavs = state.filter((item) => item.id == action.payload.id);
      if (filterFavs.length === 0) {
        saveDentistaFromStorage([...state, action.payload]);
        return [...state, action.payload];
      } else {
        return state;
      }
    case "deleteFav":
      const filterFavsDelete = state.filter(
        (item) => item.id != action.payload.id
      );
        saveDentistaFromStorage(filterFavsDelete);
      return [state];
    default:
      return state;
  }
};
export const FavContext = createContext(undefined);

const DentistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getDentistaFromStorage());

  return (
    <FavContext.Provider value={{ state, dispatch }}>
      {children}
    </FavContext.Provider>
  );
};
export default DentistProvider;
