import { useContext } from "react";
import ComicContext from "../../store/contexts/ComicContext";
import Comic from "../Comic/Comic";
import StyledComicList from "../ComicList/ComicList.styled";

const WantComicList = () => {
  const { myAPIComics } = useContext(ComicContext);

  return (
    <StyledComicList className="comic-list">
      {myAPIComics.map((comic) => {
        return <Comic key={comic.id} comic={comic} selected={false} />;
      })}
    </StyledComicList>
  );
};
export default WantComicList;
