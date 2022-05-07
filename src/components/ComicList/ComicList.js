import { useContext } from "react";
import ComicContext from "../../store/contexts/ComicContext";
import Comic from "../Comic/Comic";
import ComicListStyled from "./ComicListStyled";

const ComicList = () => {
  const { comics } = useContext(ComicContext);

  return (
    <ComicListStyled className="comic-list">
      {comics.apiComics.map((comic) => {
        return <Comic key={comic.id} comic={comic} selected={false} />;
      })}
    </ComicListStyled>
  );
};
export default ComicList;
