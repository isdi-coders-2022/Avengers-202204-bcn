import { useReducer } from "react";
import comicDetailReducer from "../reducers/comicDetailReducer";
import comicsReducer from "../reducers/comicsReducer";
import ComicContext from "./ComicContext";

const ComicContextProvider = ({ children }) => {
  const [comics, dispatch] = useReducer(comicsReducer, []);
  const [comic, dispatchComic] = useReducer(comicDetailReducer, {});
  const [myComics, myComicsDispatch] = useReducer(comicsReducer, []);
  const [myAPIComics, myAPIComicsDispatch] = useReducer(comicsReducer, []);
  return (
    <ComicContext.Provider
      value={{
        comics,
        dispatch,
        comic,
        dispatchComic,
        myComics,
        myComicsDispatch,
        myAPIComics,
        myAPIComicsDispatch,
      }}
    >
      {children}
    </ComicContext.Provider>
  );
};
export default ComicContextProvider;
