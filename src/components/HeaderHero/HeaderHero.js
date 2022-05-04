import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StyledHeaderHero from "./HeaderHero.styled";

const HeaderHero = (title) => {
  const [imageActive, setImageActive] = useState(false);

  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    return pathname === "/about" ? setImageActive(true) : setImageActive(false);
  }, [pathname]);

  return (
    <StyledHeaderHero data-testid="headerHero">
      <div className="logos">
        <img
          className="marvel-logo"
          src="/assets/Marvel_Logo.png"
          alt="marvel logo"
        />
      </div>
      <img
        className="thumbnail"
        src="/assets/avengers-banner.jpeg"
        alt="title"
      />

      <img
        className={`comic-cover${imageActive ? "" : " on"}`}
        src="/assets/Alien.jpeg"
        alt="title"
      />
    </StyledHeaderHero>
  );
};

export default HeaderHero;
