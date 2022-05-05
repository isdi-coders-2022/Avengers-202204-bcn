import ButtonLoad from "../../components/ButtonText/ButtonLoad";

import ComicList from "../../components/ComicList/ComicList";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Info from "../../components/Info/Info";

import HomeStyled from "./HomeStyled";

function Home() {
  return (
    <HomeStyled>
      <HeaderHero />
      <Info />
      <ComicList />
      <ButtonLoad />
    </HomeStyled>
  );
}
export default Home;
