import { useContext } from "react";
import ComicContext from "../../store/contexts/ComicContext";
import Comic from "../Comic/Comic";
import ComicListStyles from "../ComicList/ComicListStyles";

const WantComicList = () => {
  const { myAPIComics } = useContext(ComicContext);

  return (
    <ComicListStyles className="comic-list">
      {myAPIComics.map((comic) => {
        return <Comic key={comic.id} comic={comic} selected={false} />;
      })}
    </ComicListStyles>
  );
};
export default WantComicList;
