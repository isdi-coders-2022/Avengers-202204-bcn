import { useContext } from "react";
import ComicContext from "../../store/contexts/ComicContext";
import Comic from "../Comic/Comic";
import StyledComicList from "./ComicList.styled";

const ComicList = () => {
  const { comics } = useContext(ComicContext);

  return (
    <StyledComicList className="comic-list">
      {comics.map((comic) => {
        return <Comic key={comic.id} comic={comic} selected={true} />;
      })}
    </StyledComicList>
  );
};
export default ComicList;
