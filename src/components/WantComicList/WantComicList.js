import { useContext } from "react";
import ComicContext from "../../store/contexts/ComicContext";
import Comic from "../Comic/Comic";
import ComicListStyled from "../ComicList/ComicListStyled";

const WantComicList = () => {
  const { myAPIComics } = useContext(ComicContext);

  return (
    <ComicListStyled className="comic-list">
      {myAPIComics.map((comic) => {
        return <Comic key={comic.id} comic={comic} selected={false} />;
      })}
    </ComicListStyled>
  );
};
export default WantComicList;
