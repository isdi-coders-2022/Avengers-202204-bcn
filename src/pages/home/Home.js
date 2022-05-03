import Comic from "../../components/Comic/Comic";
import HomeStyles from "./Home.styled";

function Home() {
  return (
    <HomeStyles>
      Home
      <Comic
        imageUrl="/assets/Alien.jpeg"
        title="Alien"
        info="Info about alien akjgalgkòjgòagfòaG"
      />
    </HomeStyles>
  );
}
export default Home;
