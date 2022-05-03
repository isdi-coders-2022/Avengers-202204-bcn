import Tabs from "../Tabs/Tabs";
import StyledComicAbout, {
  StyledAboutContainer,
  StyledBackgroundFilter,
  StyledDivContainer,
  StyledTitle,
} from "./ComicAbout.styled";

const ComicAbout = () => {
  return (
    <>
      <StyledComicAbout>
        <img src="/assets/Alien.jpeg" alt="Alien" />
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
