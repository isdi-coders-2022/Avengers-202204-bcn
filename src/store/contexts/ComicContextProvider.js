import ComicContext from "./ComicContext";

const ComicContextProvider = ({ children }) => {
  return <ComicContext.Provider>{children}</ComicContext.Provider>;
};
export default ComicContextProvider;
