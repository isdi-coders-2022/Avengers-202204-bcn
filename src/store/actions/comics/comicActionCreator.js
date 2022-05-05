import actionTypes from "../api/actionTypes";
import actionsTypes from "./comicActionTypes";

export const loadComicsAction = (comics) => ({
  type: actionTypes.loadComics,
  comics,
});

export const fetchComicDetailAction = (comic) => ({
  type: actionTypes.fetchCommicDetails,
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
