import actionTypes from "../actions/api/actionTypes";
import actionsTypes from "../actions/comics/comicActionTypes";

const comicsReducer = (currentComics, action) => {
  let newComics;

  switch (action.type) {
    case actionTypes.loadComics:
      newComics = [...action.comics];
      break;
    case actionsTypes.selectedComic:
      newComics = [...currentComics, action.comic];
      break;
    default:
      newComics = [...currentComics];
  }

  return newComics;
};

export default comicsReducer;
