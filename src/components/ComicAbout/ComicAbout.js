import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import ComicContext from "../../store/contexts/ComicContext";
import HeaderHero from "../HeaderHero/HeaderHero";
import Tabs from "../Tabs/Tabs";
import StyledComicAbout, {
  StyledAboutContainer,
  StyledBackgroundFilter,
  StyledDivContainer,
  StyledTitle,
} from "./ComicAbout.styled";

const ComicAbout = () => {
  let { id } = useParams();

  const { getComicDetailAPI } = useAPI();

  useEffect(() => {
    getComicDetailAPI(id);
  }, [getComicDetailAPI, id]);

  const { comic } = useContext(ComicContext);

  return (
    <>
      {typeof comic !== "undefined" && (
        <>
          <HeaderHero comic={comic} />

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
      )}
    </>
  );
};

export default ComicAbout;
