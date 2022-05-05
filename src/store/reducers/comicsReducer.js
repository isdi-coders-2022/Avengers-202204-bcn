import actionsTypes from "../actions/comics/comicActionTypes";

const comicsReducer = (currentComics, action) => {
  let newComics;

  switch (action.type) {
    case actionsTypes.loadComics:
      newComics = [...action.comics];
      break;

    case actionsTypes.fetchCommicDetails:
      newComics = { ...action.comic };
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
