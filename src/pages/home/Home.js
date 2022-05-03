import Comic from "../../components/Comic/Comic";
import Info from "../../components/Info/Info";
import HomeStyles from "./Home.styled";

function Home() {
  return (
    <HomeStyles>
      <Info />
      <Comic
        imageUrl="/assets/Alien.jpeg"
        title="Alien"
        info="Info about alien akjgalgkòjgòagfòaG"
      />
    </HomeStyles>
  );
}
export default Home;
