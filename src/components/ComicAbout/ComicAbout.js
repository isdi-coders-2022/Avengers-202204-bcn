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
        <StyledBackgroundFilter className="" />
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
