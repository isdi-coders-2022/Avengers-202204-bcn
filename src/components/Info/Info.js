import InfoStyle from "./Info.styled";

const Info = () => {
  return (
    <InfoStyle className="info">
      <span className="info info__title">Comics List</span>
      <span className="info info__state">4 Comics</span>
    </InfoStyle>
  );
};

export default Info;
