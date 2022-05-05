import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComicStyles from "./Comic.styled";
import { NavLink } from "react-router-dom";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ComicContext from "../../store/contexts/ComicContext";
import { selectedComicAction } from "../../store/actions/comics/comicActionCreator";

const Comic = ({ action, selected, comic }) => {
  const { title, thumbnail } = comic;
  const { myComicsDispatch } = useContext(ComicContext);
  const splitThumbnail = thumbnail.path.split("//");
  splitThumbnail[0] = "https://";

  const bookmarkAction = (event) => {
    event.preventDefault();
    myComicsDispatch(selectedComicAction(comic));
  };

  return (
    <ComicStyles className="col-7" onClick={action}>
      <NavLink to={`/about/${comic.id}`}>
        <div className="comic d-flex flex-column">
          <div className="comic__image-container">
            <img
              className="comic__image"
              src={`${splitThumbnail.join("")}.${thumbnail.extension}`}
              alt={title}
            />
          </div>
          <div className="comic__layout">
            <div className="comic__title-container">
              <span className="comic__title-header">TITLE</span>
              <h3 className="comic__title">{title}</h3>
            </div>
            {/* <p className="comic__info">{info}</p> */}
          </div>
          <FontAwesomeIcon
            className={`icon ${selected ? "on" : ""} fa-2xl`}
            icon={faBookmark}
            onClick={(event) => {
              bookmarkAction(event);
            }}
          ></FontAwesomeIcon>
        </div>
      </NavLink>
    </ComicStyles>
  );
};

export default Comic;
