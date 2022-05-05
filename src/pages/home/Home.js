import ButtonLoad from "../../components/ButtonText/ButtonLoad";

import ComicList from "../../components/ComicList/ComicList";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Info from "../../components/Info/Info";

import HomeStyles from "./HomeStyles";

function Home() {
  return (
    <HomeStyles>
      <HeaderHero />
      <Info />
      <ComicList />
      <ButtonLoad />
    </HomeStyles>
  );
}
export default Home;
