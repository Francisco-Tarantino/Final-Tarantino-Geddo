import { createContext, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "eliminar":
            state = true;
            return state;
        case "favorite":
            state = false;
            return state;
        default:
            return state;
    }
}

export const ButtomContext = createContext(undefined);

const CardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, false);
    return (
        <ButtomContext.Provider value={{ state, dispatch }}>
          {children}
        </ButtomContext.Provider>
      );
}

export default CardProvider;