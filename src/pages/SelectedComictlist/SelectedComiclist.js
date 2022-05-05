import ComicList from "../../components/ComicList/ComicList";
import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Info from "../../components/Info/Info";
import HomeStyles from "../home/Home.styled";

const Wantlist = () => {
  return (
    <HomeStyles>
      <HeaderHero />
      <Info />
      <ComicList />
    </HomeStyles>
  );
};
export default Wantlist;
