import StyledHeaderHero from "./HeaderHero.styled";

const HeaderHero = (title) => {
  return (
    <StyledHeaderHero data-testid="headerHero">
      <img
        className="thumbnail"
        src="/assets/avengers-banner.jpeg"
        alt={title}
      />
      <img className="comic-cover" src="/assets/Alien.jpeg" alt={title} />

    </StyledHeaderHero>
  );
};

export default HeaderHero;
