import { useContext } from "react";
import ComicContext from "../../store/contexts/ComicContext";
import Comic from "../Comic/Comic";
import ComicListStyles from "../ComicList/ComicListStyles";

const WantComicList = () => {
  const { myComics } = useContext(ComicContext);

  return (
    <ComicListStyles className="comic-list">
      {myComics.map((comic) => {
        return <Comic key={comic.id} comic={comic} selected={true} />;
      })}
    </ComicListStyles>
  );
};
export default WantComicList;
