import ButtonLoad from "../../components/ButtonText/ButtonLoad";

import ComicList from "../../components/ComicList/ComicList";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Info from "../../components/Info/Info";

import HomeStyled from "./HomeStyled";
import { DotSpinner } from "@uiball/loaders";

function Home() {
  return (
    <HomeStyled>
      <HeaderHero />
      <Info />
      <ComicList />

      <DotSpinner size={40} speed={0.9} color="black" />
      <ButtonLoad />
    </HomeStyled>
  );
}
export default Home;
