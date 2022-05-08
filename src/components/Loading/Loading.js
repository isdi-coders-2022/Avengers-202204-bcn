import { useContext } from "react";
import APIContext from "../../store/contexts/APIContext";
import HeaderHeroStyles from "./LoadingStyles";

const Loading = () => {
  const {
    apiStatus: { loading },
  } = useContext(APIContext);

  return (
    <>
      {loading && (
        <>
          <HeaderHeroStyles title="loading">
            <div title="loading" className="dot-spinner">
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
            </div>
          </HeaderHeroStyles>
        </>
      )}
    </>
  );
};

export default Loading;
