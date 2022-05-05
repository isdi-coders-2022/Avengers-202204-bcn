import actionTypes from "../api/actionTypes";

export const loadComicsAction = (comics) => ({
  type: actionTypes.loadComics,
  comics,
});

export const addComicAction = (comic) => ({
  type: actionTypes.addComic,
  comic,
});

export const removeComicAction = (id) => ({
  type: actionTypes.removeComic,
  id,
});

export const selectedComicAction = (id) => ({
  type: actionTypes.selectedComic,
  id,
});
