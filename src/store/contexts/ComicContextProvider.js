import { useReducer } from "react";
import comicsReducer from "../reducers/comicsReducer";
import ComicContext from "./ComicContext";

const ComicContextProvider = ({ children }) => {
  const [comics, dispatch] = useReducer(comicsReducer, []);
  const [myComics, myComicsDispatch] = useReducer(comicsReducer, []);
  return (
    <ComicContext.Provider
      value={{ comics, dispatch, myComics, myComicsDispatch }}
    >
      {children}
    </ComicContext.Provider>
  );
};
export default ComicContextProvider;