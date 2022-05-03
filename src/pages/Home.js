import ButtonText from "../components/ButtonText/ButtonText";

import Comic from "../components/Comic/Comic";
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
      <ButtonText text="CREATE" />
    </HomeStyles>
  );
}

export default Home;
