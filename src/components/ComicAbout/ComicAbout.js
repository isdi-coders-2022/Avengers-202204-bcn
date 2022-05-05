import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import ComicContext from "../../store/contexts/ComicContext";
import Tabs from "../Tabs/Tabs";
import StyledComicAbout, {
  StyledAboutContainer,
  StyledBackgroundFilter,
  StyledDivContainer,
  StyledTitle,
} from "./ComicAbout.styled";

const ComicAbout = () => {
  let { id } = useParams();

  const { fetchComicDetailAPI } = useAPI();

  useEffect(() => {
    fetchComicDetailAPI(id);
  }, [fetchComicDetailAPI, id]);

  const { comic } = useContext(ComicContext);

  return (
    <>
      <StyledComicAbout>
        <img src="/assets/Alien.jpeg" className="comic-image" alt="Alien" />

        <StyledBackgroundFilter />
        <StyledDivContainer>
          <StyledTitle>Alien</StyledTitle>
        </StyledDivContainer>

        <StyledAboutContainer>
          <Tabs />
        </StyledAboutContainer>
      </StyledComicAbout>
    </>
  );
};

export default ComicAbout;
