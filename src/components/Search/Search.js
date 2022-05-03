import StyleSearch from "./Search.styled";

const Search = ({ active }) => {
  return (
    <StyleSearch className={`search ${active ? "" : "off"}`}>
      <input type="text" placeholder="Search" />
    </StyleSearch>
  );
};

export default Search;
