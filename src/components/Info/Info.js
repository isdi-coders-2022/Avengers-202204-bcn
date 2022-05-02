import InfoStyle from "./Info-Style";

const Info = ({ numberOfComics }) => {
  return (
    <InfoStyle primary>
      <p>{numberOfComics} comics in the list</p>
    </InfoStyle>
  );
};

export default Info;
