import ButtonText from "../components/ButtonTextComponent/ButtonText";

import Comic from "../components/Comic/Comic";
import HomeStyles from "./Home.styled";

import Form from "../components/Form/Form";


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

      <Form label={"Comic Title"} input={`type="text"`} />
    </div>

  );
}

export default Home;
