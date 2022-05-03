import InfoStyle from "./Info.styled";

const Info = ({ numberOfComics }) => {
  return (
    <InfoStyle>
      <p>{numberOfComics} comics in the list</p>
    </InfoStyle>
  );
};

export default Info;
