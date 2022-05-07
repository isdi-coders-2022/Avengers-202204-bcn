import { useReducer } from "react";
import comicDetailReducer from "../reducers/comicDetailReducer";
import comicsReducer from "../reducers/comicsReducer";
import ComicContext from "./ComicContext";

const ComicContextProvider = ({ children }) => {
  const comicsInitialValue = {
    apiComics: [],
    localApiComics: [],
  };

  const [comics, dispatch] = useReducer(comicsReducer, comicsInitialValue);
  const [comic, dispatchComic] = useReducer(comicDetailReducer, {});

  return (
    <ComicContext.Provider
      value={{
        comics,
        dispatch,
        comic,
        dispatchComic,
      }}
    >
      {children}
    </ComicContext.Provider>
  );
};
export default ComicContextProvider;
