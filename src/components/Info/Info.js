import { useState } from "react";
import InfoStyle from "./Info.styled";

const Info = () => {
  const [numberOfComics, setNumberOfComics] = useState(4);

  return (
    <InfoStyle className="info">
      <span className="info info__title">Comics List</span>
      <span className="info info__state">{numberOfComics} Comics</span>
    </InfoStyle>
  );
};

export default Info;
