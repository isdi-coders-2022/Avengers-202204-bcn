import comicActionTypes from "../actions/comics/comicActionTypes";

const comicDetailReducer = (currentComic, action) => {
  let newComic;

  switch (action.type) {
    case comicActionTypes.getCommicDetails:
      newComic = { ...action.comic };
      break;

    default:
      newComic = { ...currentComic };
  }

  return newComic;
};

export default comicDetailReducer;
