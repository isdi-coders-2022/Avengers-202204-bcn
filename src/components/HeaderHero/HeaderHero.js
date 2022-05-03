import StyledHeaderHero, { StyledThumbnail } from "./HeaderHero.styled";

const HeaderHero = () => {
  return (
    <StyledHeaderHero className="container-fluid">
      <StyledThumbnail className="thumbnail" />
    </StyledHeaderHero>
  );
};

export default HeaderHero;
