import HeaderHero from "../../components/HeaderHero/HeaderHero";
import Info from "../../components/Info/Info";
import WantComicList from "../../components/WantComicList/WantComicList";
import HomeStyled from "../home/HomeStyled";

const SelectedComiclist = () => {
  return (
    <HomeStyled>
      <HeaderHero />
      <Info />
      <WantComicList />
    </HomeStyled>
  );
};
export default SelectedComiclist;
