import comicActionTypes from "../actions/comics/comicActionTypes";

const comicsReducer = (currentComics, action) => {
  let newComics;

  switch (action.type) {
    case comicActionTypes.loadComics:
      newComics = [...action.comics];
      break;

    case comicActionTypes.loadMyAPIComics:
      newComics = [...action.myLocalComics];
      break;

    case comicActionTypes.fetchCommicDetails:
      newComics = { ...action.comic };
      break;

    case comicActionTypes.selectedComic:
      newComics = [...currentComics, action.comic];
      break;

    default:
      newComics = [...currentComics];
  }

  return newComics;
};

export default comicsReducer;
