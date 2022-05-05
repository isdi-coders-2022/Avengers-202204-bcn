import SearchStyles from "./SearchStyles";

const Search = ({ active }) => {
  return (
    <SearchStyles className={`search ${active ? "" : "off"}`}>
      <input type="text" placeholder="Search" />
    </SearchStyles>
  );
};

export default Search;
