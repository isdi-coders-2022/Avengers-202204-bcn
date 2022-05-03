import StyledHeaderHero, { StyledThumbnail } from "./HeaderHero.styled";

const HeaderHero = () => {
  return (
    <StyledHeaderHero
      data-testid="headerHero"
      src="Alien.jpeg"
      className="container-fluid"
    >
      <StyledThumbnail src={"Alien.jpeg"} />
    </StyledHeaderHero>
  );
};

export default HeaderHero;
