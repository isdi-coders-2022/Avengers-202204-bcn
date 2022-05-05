import { useContext } from "react";
import ComicContext from "../../store/contexts/ComicContext";
import Comic from "../Comic/Comic";

const WantComicList = () => {
  const { myComics } = useContext(ComicContext);
  return (
    <ul>
      {myComics.map((comic) => {
        return <Comic key={comic.id} comic={comic} selected={true} />;
      })}
    </ul>
  );
};
export default WantComicList;
