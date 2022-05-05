import comicActionsTypes from "../actions/comics/comicActionTypes";

const comicsReducer = (currentComics, action) => {
  let newComics;

  switch (action.type) {
    case comicActionsTypes.loadComics:
      newComics = [...action.comics];
      break;

    case comicActionsTypes.loadMyAPIComics:
      newComics = [...action.myLocalComics];
      break;

    case comicActionsTypes.fetchCommicDetails:
      newComics = { ...action.comic };
      break;

    case comicActionsTypes.selectedComic:
      newComics = [...currentComics, action.comic];
      break;

    default:
      newComics = [...currentComics];
  }

  return newComics;
};

export default comicsReducer;
