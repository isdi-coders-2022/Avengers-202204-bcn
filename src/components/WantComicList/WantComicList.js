import { useContext, useEffect } from "react";
import useAPI from "../../hooks/useAPI";
import ComicContext from "../../store/contexts/ComicContext";
import Comic from "../Comic/Comic";
import ComicListStyled from "../ComicList/ComicListStyled";

const WantComicList = () => {
  const { comics } = useContext(ComicContext);
  const { loadLocalAPI } = useAPI();

  useEffect(() => {
    loadLocalAPI();
  }, [loadLocalAPI]);

  return (
    <ComicListStyled className="comic-list">
      {comics.localApiComics.map((comic) => {
        return <Comic key={comic.id} comic={comic} selected={false} />;
      })}
    </ComicListStyled>
  );
};
export default WantComicList;
