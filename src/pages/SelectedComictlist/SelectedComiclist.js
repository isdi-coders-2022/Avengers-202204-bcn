import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Info from "../../components/Info/Info";
import WantComicList from "../../components/WantComicList/WantComicList";
import HomeStyles from "../home/Home.styled";

const Wantlist = () => {
  return (
    <HomeStyles>
      <HeaderHero />
      <Info />
      <WantComicList />
    </HomeStyles>
  );
};
export default Wantlist;
