import ButtonLoad from "../../components/ButtonText/ButtonLoad";
import Comic from "../../components/Comic/Comic";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Info from "../../components/Info/Info";
import HomeStyles from "./Home.styled";

function Home() {
  return (
    <HomeStyles>
      <HeaderHero />
      <Info />
      <ButtonLoad />
    </HomeStyles>
  );
}
export default Home;
