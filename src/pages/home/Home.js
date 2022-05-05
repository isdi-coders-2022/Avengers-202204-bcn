import { useContext } from "react";
import ButtonLoad from "../../components/ButtonText/ButtonLoad";
import Comic from "../../components/Comic/Comic";
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
      <ButtonLoad />
    </HomeStyles>
  );
}
export default Home;
