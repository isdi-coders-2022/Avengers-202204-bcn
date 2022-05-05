import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderHeroStyles from "./HeaderHeroStyles";

const HeaderHero = (_title) => {
  const [imageActive, setImageActive] = useState(false);

  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    return pathname === "/about" ? setImageActive(true) : setImageActive(false);
  }, [pathname]);

  return (
    <HeaderHeroStyles data-testid="headerHero">
      {!imageActive && (
        <div className="logos">
          <img
            className="marvel-logo"
            src="/assets/Marvel_Logo.png"
            alt="marvel logo"
          />
          <img
            className="becomics-logo"
            src="/assets/Becomics-logo.png"
            alt="marvel logo"
          />
        </div>
      )}
      <img
        className="thumbnail"
        src="/assets/avengers-banner-light.avif"
        alt="title"
      />
      <img
        className={`comic-cover${imageActive ? "" : " on"}`}
        src="/assets/Alien.jpeg"
        alt="title"
      />
    </HeaderHeroStyles>
  );
};

export default HeaderHero;
