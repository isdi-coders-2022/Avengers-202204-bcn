import { useContext } from "react";
import ComicContext from "../../store/contexts/ComicContext";
import Comic from "../Comic/Comic";
import StyledComicList from "../ComicList/ComicList.styled";

const WantComicList = () => {
  const { myComics } = useContext(ComicContext);

  return (
    <StyledComicList className="comic-list">
      {myComics.map((comic) => {
        return <Comic key={comic.id} comic={comic} selected={true} />;
      })}
    </StyledComicList>
  );
};
export default WantComicList;
