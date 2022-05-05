import { useContext } from "react";
import ComicContext from "../../store/contexts/ComicContext";
import Comic from "../Comic/Comic";
import ComicListStyles from "./ComicListStyles";

const ComicList = () => {
  const { comics } = useContext(ComicContext);

  return (
    <ComicListStyles className="comic-list">
      {comics.map((comic) => {
        return <Comic key={comic.id} comic={comic} selected={true} />;
      })}
    </ComicListStyles>
  );
};
export default ComicList;
