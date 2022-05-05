import { useReducer } from "react";
import comicsReducer from "../reducers/comicsReducer";
import ComicContext from "./ComicContext";

const ComicContextProvider = ({ children }) => {
  const [comics, dispatch] = useReducer(comicsReducer, []);

  return (
    <ComicContext.Provider value={{ comics, dispatch }}>
      {children}
    </ComicContext.Provider>
  );
};
export default ComicContextProvider;
