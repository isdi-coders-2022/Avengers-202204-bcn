import ComicStyles from "./Comic-Style";

const Comic = ({ title, imageUrl, info }) => {
  return (
    <ComicStyles className="col-8">
      <div className="comic d-flex flex-column">
        <div className="comic__image-container">
          <img className="comic__image" src={imageUrl} alt={title}></img>
        </div>
        <div className="comic__layout">
          <div className="comic__title-container">
            <span className="comic__title-header">TITLE</span>
            <h3 className="comic__title">{title}</h3>
          </div>
          <p className="comic__info">{info}</p>
        </div>
      </div>
    </ComicStyles>
  );
};

export default Comic;
