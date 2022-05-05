import { useContext } from "react";
import ButtonLoad from "../../components/ButtonText/ButtonLoad";
import ComicList from "../../components/ComicList/ComicList";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Info from "../../components/Info/Info";
import APIContext from "../../store/contexts/APIContext";

import HomeStyles from "./Home.styled";

function Home() {
  const { comics, dispatch } = useContext(APIContext);
  // console.log(comics);

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
