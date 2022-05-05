import actionsTypes from "./comicActionTypes";

export const loadComicsAction = (comics) => ({
  type: actionsTypes.loadComics,
  comics,
});

export const fetchComicDetailAction = (comic) => ({
  type: actionsTypes.fetchCommicDetails,
  comic,
});

export const addComicAction = (comic) => ({
  type: actionsTypes.addComic,
  comic,
});

export const removeComicAction = (id) => ({
  type: actionsTypes.removeComic,
  id,
});

export const selectedComicAction = (comic) => ({
  type: actionsTypes.selectedComic,
  comic,
});
