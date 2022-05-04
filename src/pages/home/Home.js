import Comic from "../../components/Comic/Comic";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Info from "../../components/Info/Info";
import HomeStyles from "./Home.styled";

function Home() {
  return (
    <HomeStyles>
      <HeaderHero />
      <Info />
      <Comic imageUrl="/assets/Alien.jpeg" title="Alien" info="Alien" />
    </HomeStyles>
  );
}
export default Home;
